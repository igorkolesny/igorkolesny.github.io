$(document).ready(function () {
    

    new Swiper(".main-slider", {
        slidesPerView: "auto",
        loop: false,
        spaceBetween: 30,
        navigation: {
          nextEl: ".main-slider__navigation .main-slider__arrow-next",
          prevEl: ".main-slider__navigation .main-slider__arrow-prev",
        },
        pagination: {
            el: '.main-slider__dots',
            type: 'bullets',
            clickable: true,
        },
        slideToClickedSlide: false
      });


    new Swiper(".slider-small", {
        slidesPerView: "auto",
        loop: true,
        spaceBetween: 0,
        nested: true,
        navigation: {
            nextEl: ".slider-small__navigation .slider-small__arrow-next",
            prevEl: ".slider-small__navigation .slider-small__arrow-prev",
        },
        slideToClickedSlide: false
      });





      $(".img_gallery").fancybox({
		hideOnContentClick: false,
		protect: false, //защита изображения от загрузки, щелкнув правой кнопкой мыши. 
		loop: true, // Бесконечная навигация по галерее
		arrows : true, // Отображение навигационные стрелки
		infobar : true, // Отображение инфобара (счетчик и стрелки вверху)
		toolbar : true, // Отображение панели инструментов (кнопки вверху)
		buttons : [ // Отображение панели инструментов по отдельности (кнопки вверху)
        // 'slideShow',
        'fullScreen',
        // 'thumbs',
        // 'share',
        //'download',
        'zoom',
        'close'
    	],
    	touch : true,
    	animationEffect : "zoom-in-out", // анимация открытия слайдов "zoom" "fade" "zoom-in-out"
    	transitionEffect: 'slide', // анимация переключения слайдов "fade" "slide" "circular" "tube" "zoom-in-out" "rotate'
    	animationDuration : 500, // Длительность в мс для анимации открытия / закрытия
    	transitionDuration : 1366, // Длительность переключения слайдов
    	slideClass : '', // Добавить свой класс слайдам

	});


    $(".img_slide-zoom").fancybox({
		hideOnContentClick: false,
		protect: false, //защита изображения от загрузки, щелкнув правой кнопкой мыши. 
		loop: true, // Бесконечная навигация по галерее
		arrows : true, // Отображение навигационные стрелки
		infobar : true, // Отображение инфобара (счетчик и стрелки вверху)
		toolbar : true, // Отображение панели инструментов (кнопки вверху)
		buttons : [ // Отображение панели инструментов по отдельности (кнопки вверху)
        // 'slideShow',
        'fullScreen',
        // 'thumbs',
        // 'share',
        //'download',
        'zoom',
        'close'
    	],
    	touch : true,
    	animationEffect : "zoom-in-out", // анимация открытия слайдов "zoom" "fade" "zoom-in-out"
    	transitionEffect: 'slide', // анимация переключения слайдов "fade" "slide" "circular" "tube" "zoom-in-out" "rotate'
    	animationDuration : 500, // Длительность в мс для анимации открытия / закрытия
    	transitionDuration : 1366, // Длительность переключения слайдов
    	slideClass : '', // Добавить свой класс слайдам

	});


    $('.faq__item-title').click(function () {
        if ($('.faq__item').hasClass('faq__item-opened')) {
          $('.faq__item-title').not($(this)).removeClass('active');
          $('.faq__item-title').not($(this)).parent().removeClass('current');
          $('.faq__item-text').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(300);
        $(this).parent().toggleClass("current")
      })


})


function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("maintab__answer");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("maintabs__item");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}