import { Suspense, memo, useEffect, useMemo, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import {
  OrbitControls,
  useGLTF,
  Environment,
  Lightformer,
} from '@react-three/drei';
import {
  EffectComposer as PPEffectComposer,
  RenderPass,
  EffectPass,
} from 'postprocessing';
import * as THREE from 'three';

import { DitheringEffect } from './DitheringEffect';

// Use Vite's BASE_URL so it works both locally and on GitHub Pages.
// Normalize base to always end with exactly one trailing slash before joining.
const RAW_BASE = import.meta.env.BASE_URL || '/';
const BASE = RAW_BASE.endsWith('/') ? RAW_BASE : `${RAW_BASE}/`;
const CAT_URL = `${BASE}quaternius_cc0-cat-802.glb`;

// Pre-load to avoid blocking the first frame
useGLTF.preload(CAT_URL);

// === Hardcoded scene defaults (previously tunable via Leva) ===
const INTENSITY = 1.5;
const HIGHLIGHT = '#0066ff';
const DITHERING_GRID_SIZE = 4;
const PIXEL_SIZE_RATIO = 1;
const GRAYSCALE_ONLY = false;

/**
 * Cat 3D model — renders the entire GLB scene via <primitive>.
 *
 * The scene is cloned and manually centered so the model's bounding box
 * center is locked to (0, 0, 0). This is more reliable than drei's
 * <Center> which can produce stale / inconsistent offsets when the scene
 * reference is shared from the useGLTF cache (race condition on reload).
 */
function CatModel({ scale = 1.8, ...props }) {
  const { scene } = useGLTF(CAT_URL);

  const centeredScene = useMemo(() => {
    const cloned = scene.clone(true);
    cloned.position.set(0, 0, 0);
    cloned.updateMatrixWorld(true);
    const box = new THREE.Box3().setFromObject(cloned);
    const center = box.getCenter(new THREE.Vector3());
    cloned.position.set(-center.x, -center.y, -center.z);
    cloned.updateMatrixWorld(true);
    return cloned;
  }, [scene]);

  return (
    <group scale={scale} {...props}>
      <primitive object={centeredScene} />
    </group>
  );
}

/**
 * Lightweight environment lighting (no heavy room geometry).
 * Just a couple of Lightformers around an Environment for a clean rim light.
 */
function SceneEnvironment({ intensity, highlight }) {
  return (
    <Environment resolution={256} background={false} environmentIntensity={intensity}>
      <Lightformer
        form="ring"
        position={[2, 3, -2]}
        scale={10}
        color={highlight}
        intensity={15}
      />
      <Lightformer
        form="box"
        intensity={20}
        position={[-5, 5, 5]}
        scale={[2, 2, 0.1]}
      />
      <Lightformer
        form="box"
        intensity={15}
        position={[5, 5, 5]}
        scale={[2, 2, 0.1]}
      />
    </Environment>
  );
}

/**
 * Post-processing pipeline (RenderPass -> Dithering).
 * Uses hardcoded module-level constants — no Leva.
 *
 * IMPORTANT: composer size must track the R3F canvas size (via useThree's
 * `size`), NOT window.innerWidth. The canvas here is a small square slot
 * (~20rem), so using window size would stretch the composer viewport far
 * beyond the actual canvas and push the model out of view on desktop.
 */
const PostProcessing = memo(function PostProcessing() {
  const ditheringGridSize = DITHERING_GRID_SIZE;
  const pixelSizeRatio = PIXEL_SIZE_RATIO;
  const grayscaleOnly = GRAYSCALE_ONLY;

  const gl = useThree((state) => state.gl);
  const r3fScene = useThree((state) => state.scene);
  const r3fCamera = useThree((state) => state.camera);
  const size = useThree((state) => state.size);

  const composerRef = useRef(null);

  // Create composer once, tied to the R3F renderer.
  useEffect(() => {
    const composer = new PPEffectComposer(gl);
    composerRef.current = composer;
    return () => {
      composer.dispose();
      composerRef.current = null;
    };
  }, [gl]);

  // (Re)build the pass chain whenever scene/camera/effect params change.
  useEffect(() => {
    const composer = composerRef.current;
    if (!composer || !r3fScene || !r3fCamera) return;
    composer.removeAllPasses();
    composer.addPass(new RenderPass(r3fScene, r3fCamera));
    composer.addPass(
      new EffectPass(
        r3fCamera,
        new DitheringEffect({
          gridSize: ditheringGridSize,
          pixelSizeRatio,
          grayscaleOnly,
        })
      )
    );
  }, [r3fScene, r3fCamera, ditheringGridSize, pixelSizeRatio, grayscaleOnly]);

  // Keep composer sized to the actual canvas, not the window.
  useEffect(() => {
    if (composerRef.current) {
      composerRef.current.setSize(size.width, size.height);
    }
  }, [size.width, size.height]);

  useFrame(() => {
    if (composerRef.current) {
      composerRef.current.render();
    }
  }, 1);

  return null;
});

/**
 * DitheringCat — drop-in replacement for the About Me photo.
 * Renders an interactive cat 3D model with a dithering post-processing pass.
 *
 * The component is sized via its parent's CSS box (className), so it
 * automatically inherits the responsive sizing of the slot it replaces.
 *
 * Controls: drag to rotate, scroll/pinch to zoom. Pan is disabled.
 */
export default function DitheringCat({ className = '' }) {
  return (
    <div className={className} style={{ position: 'relative' }}>
      <Canvas
        shadows={false}
        dpr={[1, 2]}
        camera={{ position: [0, 0, 3.2], fov: 50 }}
        gl={{ alpha: true, antialias: true }}
        style={{ width: '100%', height: '100%', background: 'transparent' }}
      >
        <Suspense fallback={null}>
          {/*
            CatModel clones + manually centers the GLB so its bounding box
            center sits at (0, 0, 0). Combined with OrbitControls
            target=[0,0,0] below, the cat stays perfectly centered in the
            circular slot regardless of viewport size or reload timing.
          */}
          <CatModel
            scale={3.1}
            rotation={[0, -Math.PI / 4, 0]}
            position={[0, -1.0, 0]}
          />
          <SceneEnvironment intensity={INTENSITY} highlight={HIGHLIGHT} />
        </Suspense>

        <OrbitControls
          makeDefault
          target={[0, 0.9, 0]}
          enablePan={false}
          enableZoom={true}
          enableRotate={true}
          enableDamping={true}
          dampingFactor={0.08}
          minDistance={2}
          maxDistance={12}
          autoRotate
          autoRotateSpeed={1.5}
        />

        <PostProcessing />
      </Canvas>
    </div>
  );
}
