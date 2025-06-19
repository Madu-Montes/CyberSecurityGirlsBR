const counters = document.querySelectorAll('.number');
let animated = false;

function animateCounters() {
  if (animated) return;

  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    const duration = 2000;
    const startTime = performance.now();

    function updateNumber(currentTime) {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const value = Math.floor(progress * target);
      counter.textContent = value + '+';

      if (progress < 1) {
        requestAnimationFrame(updateNumber);
      }
    }

    requestAnimationFrame(updateNumber);
  });

  animated = true;
}

window.addEventListener('scroll', () => {
  const section = document.querySelector('.big-numbers-wrapper');
  const rect = section.getBoundingClientRect();
  if (rect.top < window.innerHeight && rect.bottom > 0) {
    animateCounters();
  }
});
