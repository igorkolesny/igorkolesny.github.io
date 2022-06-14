$(document).ready(function(){
	$('.gallery-slider').slick({
		arrows: true,
        appendArrows: $('.gallery-title-arrows'),
		nextArrow: '<div class="gallery-title-arrow-next"></div>',
		prevArrow: '<div class="gallery-title-arrow-prev"></div>',
		dots: false,
		slidesToShow:5,
		slidesToScroll: 1,
		speed:500,
		infinite: true,
		responsive: [
			{
			  breakpoint: 991,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
				infinite: true,
				dots: false,
				arrows: false
			  }
			},
			  {
				  breakpoint: 575,
				  settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
					arrows: false
				  },
			  }
		]
	})
})