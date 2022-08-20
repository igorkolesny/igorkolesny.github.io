$(document).ready(function () {

    if ($(window).width() < 575) {
        $('details').removeAttr('open')
    };

    $('.sum-title').click(function (event) {
        $(this).toggleClass('opened');
    })

});
