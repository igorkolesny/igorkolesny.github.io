window.onload = function () {
    function a() {
        c.removeClass("spin_1").attr("disabled", "disabled"),
            d.html("1"),
            e.removeClass("spin_1").addClass("wheel__spinner_animated-1").removeClass("wheel__spinner_animated"),
            // h.fadeOut(),
            setTimeout(function () {
                (localStorage.currentSpin = "HTMLC_210_highway_spin_1"),
                    e.removeClass("wheel__spinner_animated-1"),
                    f.fadeIn().addClass("showed"),
                    i.fadeIn().css("display", "flex"),
                    j.fadeIn().css("display", "flex"),
                    c.addClass("spin_2").removeClass("spin_1");
                    $('.game-value-sping').html('01')
                    if( j.css("display", "flex")){
                        setTimeout(() => {
                            j.toggleClass('active')
                        }, 1000);
                            setTimeout(() => {
                                c.removeAttr("disabled"), i.fadeOut(), j.fadeOut(); 
                            }, 1500);
                    }
            }, 8200);
    }
    function b() {
        c.removeClass("spin_2").attr("disabled", "disabled"),
            d.html("0"),
            e.removeClass("spin_2").addClass("wheel__spinner_animated-2"),
            setTimeout(function () {
                (localStorage.currentSpin = "HTMLC_210_highway_spin_2"), e.removeClass("wheel__spinner_animated"), g.fadeIn().addClass("showed"), i.fadeIn().css("display", "flex"), k.fadeIn().css("display", "flex");
            }, 8500);
            setTimeout(() => {
                $('.modal-girl').toggleClass('active')
            }, 9500);
            setTimeout(() => {
                $('.modal-win').toggleClass('active')
            }, 10500);
    }
    var c = $(".wheel_btn"),
        d = $("#counter_num"),
        e = $(".wheel__spinner"),
        f = $(".bonus_1"),
        g = $(".bonus_2"),
        // h = $(".wheel_txt"),
        i = $("#modal-content"),
        j = $(".fewmodal__1"),
        k = $(".fewmodal__2"),
        l = $(".popup_btn_1");
    c.click(function () {
        c.hasClass("spin_1") && a(), c.hasClass("spin_2") && b();
    });
		
	
/*         l.click(function () {
            c.removeAttr("disabled"), i.fadeOut(), j.fadeOut();
        }); */
};
