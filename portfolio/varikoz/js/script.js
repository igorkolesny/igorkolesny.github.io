

// main funcions
$(document).ready(function () {
  
  $(".has-dropdown").hover(
    function() {
        $(this).children(".nav-dropdown").addClass('dropdown-active');
    }, function() {
        $(this).children(".nav-dropdown").removeClass('dropdown-active');
    }
  );

  $('.nav-toggle').click(function () {
      if ($('.has-dropdown').hasClass('tab-dropdown')) {
        $(this).parent().toggleClass('dropdown-opened')
        $('.nav-toggle').not($(this)).removeClass('active');
        $('.nav-dropdown-mobile').not($(this).next()).slideUp(300);
      }
      $(this).toggleClass('active').next().slideToggle(300);
  })

  $('.menu-burger').click(function () {
      $('.header-navigation-box').addClass('opened');
      $('.body-overlay').addClass('overlay-ready');
  })

  $('header.mobile .close-menu').click(function () { 
      $('.header-navigation-box').removeClass('opened');
      $('.body-overlay').removeClass('overlay-ready');
  })

  $('.faq-title').click(function () {
    if ($('.faq-item').hasClass('faq-opened')) {
      $('.faq-title').not($(this)).removeClass('active');
      $('.faq-text').not($(this).next()).slideUp(300);
    }
    $(this).toggleClass('active').next().slideToggle(300);
  })
})


// sliders 
$(document).ready(function () {

      new Swiper(".top-home-slider", {
        slidesPerView: "auto",
        loop: true,
        autoplay: true,
        pagination: {
          el: ".swiper-pagination",
          type: 'bullets',
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }
      });

      new Swiper(".specialists-slider", {
        slidesPerView: "auto",
        loop: true,
        spaceBetween: 40,
        pagination: {
          el: ".swiper-pagination",
          type: 'bullets',
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          320: {
            centeredSlides: true,
          },
          995: {
            centeredSlides: false,
          }
        }
      });

      new Swiper(".results-slider", {
        slidesPerView: "auto",
        loop: true,
        spaceBetween: 170,
        centeredSlides: true,
        pagination: {
          el: ".swiper-pagination",
          type: 'bullets',
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }
      });

      new Swiper(".actions-news-slider", {
        slidesPerView: "auto",
        loop: true,
        spaceBetween: 20,
        pagination: {
          el: ".swiper-pagination",
          type: 'bullets',
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          320: {
            centeredSlides: true,
          },
          995: {
            centeredSlides: false
          }
        }
      });

      new Swiper(".videos-slider", {
        slidesPerView: "auto",
        loop: true,
        spaceBetween: 44,
        pagination: {
          el: ".swiper-pagination",
          type: 'bullets',
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          320: {
            centeredSlides: true,
          },
          995: {
            centeredSlides: false
          }
        }
      });

});


// map
$(document).ready(function () {
  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [56.860211, 35.890229],
            zoom: 17
        }, {
            searchControlProvider: 'yandex#search'
        }),

        myPlacemark = new ymaps.Placemark([56.860211, 35.890229], {
          iconCaption: 'Варикоза Нет',
        }, {
          preset: 'islands#violetIcon',
        });

    myMap.geoObjects
        .add(myPlacemark);
});
});


// header mobile
$(document).ready(function () {
  $(function () {
    let header_mobile = $("header.mobile");

    $(window).scroll(function () {
      if ($(this).scrollTop() > 125) {
        header_mobile.addClass("header-fix");
      } else {
        header_mobile.removeClass("header-fix");
      }
    });
  });

  $(window).resize();
});


// read more
function moreread(e) {
  $(e).parent('.article').toggleClass('opened');
  $(e).parent('.article').children('.read-more').slideToggle(300);
}



	$(".fancybox").fancybox({
		hideOnContentClick: true,
		protect: false, 
		loop: true, 
		arrows : true, 
		infobar : true, 
		toolbar : true, 
		buttons : [
        // 'slideShow',
        // 'fullScreen',
        // 'thumbs',
        // 'share',
        //'download',
        //'zoom',
        // 'close'
    	],
    	touch : false,
    	animationEffect : "zoom-in-out", 
    	transitionEffect: 'slide', 
    	animationDuration : 500, 
    	transitionDuration : 1366,
    	slideClass : '',

	});


  $(".img_gallery").fancybox({
		hideOnContentClick: false,
		protect: false,
		loop: true,
		arrows : true,
		infobar : true,
		toolbar : true,
		buttons : [
        // 'slideShow',
        'fullScreen',
        // 'thumbs',
        // 'share',
        //'download',
        'zoom',
        'close'
    	],
    	touch : true,
    	animationEffect : "zoom-in-out",
    	transitionEffect: 'slide', 
    	animationDuration : 500,
    	transitionDuration : 1366, 
    	slideClass : '',
	});


  $(document).ready(function() {


    
  function get_agreement(){
    setCookie('cookie-agree', '1', {secure: true, 'max-age': 2592000});
    $(".cookie-check").css('display','none');
  }
 
  function getCookie(name) {    
    var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) return match[2];
  }
  
  function setCookie(name, value, options = {}) {
  
    options = {
      path: '/',
    };
  
    if (options.expires instanceof Date) {
      options.expires = options.expires.toUTCString();
    }
  
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
  
    for (let optionKey in options) {
      updatedCookie += "; " + optionKey;
      let optionValue = options[optionKey];
      if (optionValue !== true) {
        updatedCookie += "=" + optionValue;
      }
    }
  
    document.cookie = updatedCookie;
  }


    if (getCookie('cookie-agree') === undefined)
      {
        $(".cookie-check").css('display','block');
        $('.get-agreement').on('click', function() {
        console.log('click');
        get_agreement();
        return false;
        });
      }
  });



