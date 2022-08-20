$(document).ready(function () {

	if ($(".swiper-container1").length > 0) {
		var swiper = new Swiper(".swiper-container1", {
			spaceBetween: 0,
			slidesPerView: 10,
			freeMode: true,
			watchSlidesProgress: true,
		});
		var swiper2 = new Swiper(".swiper-container2", {
			spaceBetween: 10,
			navigation: {
				nextEl: ".swiper-button-next1",
				prevEl: ".swiper-button-prev1",
			},
			thumbs: {
				swiper: swiper,
			},
		});
	}
  
    //Попап менеджер FancyBox
	// data-fancybox="gallery" создание галереи
	// data-caption="<b>Подпись</b><br>"  Подпись картинки
	// data-width="2048" реальная ширина изображения
	// data-height="1365" реальная высота изображения
	// data-type="ajax" загрузка контента через ajax без перезагрузки
	// data-type="iframe" загрузка iframe (содержимое с другого сайта)
	$(".fancybox").fancybox({
		hideOnContentClick: true,
		protect: false, //защита изображения от загрузки, щелкнув правой кнопкой мыши. 
		loop: true, // Бесконечная навигация по галерее
		arrows : true, // Отображение навигационные стрелки
		infobar : true, // Отображение инфобара (счетчик и стрелки вверху)
		toolbar : true, // Отображение панели инструментов (кнопки вверху)
		buttons : [ // Отображение панели инструментов по отдельности (кнопки вверху)
        // 'slideShow',
        // 'fullScreen',
        // 'thumbs',
        // 'share',
        //'download',
        //'zoom',
        // 'close'
    	],
    	touch : false,
    	animationEffect : "zoom-in-out", // анимация открытия слайдов "zoom" "fade" "zoom-in-out"
    	transitionEffect: 'slide', // анимация переключения слайдов "fade" "slide" "circular" "tube" "zoom-in-out" "rotate'
    	animationDuration : 500, // Длительность в мс для анимации открытия / закрытия
    	transitionDuration : 1366, // Длительность переключения слайдов
    	slideClass : '', // Добавить свой класс слайдам

	});

	$('.video-btn-wrap .btn2').on('click', function() {
		$(this).toggleClass('active');
		$(this).parent().parent().children('.video-list').children('.video-item').slideToggle();
	});

	$('.reviews-btn-wrap .btn2').on('click', function() {
		$(this).toggleClass('active');
		$(this).parent().parent().children('.reviews-list').children('.reviews-item').slideToggle();
	});
	

	function ibg(){
		let ibg=document.querySelectorAll(".ibg");
			for (var i = 0; i < ibg.length; i++) {
				if(ibg[i].querySelector('img')){
					ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
				}
			}
		}
	ibg();
	

	swiper2.on('slideChangeTransitionStart', function() {
		var iframes = $('.videoReviews-slider1 iframe');
		$.each(iframes,function(index,value){
			var players = new Vimeo.Player(iframes[index]);
			players.pause();
		});
	});	

	swiper2.on('slideChangeTransitionEnd', function() {
		var iframeactive = $('.videoReviews-slider1 .swiper-slide-active iframe');
		var playeractive = new Vimeo.Player(iframeactive);
		playeractive.play();
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
    
})