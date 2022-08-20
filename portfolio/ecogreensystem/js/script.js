$(document).ready(function () {
   
// main slider
$('.main-slider-block').slick({
    arrows: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    appendDots: $('.main-slider-dots'),
    responsive: [{
        breakpoint: 1110,
        settings: {
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            // variableWidth: true
        }
    }]
});

// products slider 
$('.products-wrapper').slick({
    arrows: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    appendArrows: $('.produsts-title .products-arrows'),
    prevArrow: $('.produsts-title .products-arrows .arrow-prev'),
    nextArrow: $('.produsts-title .products-arrows .arrow-next'),
    responsive: [{
        breakpoint: 800,
        settings: {
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            variableWidth: true
        }
    }]
});


// reviews slider 
$('.reviews-slider').slick({
    arrows: true,
    dots: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: false,
    appendArrows: $('.reviews-head .reviews-arrows'),
    prevArrow: $('.reviews-head .reviews-arrows .arrow-prev'),
    nextArrow: $('.reviews-head .reviews-arrows .arrow-next'),
    responsive: [{
        breakpoint: 1110,
        settings: {
            dots: false,
            infinite: false,
            slidesToShow: 2,
            slidesToScroll: 1,
        },
        breakpoint: 800,
        settings: {
            dots: false,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
        }
    }]
});


// likes-cards-slider
$('.likes-cards-slider').slick({
    arrows: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,

    variableWidth: true,

    appendArrows: $('.likes-title .likes-arrows'),
    prevArrow: $('.likes-title .likes-arrows .arrow-prev'),
    nextArrow: $('.likes-title .likes-arrows .arrow-next'),
    responsive: [{
        breakpoint: 1110,
        settings: {
            dots: false,
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1,
        },
        breakpoint: 800,
        settings: {
            dots: false,
            infinite: false,
            slidesToShow: 2,
            slidesToScroll: 1,
        },
        breakpoint: 600,
        settings: {
            dots: false,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }]
});

});


$(document).ready(function () {
    $('.burger').click(function () {
        $('.burger').toggleClass('open-menu');
        $('.header-menu').toggleClass('open-menu');
    })
})
 

// mask phone
$(document).ready(function () {        
        $(".phone").mask("+375 (99) 999-99-99");
});
    