const fadeEls = document.querySelectorAll('.fade-in');
let ticking = false;

function inViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top <= window.innerHeight && rect.bottom >= 0;
}

function animateFade() {
  fadeEls.forEach(el => {
    if (inViewport(el)) el.classList.add('show');
  });
}

window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      animateFade();
      ticking = false;
    });
    ticking = true;
  }
});

animateFade();
