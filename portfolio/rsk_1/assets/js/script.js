$(document).ready(function () {
    var time = 0;
    $('.open__menu').on('click', function () {
        $(this).toggleClass('close__menu');
        if (window.innerHeight < 380) {
        }
        if ($(this).hasClass('close__menu')) {
            $('.menu__cnt').addClass('transition__menu');
            $('.menu__header__mobile').css({'width': '100%', transition: '0.3s'});
            $('body').addClass('body_fix');
            var menu_li = $(".sidenav>ul>li");
            $(menu_li).each(function () {
                time++;
                $(this).css({'transition-delay': '0.' + time + 's'});
                $(this).addClass('anim__menu');
                $('.menu__cnt').addClass('transition__menu');
            })
        } else {
            $('.menu__cnt').addClass('menu__width');
            $('body').removeClass('body_fix');
            $('.menu__cnt').removeClass('transition__menu');
            time = 0;
            var menu_lis = $(".sidenav ul li");
            $(menu_lis).each(function () {
                if ($(this).hasClass('anim__menu')) {
                    $(this).removeClass('anim__menu');
                    $(this).css({'opacity': '1', transition: '0.2s'})
                }
            })
        }

    });
    $('.for__mobile__bg').on('click', function () {
        if ($('.open__menu').hasClass('close__menu')) {
            $('.open__menu').removeClass('close__menu')
        }
        $('.menu__cnt').removeClass('transition__menu');
        $('.menu__cnt').css({width: '0%!important'});
        $('body').removeClass('body_fix');
        time = 0;
        var menu_li = $(".sidenav ul li");
        $(menu_li).each(function () {
            if ($(this).hasClass('anim__menu')) {
                $(this).removeClass('anim__menu');
                $(this).css({'opacity': '0', transition: '0.2s'})
            }
        })
    })
});

if ($('.menu__services__cont ul li').find("submenu__head")) {
    $('.submenu__head').parent().addClass('submenu__active');

}
$('.menu__services__cont>ul>li>a').click(function () {
    if ($('.menu__services__cont>ul>li').hasClass('menu__ser__active')) {
        $('.menu__services__cont>ul>li').removeClass('menu__ser__active');
    } else {
        $(this).parent().toggleClass('menu__ser__active')
    }
});


$(document).ready(function () {
    $(".phone").mask('+7 (999)-999-99-99');
});

$('.open__search__icon-s').on('click', function () {
    $('.header__search').addClass('header__search__op');
    $(this).parent().addClass('open__search__n');
});
$('.open__search__x').on('click', function () {
    $('.open__search').removeClass('open__search__n');
    $('.header__search').removeClass('header__search__op');

});

$('.header__leng strong').on('click', function () {
    $(this).parent().toggleClass('click__open__leng');
});

$('.header__leng__droup ul li a').on('click', function () {
    var text_in = $('.header__leng strong').html();
    let selected_text = $(this).html();
    $('.header__leng strong').html(selected_text);
    $(this).html(text_in)
    $('.header__leng').removeClass('click__open__leng')
});


$(document).ready(function () {
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 200,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
});


$('.roofing__slider').slick({
    dots: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1
});


$('.mechi__big__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.about__photo__slid-small',
    fade: true,
    speed: 500,
});
$('.about__photo__slid-small').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    asNavFor: '.mechi__big__slider',
    dots: false,
    arrows: true,
    vertical: true,
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 8,
                slidesToScroll: 1,
                dots: false,
                arrows: false,
                vertical: false,
            }
        },
    ]

});

$('.about__photo__slider').slick({
    dots: false,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,

});
$('.our__clients__slider').slick({
    dots: false,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1
});

$('.video__slid').slick({
    dots: false,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,

});

$('.list__ring__slid').slick({
    dots: false,
    arrows: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1170,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                dots: false,
                arrows: true
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: false,
                arrows: false
            }
        },
        {
            breakpoint: 475,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: false,
                arrows: false,
            }
        },
    ]
});

$('.info__center__slid').slick({
    dots: false,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1140,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: false,
                arrows: true,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                arrows: true,
            }
        },
    ]
});

$('.consultation__inp label').on('click', function () {
    $(this).addClass('consultation__lab')
});


$('.services__block').on('click', function (e) {
    $(this).toggleClass('services__block__bg');
    $('.menu__services').toggleClass('menu__services__active')
    e.stopPropagation()
});

$(window).on('click', function (e) {
    let menuBLock = $('.menu__services')
    if (e.target !== menuBLock) {
        menuBLock.removeClass('menu__services__active')
    }
});

$('.menu__services').on('click', function (e) {
    e.stopPropagation()
})


$('.open_modal').on('click', function () {
    var attr = $(this).attr('data-val');
    var modal = $('#' + attr);
    modal.removeClass('out');
    modal.fadeIn()
});

$('.close').on('click', function () {
    var prt = $(this).parents('.modal');
    prt.addClass('out');
    setTimeout(function () {
        prt.fadeOut();
    }, 100);

});
$('.close_this').on('click', function () {
    var prt = $(this).parents('.modal');
    prt.addClass('out');
    setTimeout(function () {
        prt.fadeOut();
    }, 100);

});
$(window).on('click', function (event) {
    $('.modal').each(function () {
        var gtattr = $(this).attr('id');
        var new_mod = $('#' + gtattr);
        var md_cnt = $(new_mod).find('.modal-content');

        if (event.target === $(md_cnt)[0]) {
            setTimeout(function () {
                $(new_mod).addClass('out');
                $(new_mod).fadeOut()

            }, 100);
        }
        if (event.target === this) {
            setTimeout(function () {
                $(new_mod).addClass('out');
                $(new_mod).fadeOut();

            }, 100);

        }
    })
});