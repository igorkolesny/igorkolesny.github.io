$(document).ready(function () {

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

    // document.getElementById("defaultOpen").click();

})


// function openTab(evt, tabName) {
//     var i, tabcontent, tablinks;
//     tabcontent = document.getElementsByClassName("tabcontent");
//     for (i = 0; i < tabcontent.length; i++) {
//         tabcontent[i].style.display = "none";
//     }
//     tablinks = document.getElementsByClassName("tablinks");
//     for (i = 0; i < tablinks.length; i++) {
//         tablinks[i].className = tablinks[i].className.replace(" active", "");
//     }
//     document.getElementById(tabName).style.display = "block";
//     evt.currentTarget.className += " active";
// }

$(document).on('click', 'a[class^="_"]', function (e) {
    e.preventDefault();

    let thisClass = this.className;
    let _portfolio = $("#_portfolio").prop("id");
    let _services = $("#_services").prop("id");

    let flag_off = $(".tabcontent").css({
        'display': 'none'
    });

    if (tc == _portfolio) {
        flag_off;

        $("#_portfolio").css({
            'display': 'block',
            'opacity': '0',
            'transition': '1s',
            'animation': 'show 1s 1',
            'animation-fill-mode': 'forwards',
            'animation-delay': '1s'
        });
    }

    if (tc == _services) {
        flag_off;

        $("#_services").css({
            'display': 'block',
            'opacity': '0',
            'transition': '1s',
            'animation': 'show 1s 1',
            'animation-fill-mode': 'forwards',
            'animation-delay': '1s'
        });
    } 
})