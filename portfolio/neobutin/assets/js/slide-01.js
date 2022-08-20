function init() {
  gsap.set('.slide', { opacity: 0 });
  
  // gsap.set('.slide-01:before', { opacity: 0, x: -10});

  gsap.set('.slide-01-title', { opacity: 0, y: -50 });
  gsap.set('.slide-01-content', { opacity: 0 });

  gsap.set('.slide-01-list-item.item-01 .slide-01-list-item-img', { opacity: 0, y: -10 });
  gsap.set('.slide-01-list-item.item-01 .slide-01-list-item-text', { opacity: 0, x: -50 });


  gsap.set('.slide-01-list-item.item-02 .slide-01-list-item-img', { opacity: 0, y: -20 });
  gsap.set('.slide-01-list-item.item-02 .slide-01-list-item-text', { opacity: 0, x: -50 });




  //желудок-1
  gsap.set('.stomach-1-text-1', { opacity: 0, y: -10});
  gsap.set('.stomach-1-main-img', { opacity: 0, x: -20});
  gsap.set('.stomach-1-text', { opacity: 0, y: -15});
  gsap.set('.stomach-arrow-1', { opacity: 0, y: -10, transform: 'rotate(280deg)'});
  gsap.set('.stomach-arrow-2', { opacity: 0, y: -10, transform: 'rotate(70deg)'});
  gsap.set('.stomash-1-arrow-text', { opacity: 0, x: -10});
  gsap.set('.slide-01-stomach-note', { opacity: 0, x: -10});


  //желудок-2
  gsap.set('.stomach-2-text-1', { opacity: 0, y: -10});
  gsap.set('.stomach-2-main-img', { opacity: 0, x: -20});
  gsap.set('.stomach-arrow-3', { opacity: 0, y: -10, transform: 'rotate(270deg)'});
  gsap.set('.stomach-arrow-4', { opacity: 0, y: -10, transform: 'rotate(70deg)'});
  gsap.set('.stomash-2-arrow-text', { opacity: 0, x: -10});
  gsap.set('.stomach-red-arrow', { opacity: 0, y: 50, transform: 'rotate(90deg)' });
  gsap.set('.stomach-2-text', { opacity: 0, y: 10});


  animation();
}

function animation() {
  const timeline = gsap.timeline({ repeat: 0 });
  timeline.to('.slide', { opacity: 1, duration: 0.6 });
  // timeline.to('.slide-01:before', { opacity: 1, x: 0, transform: 'rotate(0deg)', duration: 0.6 });

  timeline.to('.slide-01-title', { opacity: 1, y: 0, duration: 0.6 });

  timeline.to('.slide-01-content', { opacity: 1, duration: 0.6 });

  
  timeline.to('.slide-01-list-item.item-01 .slide-01-list-item-img', { opacity: 1, y: 0, duration: 0.6 });
  timeline.to('.slide-01-list-item.item-01 .slide-01-list-item-text', { opacity: 1, x: 0, duration: 0.6 });

  
  timeline.to('.slide-01-list-item.item-02 .slide-01-list-item-img', { opacity: 1, y: 0, duration: 0.6 });
  timeline.to('.slide-01-list-item.item-02 .slide-01-list-item-text', { opacity: 1, x: 0, duration: 0.6 });
  
  

  //желудок-1
  timeline.to('.stomach-1-text-1', { opacity: 1, y: 0, duration: 0.6 });
  timeline.to('.stomach-1-main-img', { opacity: 1, x: 0, duration: 0.6 });
  timeline.to('.stomach-1-text', { opacity: 1, y: 0, duration: 0.6 });
  timeline.to('.stomach-arrow-1', { opacity: 1, y: 0, duration: 0.6 , transform: 'rotate(0deg)'});
  timeline.to('.stomach-arrow-2', { opacity: 1, y: 0, duration: 0.6 , transform: 'rotate(0deg)'});
  timeline.to('.stomash-1-arrow-text', { opacity: 1, x: 0, duration: 0.6 });
  timeline.to('.slide-01-stomach-note', { opacity: 1, x: 0, duration: 0.6 });

  //желудок-2
  timeline.to('.stomach-2-text-1', { opacity: 1, y: 0, duration: 0.6 });
  timeline.to('.stomach-2-main-img', { opacity: 1, x: 0, duration: 0.6 });
  timeline.to('.stomach-arrow-3', { opacity: 1, y: 0, duration: 0.6 , transform: 'rotate(0deg)'});
  timeline.to('.stomach-arrow-4', { opacity: 1, y: 0, duration: 0.6 , transform: 'rotate(0deg)'});
  timeline.to('.stomash-2-arrow-text', { opacity: 1, x: 0, duration: 0.6 });
  timeline.to('.stomach-red-arrow', { opacity: 1, y: 0, duration: 0.6, transform: 'rotate(0deg)'} );
  timeline.to('.stomach-2-text', { opacity: 1, y: 0, duration: 0.6 });
}

init();
