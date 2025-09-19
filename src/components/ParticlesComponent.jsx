// ParticleComponent.js
import React, { useEffect } from 'react';
import Stats from '../../node_modules/particles.js/demo/js/lib/stats';
import particlesJS from 'particles.js';
// import '../../node_modules/particles.js/demo/js/app';
import '../../node_modules/particles.js/demo/css/style.css';
const ParticleComponent = () => {
  useEffect(() => {
    // Initialize Particle.js
    particlesJS('particles-js', /* your configuration object */);

    // Initialize Stats.js
    const stats = new Stats();
    stats.setMode(0);
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';
    document.body.appendChild(stats.domElement);

    // Update Stats.js
    const countParticles = document.querySelector('.js-count-particles');
    const update = function () {
      stats.begin();
      stats.end();
      if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
        countParticles.innerText = window.pJSDom[0].pJS.particles.array.length;
      }
      requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  }, []);

  return (
    <div>
      {/* Particles.js container */}
      <div id="particles-js"></div>

      {/* Count particles */}
      <div id="text-container">
        <h1 style={{ fontSize: '10rem' }}>hahahahahhaha</h1>
        <h1 style={{ fontSize: '10rem' }}>hahahahahhaha</h1>
        <h1 style={{ fontSize: '10rem' }}>hahahahahhaha</h1>
        <h1 style={{ fontSize: '10rem' }}>hahahahahhaha</h1>
        <h1 style={{ fontSize: '10rem' }}>hahahahahhaha</h1>
      </div>
    </div>
  );
};

export default ParticleComponent;
