$(document).ready(function(){
	$('.big-work-slider').slick({
		arrows: false,
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed:500,
        fade: true,
        asNavFor: '.small-slider',
		responsive: [
			{
			  breakpoint: 768,
			  settings: {
				dots: true,
			  }
			}]

	});

    $('.small-slider').slick({
		arrows:true,
		appendArrows: $('.small-arrows'),
		nextArrow: '<div class="small-slider-arrow-next"></div>',
		prevArrow: '<div class="small-slider-arrow-prev"></div>',
		dots: false,	
		slidesToShow:8,
        slidesToScroll: 1,
		speed:500,
        asNavFor: '.big-work-slider',
        vertical: true,
        focusOnSelect: true,
	});
});
