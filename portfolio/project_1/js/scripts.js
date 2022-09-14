$(document).ready(function () {

  let close_button_popup = '../img/popup_close.svg';


    for (let e of document.querySelectorAll('input[type="range"].rating-progress')) {
        e.style.setProperty('--value', e.value);
        e.style.setProperty('--min', e.min == '' ? '0' : e.min);
        e.style.setProperty('--max', e.max == '' ? '100' : e.max);
        e.addEventListener('input', () => e.style.setProperty('--value', e.value));
    };



      new Swiper(".main-slider", {
        slidesPerView: "auto",
        loop: false,
        spaceBetween: 10,
        pagination: {
          el: '.slider-dots',
          type: 'bullets',
          clickable: true,
        },
        autoplay: {
          delay: 2000,
        },
        navigation: {
          nextEl: ".main-slider__navigation .slide-next",
          prevEl: ".main-slider__navigation .slide-prev",
        },
        breakpoints: {
          1159: {
            slidesPerView: "auto",
            spaceBetween: 0,
            centeredSlides: true
          },
        },
      }); 


      $(".fancybox").fancybox({
        hideOnContentClick: true,
        protect: false, 
        loop: true, 
        arrows : true, 
        infobar : true, 
        toolbar : true, 
        buttons : [
            // 'slideShow',
            // 'fullScreen',
            // 'thumbs',
            // 'share',
            //'download',
            //'zoom',
            // 'close',
          ],
          touch : false,
          animationEffect : "zoom-in-out", 
          transitionEffect: 'slide', 
          animationDuration : 500, 
          transitionDuration : 1366,
          slideClass : '',
          btnTpl: {
            smallBtn: `<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small close_button_popup" title="{{CLOSE}}"><img src="${close_button_popup}" class="close_button_popup-image"></button>`
        },
      });


      // заглушка для формы 
      $('form.review-form').on("submit", function(e){
        e.preventDefault();
        $("button.add_btn_form").attr("disabled", "disabled");
        const
        min = 0,
        max = 100,
        time = 5000;

        let this_form = $(this)

        $(".form-sended__loading").slideToggle(300);
  
        $(this).slideToggle(300);

        (function step(val) {
          setTimeout(function() {
            document.querySelector('.loader__counts').textContent = val;
            if (val < max) {
              step(val + 1);
            };
          }, time / (max - min));

          if (val == max) {
            setTimeout(function () {
              this_form[0].reset();
             
              $(".form-sended__loading").slideToggle(300);
              $("#form-sended__message").slideToggle(300);
            }, 2000); 
            setTimeout(function () {
            $("#form-sended__message").slideToggle(300);
            this_form.slideToggle(300);
            }, 4000)
          }
        })(min);
      });


      // заглушка для формы ответа в окне 
      $('form.reply-form').on("submit", function(e){
        e.preventDefault();
        const
        min = 0,
        max = 100,
        time = 5000;

        let this_form = $(this)

        $("#reply-block .form-sended__loading").slideToggle(300);
  
        $(this).slideToggle(300);

        (function step(val) {
          setTimeout(function() {
            document.querySelector('#reply-block .loader__counts').textContent = val;
            if (val < max) {
              step(val + 1);
            };
          }, time / (max - min));

          if (val == max) {
            setTimeout(function () {
              this_form[0].reset();
              $("#reply-block .form-sended__loading").slideToggle(300);
              $("#reply-block #form-sended__message").slideToggle(300);
            }, 2000); 
            setTimeout(function () {
            $("#reply-block #form-sended__message").slideToggle(300);
            this_form.slideToggle(300);
            }, 4000)
          }
        })(min);
      });


      FReader = new FileReader();
      // событие, когда файл загружается
      FReader.onload = function(e) {
        document.querySelector(".choose-photo__icon-img").src = e.target.result;
      };

      // выполнение функции при выборки файла
      document.querySelector(".choose-photo__input").addEventListener("change", loadImageFile);

      // функция выборки файла
      function loadImageFile() {
        var file = document.querySelector(".choose-photo__input").files[0];
        FReader.readAsDataURL(file);
      }




      $(".vote_1").children(".vote-variants").children(".vote-variant").click(function () {
        vote_show_result();
        $(this).parent().parent().addClass("this-vote_end");
        $(".vote-variants").children(".next-vote").css("display", "block");
        $(this).addClass("selected_var");
        $(this).parent().addClass("this_finish")
      })

      $(".vote_2").children(".vote-variants").children(".vote-variant").click(function () {
        vote_show_result();
        $(this).parent().parent().addClass("this-vote_end");
        $(".vote-variants").children(".next-vote").css("display", "block");
        $(this).addClass("selected_var");
        $(this).parent().addClass("this_finish")
      })

      $(".vote_3").children(".vote-variants").children(".vote-variant").click(function () {
        vote_show_result();
        $(this).parent().parent().addClass("this-vote_end");
        $(".vote-variants").children(".next-vote").css("display", "block");
        $(this).addClass("selected_var");
        $(this).parent().addClass("this_finish")
      })

      $(".vote_4").children(".vote-variants").children(".vote-variant").click(function () {
        vote_show_result();
        $(this).parent().parent().addClass("this-vote_end");
        $(".vote-variants").children(".next-vote").css("display", "block");
        $(this).addClass("selected_var");
        $(this).parent().addClass("this_finish")
      })

      $(".vote_5").children(".vote-variants").children(".vote-variant").click(function () {
        vote_show_result();
        $(this).parent().parent().addClass("this-vote_end");
        $(".vote-variants").children(".next-vote").css("display", "block");
        $(this).addClass("selected_var");
        $(this).parent().addClass("this_finish")
      })


      let row = $(".vote_6").children(".vote-variants").children(".vote-variant").children('.vote-variant__checkbox');

      for (let i = 0; i < row.length; i++) {
        row[i].addEventListener('click', function() {
        let check = this.querySelector('input[type="checkbox"]');


        if (check.checked) {
          $(this).parent().addClass("selected_var");
        } else {
          $(this).parent().removeClass("selected_var");
        }

       

      });
      }


      $('.vote_last_step').children('.last_vote_controls').children(".vote_goto").click(function (e) {
        e.preventDefault();

        $(this).parent().parent().slideUp(300);
        $('.vote_6-title').css("display", 'block');
        $('.vote-range-line').css("display", 'block');
        
        $('.last__question').slideDown(300);
        $('.vote_7-title').css("display", 'none');
      })





     

      function vote_show_result() {

        let votes = $(".vote-variants");
        let vc = votes;
        let votes_c = [];
  
        for (let vv = 0; vv < vc.length; vv++) {
          const vvel = vc[vv];
          votes_c.push(vvel);
        }

        for (let vm = 0; vm < votes_c.length; vm++) {
        
        const elvm = votes_c[vm];

        let data_elvm = $(elvm).attr("data-vote");

        
        let vote_variant =   $('.vote-variants[data-vote*=' + data_elvm + ']').children(".vote-variant"); 
      
        let ty = vote_variant; 
  
        let arr = [];
  
        for (let i = 0; i < ty.length; i++) {
          const el = ty[i];
          arr.push(el);
        }

  
        for (let q = 0; q < arr.length; q++) {
          const elar = arr[q];
          let vote_bar = $(elar).children(".vote-variant_result").attr("data-percent");

          let votes_block = $(elar).parent().parent().parent();
          let votes_titles = $(votes_block).children(".votes__titles")


          $(elar).children(".vote-variant_result").css("opacity", "1");
          $(elar).children(".vote-variant_result").css("width", vote_bar + "%");
          $(elar).children(".vote-variant__counts").css("opacity", "1");
          $(elar).children(".vote-variant__counts").text(vote_bar + "%");


          
          $(".vote-variants").children(".next-vote").click(function (e) {
            e.preventDefault();

            $(elar).children(".vote-variant_result").css("opacity", "0");
            $(elar).children(".vote-variant_result").css("width", 0 + "%");
            $(elar).children(".vote-variant__counts").css("opacity", "0");
            $(elar).children(".vote-variant__counts").text("");

            

            if($(".vote_1.vote__item").hasClass("this-vote_end")) {                 
              
              $(votes_titles).children(".vote_1-title").css('display', 'none')
              $(".vote_1").css("display", 'none');


              $(votes_titles).children(".vote_2-title").css('display', 'block')
              $(".vote_2").css("display", 'block');  

              $('.vote-range').css('width', 'calc((100% / 6) * 2)')  
                          
            }





            if($(".vote_2.vote__item").hasClass("this-vote_end")) {

              $(votes_titles).children(".vote_2-title").css('display', 'none')
              $(".vote_2").css("display", 'none');

              $(votes_titles).children(".vote_3-title").css('display', 'block')
              $(".vote_3").css("display", 'block') 

              $('.vote-range').css('width', 'calc((100% / 6) * 3)');

             
            }





            if($(".vote_3.vote__item").hasClass("this-vote_end")) {

              $(votes_titles).children(".vote_3-title").css('display', 'none')
              $(".vote_3").css("display", 'none');

              $(votes_titles).children(".vote_4-title").css('display', 'block')
              $(".vote_4").css("display", 'block');

              $('.vote-range').css('width', 'calc((100% / 6) * 4)');
          
            }





            if($(".vote_4.vote__item").hasClass("this-vote_end")) {

              $(votes_titles).children(".vote_4-title").css('display', 'none')
              $(".vote_4").css("display", 'none');

              $(votes_titles).children(".vote_5-title").css('display', 'block')
              $(".vote_5").css("display", 'block');  

              $('.vote-range').css('width', 'calc((100% / 6) * 5)')  
            }



            if($(".vote_5.vote__item").hasClass("this-vote_end")) {

              $(votes_titles).children(".vote_5-title").css('display', 'none')
              $(".vote_5").css("display", 'none');

              $(votes_titles).children(".vote_6-title").css('display', 'block')
              $(".vote_6").css("display", 'block');  
              $('.vote-range').css('width', 'calc((100% / 6) * 6)')   
            }
            
            $(".vote-variants").children(".next-vote").css("display", "none");
          })


          $(".vote-variants").children(".end_vote").click(function (j) {
            j.preventDefault();
            $(elar).parent().parent().addClass("this-vote_end");
            $(elar).children(".vote-variant_result").css("opacity", "0");
            $(elar).children(".vote-variant_result").css("width", 0 + "%");
            $(elar).children(".vote-variant__counts").css("opacity", "0");
            $(elar).children(".vote-variant__counts").text("");

            
            if($(".vote_6.vote__item").hasClass("this-vote_end")) {
              $(votes_titles).children(".vote_6-title").css('display', 'none')
              $(".vote_6").css("display", "none");
              $('.vote-range-line').css('display', 'none')   

              $(votes_titles).children(".vote_7-title").css('display', 'block')
              $(".vote_last_step").css("display", "block");
            }
            
            $(".vote-variants").children(".end-vote").css("display", "none");
          })

        }
      }
      }

    

    
      $('.question-item__title').click(function () {
        if ($('.question-item').hasClass('question-opened')) {
          $('.question-item__title').not($(this)).removeClass('active');
          $('.question-item__text').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(300);
      })



      let hearts = document.querySelectorAll(".like_btn");

      for (let heart = 0; heart < hearts.length; heart++) {
        const likebut = hearts[heart];
        
          $(likebut).attr("data-btn", "lk-id" + heart);
          let atr = $(likebut).attr("data-btn");
          
          let storage_like_liked = atr;

         

          likebut.onclick = function(e) {
            this.classList.toggle("liked");
            this.classList.contains("liked") ? e.target.nextElementSibling.textContent++ : e.target.nextElementSibling.textContent --; 
            this.classList.contains("liked") ? localStorage.setItem(storage_like_liked + "_contains", 1) : localStorage.setItem(storage_like_liked + "_contains", 0);

            localStorage.setItem(storage_like_liked, "true");
            let storage_like_count = $(likebut).next().text();

          
            localStorage.setItem(storage_like_liked + "_likes", storage_like_count)



          }

          if ((localStorage.getItem(storage_like_liked + "_contains") == 1) & localStorage.getItem(storage_like_liked) == "true") {

            let lks = localStorage.getItem(storage_like_liked + "_likes");
            
            $(likebut).attr('data-btn', storage_like_liked).addClass("liked");

            $(likebut).attr('data-btn', storage_like_liked).next().text(lks);

          }

      }


      let block = $(".review-controls").parent();
      let controls_box = $(block).children(".review-controls");
      let controls_rating_box = $(controls_box).children(".review-controls__ratingbox");
      let rating = $(controls_rating_box).children(".review-controls__rating");
    

      for (let rt = 0; rt < rating.length; rt++) {
        const rt_elem = rating[rt];
        let ratingItem = $(rt_elem).children('.rating-item');
        rt_elem.onclick = function(e){
          let target = e.target;
          if(target.classList.contains('rating-item')){
            removeClass(ratingItem,'active')
            target.classList.add('active');
          }
        }
        
      }


      function removeClass(elements, className) {
        for (var i = 0; i < elements.length; i++) {
          elements[i].classList.remove(className);
        }
      }


      //видеоотзывы
      let count_labels = $('.reviews-wrapper .review-item').length;
      let count_labels_visible = $('.review-item:visible').length;
      $('.show_all_reviews span').text(count_labels - count_labels_visible);
      let def_label = $(".show_all_reviews").text();

      $(".show_all_reviews").click(function(e) {
        e.preventDefault();
        let label = $(".show_all_reviews span").text();
        let currentOpen = $('.review-item:visible');

        if ($(window).width() >= 1215) {
            $(currentOpen).next('.review-item').slideDown(300)
                          .next('.review-item').slideDown(300)
                          .next('.review-item').slideDown(300).addClass("opened") ? $('.show_all_reviews span').text(label - 3) : false;
          } 

          else if ($(window).width() > 767) {
            $(currentOpen).next('.review-item').slideDown(300)
                          .next('.review-item').slideDown(300).addClass("opened") ? $('.show_all_reviews span').text(label - 2) : false;
          }

          else if ($(window).width() <= 767) {
            $(currentOpen).next(".review-item:hidden").slideDown(300).addClass("opened") ? $('.show_all_reviews span').text(label - 1) : false;
          }

        
        $('.review-item:hidden').length<1 ? $('.show_all_reviews').hide() & $('.close_all_reviews').show() : false;
    


        $('.close_all_reviews').click(function (e) {
          e.preventDefault();
          $(currentOpen).hasClass("opened") ? $('.review-item.opened').removeClass('opened').slideUp(300) : false;
          $('.close_all_reviews').hide();
          $(".show_all_reviews").show().text(def_label);
        });

    
      });


      // $("button.button").on("click", function () {
      //     $(this).toggleClass("tap");
      // });

      const review_form = document.querySelector('.review-form');
      let inputs = $(review_form).find("input:not([type='file'])");
      let textarea = $(review_form).find("textarea.review_message");
      let checkboxes = $(review_form).find("input[type='checkbox']");
      let submit_button = $("button.add_btn_form");

      review_form.addEventListener('change', form_valids);
      
      function form_valids() {
        for (let inpts = 0; inpts < inputs.length; inpts++) {
          let inputs_list = inputs[inpts];

          $(checkboxes).is(":checked") && 
          $(inputs_list).val() != "" && 
          $(textarea).val() != "" ?  $(submit_button).removeAttr("disabled") : $(submit_button).attr("disabled", "disabled")
          
        }
      }
})


$(document).ready(function () {

  let butph = document.querySelectorAll(".butph");
  
  let butph_css =  $(".butph").css("background");
  let butph_shadow =  $(".butph").css("box-shadow");


  [].forEach.call(butph,function(el){

    el.addEventListener('touchstart', function(){
      $(this).css("transform", "scale(0.97)");
      $(this).css("background", "linear-gradient(90deg, #048F5F 0%, #048F5F 100%)");
      $(this).css("box-shadow", "none");
    });
  
    el.addEventListener('touchend', function(){
      $(this).css("transform", "scale(1)");
      $(this).css("background", butph_css);
      $(this).css("box-shadow", butph_shadow);
    });

  });


  $(".butph").mousedown(function(){
    $(this).css("transform", "scale(0.97)");
    $(this).css("background", "linear-gradient(90deg, #048F5F 0%, #048F5F 100%)");
    $(this).css("box-shadow", "none");
  });

  $(".butph").mouseup(function(){
    $(this).css("transform", "scale(1)");
    $(this).css("background", butph_css);
    $(this).css("box-shadow", butph_shadow);
  });


})