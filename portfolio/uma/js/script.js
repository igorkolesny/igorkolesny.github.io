// текст для подсказок
// Офисы
const placemark_1_title = "Офис";
const placemark_2_title = "Офис 2";
const placemark_3_title = "Офис 3";

//email
const placemark_email = "uma@expert.com";

//номера
const placemark_1_number = "+7 (800) 551-06-77";
const placemark_2_number = "+7 (800) 551-06-78";
const placemark_3_number = "+7 (800) 551-06-79";

$(document).ready(function () {
  new Swiper(".slider-box", {
    slidesPerView: "auto",
    slideToClickedSlide: true,
    loop: true,
    spaceBetween: 80,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        spaceBetween: 25,
      },
      1440: {
        spaceBetween: 80,
      },
    },
  });

  new Swiper(".slider-results", {
    slidesPerView: 1,
    autoplay: false,
    loop: false,
    slideToClickedSlide: false,
    spaceBetween: 30,
    pagination: {
      el: ".pages-results",
      type: "fraction",
    },
    mousewheel: false,
    keyboard: true,
    breakpoints: {
      320: {
        spaceBetween: 15,
      },
      568: {
        spaceBetween: 30,
      },
      1440: {
        spaceBetween: 80,
      },
    },
  });

  new Swiper(".comments-block", {
    slidesPerView: "auto",
    autoplay: false,
    loop: false,
    slideToClickedSlide: true,
    pagination: {
      el: ".commnets-pages",
      type: "fraction",
    },
    breakpoints: {
      320: {
        spaceBetween: 25,
      },
      1440: {
        spaceBetween: 80,
      },
    },
  });


  new Swiper(".welcome-slider", {
    slidesPerView: "auto",
    autoplay: false,
    loop: false,
    slideToClickedSlide: true,
    pagination: {
      el: ".swiper-pagination",
      type: 'bullets',
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    });

});




$(document).ready(function () {
  $(function () {
    let header = $("header.home-header");

    $(window).scroll(function () {
      if ($(this).scrollTop() > 130) {
        header.addClass("header-bg");
      } else {
        header.removeClass("header-bg");
      }
    });
  });

  $(window).resize();
  $("select").niceSelect();
});

$(document).ready(function () {
  function init() {
    let myMap = new ymaps.Map(
      "map", {
        center: [55.752721, 37.586798], // Москва
        zoom: 17,
        controls: [],
      }, {
        suppressMapOpenBlock: true,
      }
    );

    //геолокация
    var geolocationControl = new ymaps.control.GeolocationControl({
      options: {
        layout: "round#buttonLayout",
      },
    });
    myMap.controls.add(geolocationControl, {
      float: "none",
      position: {
        right: 10,
        top: 290,
      },
    });

    var zoomControl = new ymaps.control.ZoomControl({
      options: {
        layout: "round#zoomLayout",
      },
    });
    myMap.controls.add(zoomControl, {
      float: "none",
      position: {
        right: 10,
        top: 350,
      },
    });

    var myPlacemark = new ymaps.Placemark(
      [55.751351, 37.587191], {
        hintContent: '<div class="map-hint"><div class="hint-title">' +
          placemark_1_title +
          '</div><div class="hint-contact"><span class="icon-email"></span>' +
          placemark_email +
          '</div><div class="hint-contact"><span class="icon-mobile"></span>' +
          placemark_1_number +
          "</div></div>",
      }, {
        iconColor: "#ffce25",
        iconLayout: "default#image",
        iconImageHref: "../img/baloon.webp",
        iconImageSize: [38, 53],
        iconImageOffset: [-3, -42],
      }
    );

    var myPlacemark2 = new ymaps.Placemark(
      [55.753413, 37.582143], {
        hintContent: '<div class="map-hint"><div class="hint-title">' +
          placemark_2_title +
          '</div><div class="hint-contact"><span class="icon-email"></span>' +
          placemark_email +
          '</div><div class="hint-contact"><span class="icon-mobile"></span>' +
          placemark_2_number +
          "</div></div>",
      }, {
        iconColor: "#ffce25",
        iconLayout: "default#image",
        iconImageHref: "../img/baloon.webp",
        iconImageSize: [38, 53],
        iconImageOffset: [-3, -42],
      }
    );

    var myPlacemark3 = new ymaps.Placemark(
      [55.752982, 37.591126], {
        hintContent: '<div class="map-hint"><div class="hint-title">' +
          placemark_3_title +
          '</div><div class="hint-contact"><span class="icon-email"></span>' +
          placemark_email +
          '</div><div class="hint-contact"><span class="icon-mobile"></span>' +
          placemark_3_number +
          "</div></div>",
      }, {
        iconColor: "#ffce25",
        iconLayout: "default#image",
        iconImageHref: "../img/baloon.webp",
        iconImageSize: [38, 53],
        iconImageOffset: [-3, -42],
      }
    );

    myMap.geoObjects.add(myPlacemark);
    myMap.geoObjects.add(myPlacemark2);
    myMap.geoObjects.add(myPlacemark3);

    myMap.behaviors
      .disable(["", "rightMouseButtonMagnifier", "scrollZoom"])
      .disable("ruler");
  }

  ymaps.ready(init);
});



// function mobile_menu_on() {
//   $(".right-menu").click(function () {
//     $(".top-menu").toggleClass("open-menu");
//     $(".right-menu").toggleClass("close-menu-but");
//   });
// }

// function double_menu() {
//   $(".right-menu").click(function () {
//     $('header').toggleClass("double-menu");
//     $(".top-menu-double").addClass("open-menu");

//     if ($('.top-menu-double').hasClass('open-menu')) {
//       $('.double-menu-close').click(function () {
//         $('.top-menu-double').removeClass("open-menu")
//       })
//     }
//   });
// }

// $(window).resize(function () {
//   if ($(window).width() <= 1160) {
//     mobile_menu_on();
//   } else if ($(window).width() > 1160) {
//     double_menu();
//   }
// });


$(document).mouseup(function (e){
  var div = $(".top-menu-double"); 
  if (!div.is(e.target) 
      && div.has(e.target).length === 0) { 
          $('.top-menu-double').removeClass('open-menu');
  }
});



$(function () {
  $(".afterbefore-image").twentytwenty({
    before_label: "ДО",
    after_label: "ПОСЛЕ",
    move_slider_on_hover: true,
    move_with_handle_only: true,
    click_to_move: true,
  });
});


$(document).ready(function () {
  AOS.init({
    // disable: function () {
    //   var maxWidth = 1280;
    //   return window.innerWidth < maxWidth;
    // },
    once: true,
  });
 
})


$(document).ready(function () {


  $('.password-control').click(function (e) {
    // e.preventdefault();
    if ($('#password-input').attr('type') == 'password'){
      $(this).addClass('view');
      $('#password-input').attr('type', 'text');
    } else {
      $(this).removeClass('view');
      $('#password-input').attr('type', 'password');
    }
    return false;
  })


  $(".right-menu").click(function () {
    $('header').toggleClass("double-menu");
    $(".top-menu-double").addClass("open-menu");

    if ($('.top-menu-double').hasClass('open-menu')) {
      $('.double-menu-close').click(function () {
        $('.top-menu-double').removeClass("open-menu")
      })
    }
  });

})

