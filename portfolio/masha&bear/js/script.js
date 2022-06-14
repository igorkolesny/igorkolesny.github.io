$(document).ready(function () {
  // tv
  $(".video-tv-page .video-tv-play").slick({
    lazyLoad: "ondemand",
    arrows: false,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    infinite: true,
    asNavFor: ".video-tv-page .tv-counts",
  });

  //nav for tv

  $(".video-tv-page .tv-counts").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 700,
    arrows: true,
    dots: false,
    focusOnSelect: true,
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    asNavFor: ".video-tv-page .video-tv-play",
    appendArrows: $(".video-tv-page .tv-navigation"),
    prevArrow: $(".video-tv-page .tv-navigation .prev-arrow"),
    nextArrow: $(".video-tv-page .tv-navigation .next-arrow"),
  });

  /* seasons sliders */

  /* season 5 */

  $(".season-number-5 .video-tv-play").slick({
    lazyLoad: "ondemand",
    arrows: false,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    infinite: true,
    asNavFor: ".season-number-5 .tv-counts",
  });

  $(".season-number-5 .tv-counts").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 700,
    arrows: true,
    dots: false,
    focusOnSelect: true,
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    asNavFor: ".season-number-5 .video-tv-play",
    appendArrows: $(".season-number-5 .tv-navigation"),
    prevArrow: $(".season-number-5 .tv-navigation .prev-arrow"),
    nextArrow: $(".season-number-5 .tv-navigation .next-arrow"),
  });

  /* season 4 */

  $(".season-number-4 .video-tv-play").slick({
    lazyLoad: "ondemand",
    arrows: false,
    dots: false,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    asNavFor: ".season-number-4 .tv-counts",
  });

  $(".season-number-4 .tv-counts").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 700,
    arrows: true,
    dots: false,
    focusOnSelect: true,
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    asNavFor: ".season-number-4 .video-tv-play",
    appendArrows: $(".season-number-4 .tv-navigation"),
    prevArrow: $(".season-number-4 .tv-navigation .prev-arrow"),
    nextArrow: $(".season-number-4 .tv-navigation .next-arrow"),
  });

  /* season 3 */

  $(".season-number-3 .video-tv-play").slick({
    lazyLoad: "ondemand",
    arrows: false,
    dots: false,
    slidesToShow: 1,
    fade: true,
    slidesToScroll: 1,
    infinite: true,
    asNavFor: ".season-number-3 .tv-counts",
  });

  $(".season-number-3 .tv-counts").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 700,
    arrows: true,
    dots: false,
    focusOnSelect: true,
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    asNavFor: ".season-number-3 .video-tv-play",
    appendArrows: $(".season-number-3 .tv-navigation"),
    prevArrow: $(".season-number-3 .tv-navigation .prev-arrow"),
    nextArrow: $(".season-number-3 .tv-navigation .next-arrow"),
  });

  /* season 2 */

  $(".season-number-2 .video-tv-play").slick({
    lazyLoad: "ondemand",
    arrows: false,
    dots: false,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    asNavFor: ".season-number-2 .tv-counts",
  });

  $(".season-number-2 .tv-counts").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 700,
    arrows: true,
    dots: false,
    focusOnSelect: true,
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    asNavFor: ".season-number-2 .video-tv-play",
    appendArrows: $(".season-number-2 .tv-navigation"),
    prevArrow: $(".season-number-2 .tv-navigation .prev-arrow"),
    nextArrow: $(".season-number-2 .tv-navigation .next-arrow"),
  });

  /* season 1 */

  $(".season-number-1 .video-tv-play").slick({
    lazyLoad: "ondemand",
    arrows: false,
    fade: true,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    asNavFor: ".season-number-1 .tv-counts",
  });

  $(".season-number-1 .tv-counts").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 700,
    arrows: true,
    dots: false,
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    asNavFor: ".season-number-1 .video-tv-play",
    appendArrows: $(".season-number-1 .tv-navigation"),
    prevArrow: $(".season-number-1 .tv-navigation .prev-arrow"),
    nextArrow: $(".season-number-1 .tv-navigation .next-arrow"),
  });
});

function modal_multfilms() {
  //mult
  $(".mult-view-slider").slick({
    arrows: false,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    fade: true,
    asNavFor: ".mult-view-nav-slider",
  });

  //nav for mult

  $(".mult-view-nav-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    focusOnSelect: true,
    infinite: true,
    vertical: true,
    focusOnSelect: true,
    lazyLoad: "ondemand",
    asNavFor: ".mult-view-slider",
    appendArrows: $(".mult-view-nav"),
    prevArrow: $(".mult-view-nav .prev-arrow"),
    nextArrow: $(".mult-view-nav .next-arrow"),
    responsive: [
      {
        breakpoint: 890,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical: false,
          variableWidth: true,
        },
      },
    ],
  });
}

$(document).ready(function () {
  $(".open-top-menu").click(function () {
    $(".open-top-menu").toggleClass("open-menu");
    $(".header-menu").toggleClass("open-menu");
    $(".header-menu").slideToggle(300);

    if ($(window).width() < 576) {
      $("body").toggleClass("fixeddd");
    }
  });

  $(".mult-view-close").click(function () {
    $(".carousel__button.is-close").click();
  });
});

function fixedHeader() {
  var topp = 280;
  function fixScroll() {
    if (window.scrollY > topp) {
      if ($(window).width() > 1140) {
        $("header").addClass("minimal");
      }
      if ($(window).width() < 1140) {
        $("header").addClass("mobile-fixed");
      }
      $(".header-menu").removeClass("open-menu");
      $(".open-top-menu").removeClass("open-menu");
      $(".header-menu").slideUp(300);
      $("body").addClass("active");
    }
    if (window.scrollY < topp) {
      if ($(window).width() > 1140) {
        $("header").removeClass("minimal");
        $(".header-menu").slideDown(300);
      }
      if ($(window).width() < 1140) {
        $("header").removeClass("mobile-fixed");
        $(".header-menu").slideUp(300);
      }

      $("body").removeClass("active");
    }
  }

  fixScroll();

  $(window).scroll(function () {
    fixScroll();
  });
}

$(window).resize(function () {
  fixedHeader();
  if ($(window).width() < 1140) {
    $("header").addClass("mobile");
  }
});

$(document).ready(function () {
  $(window).resize();
});

$(document).ready(function () {
  $(".loaded-percent").each(function () {
    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).text(),
        },
        {
          duration: 3000,
          easing: "swing",
          step: function (now) {
            $(this).text(Math.ceil(now));
          },
        }
      );
  });
});

$(window).on("load", function () {
  window.setTimeout(function () {
    $("body").addClass("loaded_hiding");
  }, 500);
  window.setTimeout(function () {
    $(".preloader-logo").addClass("animated_logo");
  }, 100);
  window.setTimeout(function () {
    $("body").addClass("loaded");
    $("body").removeClass("loaded_hiding");
    $(".preloader-logo").removeClass("animated_logo");
  }, 1500);
});

$(document).ready(function () {
  (function () {
    var requestAnimationFrame =
      window.requestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
  })();
  var windowHeight = $(window).height();
  function animate(timelineBlock, time) {
    timelineBlock.each(function () {
      if (
        $(this).offset().top <= $(window).scrollTop() + windowHeight * time &&
        $(this).hasClass("invisible")
      ) {
        $(this).removeClass("invisible").addClass("animated slideInUp");
      }
    });
  }

  var timelineBlock = $(".js-timeline-animate"),
    time = 1;
  $(window).on("scroll", function () {
    requestAnimationFrame
      ? requestAnimationFrame(function () {
          animate(timelineBlock, time);
        })
      : setTimeout(function () {
          animate(timelineBlock, time);
        }, 100);
  });
});

$(window).on("load", function () {
  $(".top-block-image").addClass("animation");
  $(".page-top-img").addClass("animation");
  $(".release .video-tv").addClass("animation");
});

$(document).ready(function () {
  $("a[href='#modal3']").click(function () {
    modal_multfilms();
  });
});
