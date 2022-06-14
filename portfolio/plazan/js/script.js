$(document).ready(function () {

    $('.products-slider').slick({
        arrows: false,
        dots: false,    
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        draggable: false,
        asNavFor: '.product-slider_small',
    });

    $('.product-slider_small').slick({
        asNavFor: '.products-slider',
        dots: false,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        vertical: false,
        focusOnSelect: true
    });

    $('.banner-posters-mobile').slick({
        arrows: true,
        dots: false,    
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        appendArrows: $('.poster-sl-arrows'),
        prevArrow: $('.poster-sl-prev'),
        nextArrow: $('.poster-sl-next')
    });

    $('.spoiler_name').click(function (event) {
        if ($('.spoilers').hasClass('spoilers-active')) {
            $('.spoiler_name').not($(this)).removeClass('spoiler_opened');
            $('.spoiler_text').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass("spoiler_opened").next().slideToggle(300);
    })

    $('.burger').click(function () {
        $('.burger').toggleClass('open-menu');
        $('.head_menu_block').toggleClass('open-menu');
        $('.head_menu_block').slideToggle(300);
    });

    $('a.btn-readmore').click(function () {
        $('span.more').toggleClass('open-more');
        $('a.btn-readmore').toggleClass('open-more');

        if ($('a.btn-readmore').hasClass('open-more')) {
            $('a.btn-readmore').text('скрыть')
        } else {
            $('a.btn-readmore').text('читать далее')
        }
    })

})

// скрытие меню при клике вне меню
$(document).mouseup(function (e) {
    var div = $("header");
    if (!div.is(e.target) && div.has(e.target).length === 0) {
        $('.burger').removeClass('open-menu');
        if ( $('.head_menu_block').hasClass('open-menu')) {
             $('.head_menu_block').slideToggle(300);
             $('.head_menu_block').removeClass('open-menu');
        } 
       
    }
});