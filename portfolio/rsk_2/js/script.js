
// слайдер
$(document).ready(function () {
    $('.examples-slider').slick({
        arrows: true,
        centerMode: false,
        focusOnSelect: true,
        infinite: false,
        fade: true,
        speed: 300,
        cssEase: 'linear',
        prevArrow: $('.prev'),
        nextArrow: $('.next')
    });


    $('.examples-small-slider').slick({
        arrows: false,
        dots: false,
        slidesToShow: 3,
        infinite: false,

        asNavFor: '.examples-slider',
        centerMode: false,
        focusOnSelect: true,
        responsive: [{
            breakpoint: 750,
            settings: {
                slidesToShow: 2,
            }
        }]

    });

});



// меню бергер
$(document).ready(function () {
    $('.burger').click(function () {
        $('.burger').toggleClass('open-menu');
        $('.header__nav').toggleClass('open-menu');
        $('.close__nav').toggleClass('open-menu');
    });

    $('.close__nav').click(function () {
        $('.burger').toggleClass('open-menu');
        $('.header__nav').toggleClass('open-menu');
        $('.close__nav').toggleClass('open-menu');
    });
});


$('.header__menu a').on('click', function () {
    let href = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(href).offset().top + 60 + 'px'
    }, {
        duration: 500,
        easing: "swing"
    });
    return false;
});


// маска телефона
$(document).ready(function () {
    $('[name=number]').inputmask({
        mask: "+7(999)999-99-99",
        showMaskOnHover: false
    });

});


// popup
$(document).ready(function () {
    $('.popup-youtube').magnificPopup({
        type: 'iframe'
    });



    $('.show-popup').magnificPopup({
        type: 'inline',
        removalDelay: 500,
        callbacks: {
            beforeOpen: function () {
                this.st.mainClass = this.st.el.attr('data-effect');
            }
        },
        midClick: true
    });

    $('.more-examples').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true,

            preload: [0, 2],

            navigateByImgClick: true,

            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',

            tPrev: 'Previous (Left arrow key)',
            tNext: 'Next (Right arrow key)',
            tCounter: '<span class="mfp-counter">%curr% of %total%</span>'
        }
    });

});


// аккордеоны 
$(document).ready(function () {
    document.getElementById("defaultOpen").click();

    $(window).resize();

    $(window).resize(function () {
        if ($(window).width() < 768) {
            $('details:not(:first)').removeAttr('open')
        } else if ($(window).width() >= 768) {
            $('details:not(:first)').attr('open')
            return;
        }
    });

    $('.acc-title').removeClass('active');
    $('.accordion').removeClass('active');
    $('.accordion').click(function () {
        $('.acc-text').toggleClass('active');
        $('.acc-title').toggleClass('active');
    })

});


// табы
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("v-menu");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}



// скрытие меню при клике вне меню
$(document).mouseup(function (e){
    var div = $(".header__nav"); 
    if (!div.is(e.target) 
        && div.has(e.target).length === 0) { 
            $('.burger').removeClass('open-menu');
            $('.header__nav').removeClass('open-menu');
    }
});