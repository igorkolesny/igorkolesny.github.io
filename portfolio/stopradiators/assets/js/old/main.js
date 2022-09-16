

/* Form order */

$(document).ready(function() {
    $('#form-ajax').submit(function(event) {
        event.preventDefault();
        var sendForm = this;
        $.ajax({
            url: 'mail.php',
            type: 'post',
            data: $(sendForm).serialize(),
            success: function(result) {
                document.getElementById('form_display').style.display = 'none';
                document.getElementById('success_message').style.display = 'block';

            }
        });
    });
});


$(document).ready(function() {
    $('#form-ajax-1').submit(function(event) {
        event.preventDefault();
        var sendForm = this;
        $.ajax({
            url: 'mail.php',
            type: 'post',
            data: $(sendForm).serialize(),
            success: function(result) {
                document.getElementById('form_display_1').style.display = 'none';
                document.getElementById('success_message_1').style.display = 'block';
                
            }
        });
    });
});


$(document).ready(function() {
    $('#form-ajax-2').submit(function(event) {
        event.preventDefault();
        var sendForm = this;
        $.ajax({
            url: 'mail.php',
            type: 'post',
            data: $(sendForm).serialize(),
            success: function(result) {
                document.getElementById('form_display_2').style.display = 'none';
                document.getElementById('success_message_2').style.display = 'block';
                
            }
        });
    });
});



$(function() {
    $(".owl-carousel").owlCarousel({
        nav:true,
        loop:true,
        dots: true,
        responsiveClass:true,
        responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:1,
        }
    }
    });
});
