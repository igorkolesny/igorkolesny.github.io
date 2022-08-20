function mainInit() {}

mainInit();

function goToPresentation(el, slide) {
  const activeButton = document.querySelector(
    '.footer-actions .button-action.active'
  );
  activeButton.classList.remove('active');
  el.classList.add('active');

  switch (slide) {
    case 1:
      alert('gastrostat');
      break;
    case 2:
      alert('neobutin');
      break;
    case 3:
      alert('urdoksa');
      break;
    case 4:
      alert('maksilak');
      break;
  }
}

function goToSlide(slide) {
  /*todo go to slide number*/
}
