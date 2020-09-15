$(document).on('click', 'a[class^="_"]', function(e) {
    e.preventDefault();
  //  console.log(e.target);
   // console.log(this);
  //  alert('Вы кликнули по ссылке с классом ' + this.className);

    let tc = this.className;
    let _download = $("#_download").prop("id");
    let _news = $("#_news").prop("id");
    let _portf = $("#_portf").prop("id");
    let _cont = $("#_cont").prop("id");
    let _links = $("#_links").prop("id");
    
    let flag_off = $("section").css({
        'display': 'none'
    });
    



    if (tc == _news) {
        flag_off;

        $("#_news").css({
            'display': 'block',
            'opacity': '0',
            'transition': '1s',
            'animation': 'show 1s 1',
            'animation-fill-mode': 'forwards',
            'animation-delay': '1s'
        });
    }

    if (tc == _download) {
        flag_off;

        $("#_download").css({
            'display': 'block',
            'opacity': '0',
            'transition': '1s',
            'animation': 'show 1s 1',
            'animation-fill-mode': 'forwards',
            'animation-delay': '1s'
        });
    } 

    if (tc == _portf) {
        flag_off;

        $("#_portf").css({
            'display': 'block',
            'opacity': '0',
            'transition': '1s',
            'animation': 'show 1s 1',
            'animation-fill-mode': 'forwards',
            'animation-delay': '1s'
        });
    }

    if (tc == _cont) {
        flag_off;

        $("#_cont").css({
            'display': 'block',
            'opacity': '0',
            'transition': '1s',
            'animation': 'show 1s 1',
            'animation-fill-mode': 'forwards',
            'animation-delay': '1s'
        });
    }

    if (tc == _links) {
        flag_off;

        $("#_links").css({
            'display': 'block',
            'opacity': '0',
            'transition': '1s',
            'animation': 'show 1s 1',
            'animation-fill-mode': 'forwards',
            'animation-delay': '1s'
        });
    }


});