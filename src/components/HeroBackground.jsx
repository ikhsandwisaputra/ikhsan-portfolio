import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';

// Settings default (hasil tuning di tes/index.html)
// Dev-only GUI: buka http://localhost:5173/?gui=1 buat tweak lagi

// === DESKTOP DEFAULTS ===
const desktopParams = {
  // Colors
  colorBg: '#02101c',
  colorLine: '#bea2a2',

  // Signal Colors
  colorSignal: '#16922f',
  useColor2: false,
  colorSignal2: '#ff1463',
  useColor3: false,
  colorSignal3: '#ffcc00',

  // Global Transform
  lineCount: 79,
  globalRotation: 180,
  positionX: 37.2,
  positionY: -6.8,

  // Geometry
  spreadHeight: 61.03,
  spreadDepth: 0,
  curveLength: 65.63,
  straightLength: 200,
  curvePower: 0.4915,

  // Line Animation
  waveSpeed: 1.31,
  waveHeight: 0.8,
  lineOpacity: 0.275,

  // Signals
  signalCount: 200,
  speedGlobal: 0.291,
  trailLength: 29,

  // Visuals (Bloom)
  bloomStrength: 2.14,
  bloomRadius: 0.491,
};

// === MOBILE OVERRIDES ===
// Cuma override key yang beda dari desktop. Sisanya inherit.
// Tune di GUI saat viewport <1024px (resize browser / DevTools mobile view).
const mobileOverrides = {
  lineCount: 50,
  signalCount: 100,
  positionX: 0,
  positionY: 0,
  spreadHeight: 35,
  curveLength: 45,
  straightLength: 130,
  bloomStrength: 1.5,
  bloomRadius: 0.4,
};

// Breakpoint mobile: di bawah 1024px (Tailwind `lg`) = mobile/tablet
const MOBILE_QUERY = '(max-width: 1023px)';

function isMobileViewport() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia(MOBILE_QUERY).matches;
}

const SEGMENT_COUNT = 150;
const MAX_TRAIL = 150;

const HeroBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = container.clientWidth;
    let height = container.clientHeight;

    // --- BUILD RUNTIME PARAMS (desktop + mobile overrides kalo perlu) ---
    const params = {
      ...desktopParams,
      ...(isMobileViewport() ? mobileOverrides : {}),
    };

    // --- SCENE SETUP ---
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(params.colorBg);
    scene.fog = new THREE.FogExp2(params.colorBg, 0.002);

    const camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
    camera.position.set(0, 0, 90);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const contentGroup = new THREE.Group();
    contentGroup.position.set(params.positionX, params.positionY, 0);
    contentGroup.rotation.z = THREE.MathUtils.degToRad(params.globalRotation);
    scene.add(contentGroup);

    // --- POST-PROCESSING ---
    const renderScene = new RenderPass(scene, camera);
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(width, height),
      1.5,
      0.4,
      0.85
    );
    bloomPass.threshold = 0;
    bloomPass.strength = params.bloomStrength;
    bloomPass.radius = params.bloomRadius;

    const composer = new EffectComposer(renderer);
    composer.addPass(renderScene);
    composer.addPass(bloomPass);

    // --- MATH & PATH ---
    const tmpVec = new THREE.Vector3();
    function getPathPoint(t, lineIndex, time) {
      const totalLen = params.curveLength + params.straightLength;
      const currentX = -params.curveLength + t * totalLen;

      let y = 0;
      let z = 0;
      const spreadFactor = (lineIndex / params.lineCount - 0.5) * 2;

      if (currentX < 0) {
        const ratio = (currentX + params.curveLength) / params.curveLength;
        let shapeFactor = (Math.cos(ratio * Math.PI) + 1) / 2;
        shapeFactor = Math.pow(shapeFactor, params.curvePower);

        y = spreadFactor * params.spreadHeight * shapeFactor;
        z = spreadFactor * params.spreadDepth * shapeFactor;

        const waveFactor = shapeFactor;
        const wave =
          Math.sin(time * params.waveSpeed + currentX * 0.1 + lineIndex) *
          params.waveHeight *
          waveFactor;
        y += wave;
      }

      tmpVec.set(currentX, y, z);
      return tmpVec;
    }

    // --- MATERIALS ---
    const bgMaterial = new THREE.LineBasicMaterial({
      color: params.colorLine,
      transparent: true,
      opacity: params.lineOpacity,
      depthWrite: false,
    });

    const signalMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      depthTest: false,
      transparent: true,
    });

    const signalColorObj1 = new THREE.Color(params.colorSignal);
    const signalColorObj2 = new THREE.Color(params.colorSignal2);
    const signalColorObj3 = new THREE.Color(params.colorSignal3);

    function pickSignalColor() {
      const choices = [signalColorObj1];
      if (params.useColor2) choices.push(signalColorObj2);
      if (params.useColor3) choices.push(signalColorObj3);
      return choices[Math.floor(Math.random() * choices.length)];
    }

    // --- BUILD / REBUILD ---
    let backgroundLines = [];
    let signals = [];

    function createSignal() {
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(MAX_TRAIL * 3);
      const colors = new Float32Array(MAX_TRAIL * 3);
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      const mesh = new THREE.Line(geometry, signalMaterial);
      mesh.frustumCulled = false;
      mesh.renderOrder = 1;
      contentGroup.add(mesh);

      signals.push({
        mesh,
        laneIndex: Math.floor(Math.random() * params.lineCount),
        speed: 0.2 + Math.random() * 0.5,
        progress: Math.random(),
        history: [],
        assignedColor: pickSignalColor(),
      });
    }

    function rebuildSignals() {
      signals.forEach((s) => {
        contentGroup.remove(s.mesh);
        s.mesh.geometry.dispose();
      });
      signals = [];
      for (let i = 0; i < params.signalCount; i++) {
        createSignal();
      }
    }

    function rebuildLines() {
      backgroundLines.forEach((l) => {
        contentGroup.remove(l);
        l.geometry.dispose();
      });
      backgroundLines = [];

      for (let i = 0; i < params.lineCount; i++) {
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(SEGMENT_COUNT * 3);
        geometry.setAttribute(
          'position',
          new THREE.BufferAttribute(positions, 3)
        );

        const line = new THREE.Line(geometry, bgMaterial);
        line.userData = { id: i };
        line.renderOrder = 0;
        contentGroup.add(line);
        backgroundLines.push(line);
      }
      rebuildSignals();
    }

    rebuildLines();

    // --- ANIMATION LOOP ---
    const clock = new THREE.Clock();
    let frameId;

    function animate() {
      frameId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      for (const line of backgroundLines) {
        const positions = line.geometry.attributes.position.array;
        const lineId = line.userData.id;
        for (let j = 0; j < SEGMENT_COUNT; j++) {
          const t = j / (SEGMENT_COUNT - 1);
          const vec = getPathPoint(t, lineId, time);
          positions[j * 3] = vec.x;
          positions[j * 3 + 1] = vec.y;
          positions[j * 3 + 2] = vec.z;
        }
        line.geometry.attributes.position.needsUpdate = true;
      }

      for (const sig of signals) {
        sig.progress += sig.speed * 0.005 * params.speedGlobal;

        if (sig.progress > 1.0) {
          sig.progress = 0;
          sig.laneIndex = Math.floor(Math.random() * params.lineCount);
          sig.history = [];
          sig.assignedColor = pickSignalColor();
        }

        const pos = getPathPoint(sig.progress, sig.laneIndex, time);
        sig.history.push(pos.clone());

        if (sig.history.length > params.trailLength + 1) {
          sig.history.shift();
        }

        const positions = sig.mesh.geometry.attributes.position.array;
        const colors = sig.mesh.geometry.attributes.color.array;

        const drawCount = Math.max(1, params.trailLength);
        const currentLen = sig.history.length;

        for (let i = 0; i < drawCount; i++) {
          let index = currentLen - 1 - i;
          if (index < 0) index = 0;

          const p = sig.history[index] || new THREE.Vector3();

          positions[i * 3] = p.x;
          positions[i * 3 + 1] = p.y;
          positions[i * 3 + 2] = p.z;

          let alpha = 1;
          if (params.trailLength > 0) {
            alpha = Math.max(0, 1 - i / params.trailLength);
          }

          colors[i * 3] = sig.assignedColor.r * alpha;
          colors[i * 3 + 1] = sig.assignedColor.g * alpha;
          colors[i * 3 + 2] = sig.assignedColor.b * alpha;
        }

        sig.mesh.geometry.setDrawRange(0, drawCount);
        sig.mesh.geometry.attributes.position.needsUpdate = true;
        sig.mesh.geometry.attributes.color.needsUpdate = true;
      }

      composer.render();
    }

    animate();

    // --- RESIZE ---
    const handleResize = () => {
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      composer.setSize(width, height);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);
    window.addEventListener('resize', handleResize);

    // --- DEV-ONLY GUI ---
    // Cuma muncul kalo: (1) dev mode, dan (2) URL ada ?gui=1
    // Di production build, blok ini di-tree-shake (lil-gui ga di-bundle).
    let gui = null;
    let cancelled = false;

    if (
      import.meta.env.DEV &&
      typeof window !== 'undefined' &&
      new URLSearchParams(window.location.search).has('gui')
    ) {
      // Container hero bisa nutupin GUI -> bikin elemen sendiri yg fixed di body
      // biar GUI selalu di atas & bisa di-klik (pointer-events-none di parent)
      import('lil-gui').then((mod) => {
        if (cancelled) return;
        const GUI = mod.default;
        gui = new GUI({ title: 'Hero Settings' });

        // Naikin di atas navbar (navbar pake z-[9999999]) & geser ke bawah biar ga ketabrak
        gui.domElement.style.zIndex = '99999999';
        gui.domElement.style.top = '90px';
        gui.domElement.style.right = '16px';
        gui.domElement.style.maxHeight = 'calc(100vh - 110px)';

        const folderColors = gui.addFolder('Colors');
        folderColors.addColor(params, 'colorBg').name('Background').onChange((v) => {
          scene.background.set(v);
          scene.fog.color.set(v);
        });
        folderColors.addColor(params, 'colorLine').name('Lines').onChange((v) => {
          bgMaterial.color.set(v);
        });

        const folderSignalColors = gui.addFolder('Signal Colors');
        folderSignalColors
          .addColor(params, 'colorSignal')
          .name('Main Color')
          .onChange((v) => signalColorObj1.set(v));
        folderSignalColors.add(params, 'useColor2').name('Use Extra Color 1');
        folderSignalColors
          .addColor(params, 'colorSignal2')
          .name('Extra Color 1')
          .onChange((v) => signalColorObj2.set(v));
        folderSignalColors.add(params, 'useColor3').name('Use Extra Color 2');
        folderSignalColors
          .addColor(params, 'colorSignal3')
          .name('Extra Color 2')
          .onChange((v) => signalColorObj3.set(v));

        const folderGeneral = gui.addFolder('General');
        folderGeneral
          .add(params, 'globalRotation', -180, 180)
          .name('Rotation (Deg)')
          .onChange((v) => {
            contentGroup.rotation.z = THREE.MathUtils.degToRad(v);
          });
        folderGeneral
          .add(params, 'positionX', -200, 200)
          .name('Position X')
          .onChange((v) => {
            contentGroup.position.x = v;
          });
        folderGeneral
          .add(params, 'positionY', -100, 100)
          .name('Position Y')
          .onChange((v) => {
            contentGroup.position.y = v;
          });
        folderGeneral
          .add(params, 'lineCount', 10, 300, 1)
          .name('Line Count')
          .onFinishChange(rebuildLines);

        const folderGeo = gui.addFolder('Geometry');
        folderGeo.add(params, 'spreadHeight', 10, 100);
        folderGeo.add(params, 'spreadDepth', 0, 50);
        folderGeo.add(params, 'curveLength', 20, 150);
        folderGeo.add(params, 'straightLength', 20, 200);
        folderGeo.add(params, 'curvePower', 0.1, 3.0);

        const folderAnim = gui.addFolder('Lines');
        folderAnim.add(params, 'waveSpeed', 0, 5);
        folderAnim.add(params, 'waveHeight', 0, 5);
        folderAnim
          .add(params, 'lineOpacity', 0, 1)
          .onChange((v) => (bgMaterial.opacity = v));

        const folderSignals = gui.addFolder('Signals');
        folderSignals
          .add(params, 'signalCount', 0, 200, 1)
          .name('Count')
          .onFinishChange(rebuildSignals);
        folderSignals.add(params, 'speedGlobal', 0, 3).name('Speed');
        folderSignals.add(params, 'trailLength', 0, 100, 1).name('Trail Length');

        const folderBloom = gui.addFolder('Bloom');
        folderBloom
          .add(params, 'bloomStrength', 0, 5)
          .onChange((v) => (bloomPass.strength = v));
        folderBloom
          .add(params, 'bloomRadius', 0, 1)
          .onChange((v) => (bloomPass.radius = v));

        // Helper button: dump current values ke console biar gampang di-copy
        const exporter = {
          'Copy Settings to Console': () => {
            const device = isMobileViewport() ? 'mobileOverrides' : 'desktopParams';
            // eslint-disable-next-line no-console
            console.log(`// Paste ini ke ${device} di HeroBackground.jsx:`);
            // eslint-disable-next-line no-console
            console.log(JSON.stringify(params, null, 2));
          },
        };
        gui.add(exporter, 'Copy Settings to Console');
      });
    }

    // --- CLEANUP ---
    return () => {
      cancelled = true;
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      window.removeEventListener('resize', handleResize);

      if (gui) gui.destroy();

      backgroundLines.forEach((l) => l.geometry.dispose());
      signals.forEach((s) => s.mesh.geometry.dispose());
      bgMaterial.dispose();
      signalMaterial.dispose();
      composer.dispose();
      renderer.dispose();

      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
      aria-hidden="true"
    />
  );
};

export default HeroBackground;
