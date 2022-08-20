// скролл по секциям через ссылки меню
$('.scrollto a').on('click', function () {
    let href = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, {
        duration: 500,
        easing: "swing"
    });
    return false;
});



// изменение хедера при скролле

$(document).ready(function () {
    $(window).resize();
});


$(window).resize(function () {
    if ($(window).width() >= 769) {
        $(window).scroll(function () {
            if ($(this).scrollTop() >= 125) {
                $('.top-menu').addClass('minimal');
                $('.header__nav').addClass('sticky');
            } else {
                $('.top-menu').removeClass('minimal');
                $('.header__nav').removeClass('sticky');
            }
        });
    } 
    else if ($(window).width() <= 768) {
        $('.top-menu').removeClass('minimal');
        $('.header__nav').addClass('sticky');
        return;
    }
});


// маска телефона
$(document).ready(function () {
    $('[name=number]').inputmask({
        mask: "+7(999)999-99-99",
        showMaskOnHover: false
    });

});

// меню бергер
$(document).ready(function() {
	$('.menu-burger__header').click(function(){
        $('.menu-burger__header').toggleClass('open-menu');
        $('.header__nav').toggleClass('open-menu');
	});
});

// скрытие меню при клике вне меню
$(document).mouseup(function (e){
    var div = $(".navigation"); 
    if (!div.is(e.target) 
        && div.has(e.target).length === 0) { 
            $('.menu-burger__header').removeClass('open-menu');
            $('.header__nav').removeClass('open-menu');
    }
});
