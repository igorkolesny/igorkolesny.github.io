const slide_links = document.querySelectorAll('.slide-link');
const slide_links_arrow = document.querySelectorAll('.slide-link-arrow');

function init() {
  gsap.set('.slide', { opacity: 0 });


  gsap.set('.slide-head', { opacity: 0, y: -20 });
  gsap.set('.slide-02-title', { opacity: 0, y: -20 });
  gsap.set('.tablets', { opacity: 0, x: -50 });


  slide_links.forEach((item) => {
    gsap.set(item, { opacity: 0, x: -50 });
  });

  animation();
}

function animation() {
  const timeline = gsap.timeline({ repeat: 0 });
  timeline.to('.slide', { opacity: 1, duration: 0.6 });

 
  timeline.to('.slide-head', { opacity: 1, y: 0, duration: 0.6 });
  timeline.to('.slide-02-title', { opacity: 1, y: 0, duration: 0.6 });
  timeline.to('.tablets', { opacity: 1, x: 0, duration: 0.6 });
  

 

  slide_links.forEach((item, i) => {
    if (i === 0) {
      timeline.to(item, { opacity: 1, x: 0, duration: 0.6 });
    } else {
      timeline.to(item, { opacity: 1, x: 0, duration: 0.6 });
    }
  });

  

}

init();
