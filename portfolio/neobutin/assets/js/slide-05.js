const slide_plus = document.querySelectorAll('.plus-item');


function init() {
  gsap.set('.slide', { opacity: 0 });


  gsap.set('.slide-head', { opacity: 0, y: -20 });
  gsap.set('.slide-05-title', { opacity: 0, y: -20 });
  gsap.set('.tablets-slide-05', { opacity: 0, x: -50 });


  slide_plus.forEach((item) => {
    gsap.set(item, { opacity: 0, x: -50 });
  });

  animation();
}

function animation() {
  const timeline = gsap.timeline({ repeat: 0 });
  timeline.to('.slide', { opacity: 1, duration: 0.6 });

 
  timeline.to('.slide-head', { opacity: 1, y: 0, duration: 0.6 });
  timeline.to('.slide-05-title', { opacity: 1, y: 0, duration: 0.6 });
  timeline.to('.tablets-slide-05', { opacity: 1, x: 0, duration: 0.6 });
  

 

  slide_plus.forEach((item, i) => {
    if (i === 0) {
      timeline.to(item, { opacity: 1, x: 0, duration: 0.6 });
    } else {
      timeline.to(item, { opacity: 1, x: 0, duration: 0.6 });
    }
  });

  

}

init();
