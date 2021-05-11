$(window).scroll(function (event) {
    if ($(this).scrollTop() > 700) {
        $(".head").slideDown();
        return false;
    } else {
        $(".head").slideUp();
    }
});