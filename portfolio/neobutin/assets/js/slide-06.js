function init() {
  gsap.set('.slide', { opacity: 0 });
  gsap.set('.slide-head', { opacity: 0, y: -10 });
  gsap.set('.slide-09-title', { opacity: 0, y: -10 });
  gsap.set('.slide-09-link', { opacity: 0, x: -10 });

  animation();
}

function animation() {
  const links = document.querySelectorAll('.slide-09-link');
  const timeline = gsap.timeline({ repeat: 0 });
  timeline.to('.slide', { opacity: 1, duration: 0.6 });
  timeline.to('.slide-head', { opacity: 1, y: 0, duration: 0.6 });
  timeline.to('.slide-09-title', { opacity: 1, y: 0, duration: 0.6 });

  links.forEach((el, i) => {
    timeline.to(el, { opacity: 1, x: 0, duration: 0.6 }, '-=0.3s');
  });
}

init();
