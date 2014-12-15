particlesJS('splash-bg', {
  particles: {
    color: '#fff',
    shape: 'triangle', // "circle", "edge" or "triangle"
    opacity: 1,
    size: 2,
    size_random: false,
    nb: screen.width / 5,
    line_linked: {
      enable_auto: true,
      distance: 100,
      color: '#fff',
      opacity: 0.9,
      width: 1,
      condensed_mode: {
        enable: false,
        rotateX: 600,
        rotateY: 600
      }
    },
    anim: {
      enable: true,
      speed: 1
    }
  },
  interactivity: {
    enable: false
  },
  /* Retina Display Support */
  retina_detect: true
});
