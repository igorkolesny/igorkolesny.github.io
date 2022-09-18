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
            // breakpoints: {
            //     320: {
            //       spaceBetween: 0,
            //     },
            //     1280: {
            //       spaceBetween: 30,
            //     },
            //   },
            slideToClickedSlide: false,
            simulateTouch: false
    });


        new Swiper(".small-photos-nav", {
            loop: false,
            slidesPerView: 5,
            grid: {
                rows: 2,
            },
            autoHeight: false,
            spaceBetween: 8,
            nested: true,
            slideToClickedSlide: true,
            breakpoints: {
                320: {
                  spaceBetween: 4,
                },
                1280: {
                  spaceBetween: 8,
                },
              },
        });

        new Swiper(".slider-small", {
            slidesPerView: 1,
            loop: false,
            spaceBetween: 0,
            nested: true,
            navigation: {
                nextEl: ".slider-small__navigation .slider-small__arrow-next",
                prevEl: ".slider-small__navigation .slider-small__arrow-prev",
            },
            slideToClickedSlide: false,
        });



        // $(window).resize();


       



        // $(window).resize(function () {
            if ($(window).width() <= 1280) {
                initSteps_slider();
            }
        // });
    

        function initSteps_slider() {
            new Swiper(".steps-slider", {
                slidesPerView: "auto",
                loop: false,
                spaceBetween: 20,
                autoHeight: true,
                navigation: {
                    nextEl: ".steps__nav .steps__nav-next",
                    prevEl: ".steps__nav .steps__nav-prev",
                },
                slideToClickedSlide: false,
            })
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
    });



    $(".burger").click(function () {
        $(this).toggleClass("opened")
        $(".mobile__menu-wrapper").slideToggle(300)
    });



    $(".callback__form").submit(function (e) { // событие отправки для формы с id=form
        e.preventDefault();
         var form_data = $(this).serialize(); 
         $.ajax({
             type: "POST", // Метод отправки
             url: "../../mail.php", // Путь до php файла отправителя
             data: form_data,
             success: function () {
               
                $.fancybox.close();
                $.fancybox.open({
                    src: '#send_done',
                    type: 'inline'
                });
                setTimeout(function() {
                    $.fancybox.close()
                }, 2000);
                  
             }
         });
     });


     $('[name=number]').inputmask({
        mask: "+7(999)999-99-99",
        showMaskOnHover: false
    });


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