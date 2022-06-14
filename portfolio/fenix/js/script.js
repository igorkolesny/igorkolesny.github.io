$(document).ready(function () {

    // main slider
    $('.main_slider-block').slick({
        arrows: true,
        dots: true,
        appendArrows: $('.main_slider .slider_arrows'),
        prevArrow: $('.main_slider .slider_arrows .prev'),
        nextArrow: $('.main_slider .slider_arrows .next'),
        appendDots: $('.main_slider .slider_dots'),
        responsive: [{
            breakpoint: 800,
            settings: {
                dots: false,
                infinite: false
            }
        }]
    });


    // slider trainers
    $('.slider_trainers').slick({
        arrows: true,
        dots: true,
        appendArrows: $('.slider_trainers_inner .slider_arrows'),
        prevArrow: $('.slider_trainers_inner .slider_arrows .prev'),
        nextArrow: $('.slider_trainers_inner .slider_arrows .next'),
        appendDots: $('.slider_trainers_inner .slider_dots'),
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [{
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: true,
                    dots: true,
                }
            },
            {
                breakpoint: 880,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: true,
                    dots: false,
                }
            },

            {
                breakpoint: 740,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    variableWidth: true,
                    arrows: true,
                    dots: false,
                }
            },
            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    variableWidth: true,
                    arrows: false,
                    dots: false
                }
            }
        ]
    });

})


//меню бергер
$(document).ready(function () {

    $('.burger').click(function () {
        $('.burger').toggleClass('open-menu');
        $('.head-menu ul.nav').toggleClass('open-menu');
        $('body').toggleClass('fixed');
    });


    // кнопка номера
    $('.numbers').click(function () {
        $('.numbers').toggleClass('open-num');
        $('.num').toggleClass('open-num');
    });




    $(window).resize();

    $(window).resize(function () {
        if ($(window).width() > 1100) {
            $('.burger').removeClass('open-menu');
            $('.head-menu ul.nav').removeClass('open-menu');
            $('body').removeClass('fixed');
        }
    });


    $('.prof-career-title').click(function (event) {
        $(this).toggleClass('active').prev().toggleClass('more-open');
    })


})

// маска телефона
$(document).ready(function () {
    $('[name=number]').inputmask({
        mask: "+7(999)999-99-99",
        showMaskOnHover: false
    });

});

// скрытие меню при клике вне меню
$(document).mouseup(function (e) {
    var div = $(".head-menu");
    if (!div.is(e.target) && div.has(e.target).length === 0) {
        $('.burger').removeClass('open-menu');
        $('.head-menu ul.nav').removeClass('open-menu');
        $('body').removeClass('fixed');
    }
});


// скрытие номера при клике вне кнопки
$(document).mouseup(function (e) {
    var div = $(".social-num");
    if (!div.is(e.target) && div.has(e.target).length === 0) {
        $('.numbers').removeClass('open-num');
        $('.num').removeClass('open-num');
    }
});