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

    //mail form
$('form').submit(function (e) {
    var $form = $(this);
        $.ajax({
            type: $form.attr('method') || 'post',
            url: $form.attr('action'),
            data: $form.serialize()
        }).done(function () {
            $('form')[0].reset()
            $.magnificPopup.open({
                items: {
                    src: '#mail-send_succes',
                    type: 'inline',
                    mainClass: 'mfp-with-zoom'
                },
                removalDelay: 300,
                midClick: true,
            })
        }).fail(function () {
       
            $.magnificPopup.open({ 
                items: {
                    src: '#mail-send_error',
                    type: 'inline',
                    mainClass: 'mfp-with-zoom'
                },
                removalDelay: 300,
                midClick: true,
            })
        });
        e.preventDefault();
});

// mask phone
$(document).ready(function () {
/*     $('[name=number]').inputmask({
        mask: "+7(999)999-99-99",
        showMaskOnHover: false
    }); */
	
	$(".phone").mask("+7 (999) 999-99-99");

});

$('.video-block').click(function () {
    $(this).toggleClass('video-view');
})

 
$('#playerID').click(function(){
    $(this).parent().toggleClass('active');
});

var my_video = document.getElementById("VdoID");
var my_video = my_video.getElementsByTagName("iframe")[0].contentWindow;

$("#playerID").on("click", function() {
    my_video.postMessage('{"event": "command", "func": "playVideo", "args": ""}', "*");

});

$("#pause_video").on("click", function() {
    my_video.postMessage('{"event": "command", "func": "pauseVideo", "args": ""}', "*");

});


$('a.btn-readmore').click(function () {
    $('span.more').toggleClass('open-more');
    $('a.btn-readmore').toggleClass('open-more');

    if ($('a.btn-readmore').hasClass('open-more')) {
        $('a.btn-readmore').text('Cпрятать')
    } else {
        $('a.btn-readmore').text('Читать дальше')
    }
})


});
