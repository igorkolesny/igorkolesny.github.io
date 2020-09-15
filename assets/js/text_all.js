var tag = $('.open_more'); // тег спан
var txt_hei = $('.text').height(); //высота блока с общим текстом
var txt_block = $('.text'); // тег блока с общим текстом
var block = $('.block'); // тег блока общего
var tag_h = $(tag).height(); // высота строки спан

var flag = false;

$(document).ready(function() {
    
        $(tag).css({'display':'none'});  
      
});



$(document).on('click', 'a[class^="more_but"]', function(e) {
    e.preventDefault();
    console.log(e.target);
   console.log(this);
    alert('Вы кликнули по ссылке с классом ' + this.className);

});



function more_click() {
    $(txt_block).css({'height': tag_h + txt_hei});
    $(block).css({'height': tag_h + txt_hei + 95});
    $(tag).css({'display':'block'});
    flag = true;

    if (flag == true) {
        $('.more_but').attr({'onclick' : 'more_close();'});
    }
}

function more_close() {
    $(txt_block).css({'height': '85px'});
    $(block).css({'height': '180px'});
    $(tag).css({'display':'none'});
    flag = false;

    if (flag == false) {
        $('.more_but').attr({'onclick' : 'more_click();'});
    }
}