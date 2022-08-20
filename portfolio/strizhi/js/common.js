const showDialog = () => {
    document.getElementById('modal').classList.add('show')
    const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
    const body = document.body;
    body.style.height = '100vh';
    body.style.overflowY = 'hidden';
  };
  const closeDialog = () => {
    const body = document.body;
    const scrollY = body.style.top;
    body.style.position = '';
    body.style.top = '';
    body.style.height = '';
    body.style.overflowY = '';
    //window.scrollTo(0, parseInt(scrollY || '0') * -1);
    document.getElementById('modal').classList.remove('show');
  }
  var viewedSlider = new Swiper('.viewed-double__slider', {
    slidesPerView: 'auto',
    spaceBetween: 16,
    navigation: {
      nextEl: '.viewed-double-next',
      prevEl: '.viewed-double-prev'
    },
    breakpoints: {
      1024: {
        slidesPerView: 'auto',
        spaceBetween: 16
      },
      1200: {
        slidesPerView: 'auto',
        spaceBetween: 24
      },
      1420: {
        slidesPerView: 'auto',
        spaceBetween: 40
      },
      1760: {
        slidesPerView: 'auto',
        spaceBetween: 40
      }
    }
  }); // Articles slider
  var viewedSlider = new Swiper('.viewed-best__slider', {
    slidesPerView: 'auto',
    spaceBetween: 16,
    navigation: {
      nextEl: '.viewed-best-next',
      prevEl: '.viewed-best-prev'
    },
    breakpoints: {
      1024: {
        slidesPerView: 'auto',
        spaceBetween: 16
      },
      1200: {
        slidesPerView: 'auto',
        spaceBetween: 24
      },
      1420: {
        slidesPerView: 'auto',
        spaceBetween: 40
      },
      1760: {
        slidesPerView: 'auto',
        spaceBetween: 40
      }
    }
  }); // Articles slider
  var viewedSlider = new Swiper('.viewed-commercial__slider', {
    slidesPerView: 'auto',
    spaceBetween: 16,
    navigation: {
      nextEl: '.viewed-commercial-next',
      prevEl: '.viewed-commercial-prev'
    },
    breakpoints: {
      1024: {
        slidesPerView: 'auto',
        spaceBetween: 16
      },
      1200: {
        slidesPerView: 'auto',
        spaceBetween: 24
      },
      1420: {
        slidesPerView: 'auto',
        spaceBetween: 40
      },
      1760: {
        slidesPerView: 'auto',
        spaceBetween: 40
      }
    }
  }); // Articles slider
  