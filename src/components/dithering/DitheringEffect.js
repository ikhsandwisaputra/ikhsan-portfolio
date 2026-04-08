import { Effect } from 'postprocessing';
import * as THREE from 'three';
import ditheringShader from './DitheringShader';

/**
 * Dithering post-processing effect.
 * Drop into an EffectComposer pass to apply ordered dithering.
 */
export class DitheringEffect extends Effect {
  constructor({
    time = 0,
    resolution = new THREE.Vector2(1, 1),
    gridSize = 4.0,
    luminanceMethod = 0,
    invertColor = false,
    pixelSizeRatio = 1,
    grayscaleOnly = false,
  } = {}) {
    const uniforms = new Map([
      ['time', new THREE.Uniform(time)],
      ['resolution', new THREE.Uniform(resolution)],
      ['gridSize', new THREE.Uniform(gridSize)],
      ['luminanceMethod', new THREE.Uniform(luminanceMethod)],
      ['invertColor', new THREE.Uniform(invertColor ? 1 : 0)],
      ['ditheringEnabled', new THREE.Uniform(1)],
      ['pixelSizeRatio', new THREE.Uniform(pixelSizeRatio)],
      ['grayscaleOnly', new THREE.Uniform(grayscaleOnly ? 1 : 0)],
    ]);

    super('DitheringEffect', ditheringShader, { uniforms });

    this.uniforms = uniforms;
  }

  update(_renderer, inputBuffer, deltaTime) {
    const t = this.uniforms.get('time');
    if (t && typeof t.value === 'number') t.value += deltaTime;

    const r = this.uniforms.get('resolution');
    if (r && r.value instanceof THREE.Vector2) {
      r.value.set(inputBuffer.width, inputBuffer.height);
    }
  }
}
