jQuery(function() {
  
    const menu = $('.top-menu');

    $(document).on('click', '.hamburger', function() {
        if ( $(this).hasClass('is-active') ) {
            $(this).removeClass('is-active');
            menu.slideUp();
        } else {
            $(this).addClass('is-active');
            menu.slideDown();
        }
    });

    if ( $(window).width() < 992 ) {
        //Скрыть блок при клике вне его
        $(document).mouseup(function (e) {
            const hamburger = $('.hamburger');

            if ( (menu.has(e.target).length === 0) && (hamburger.has(e.target).length === 0) ) {

                menu.slideUp();

                if ( hamburger.hasClass('is-active') ) {
                    hamburger.removeClass('is-active');
                };
            };
        });
    };

    $('[data-fancybox=""]').fancybox({
      animationEffect: 'zoom-in-out',
    });

    //E-mail Ajax Send
    $(document).on('submit', '.main-form', function() {
      let th = $(this);
      $.ajax({
        type: "POST",
        url: "mail.php",
        data: th.serialize()
      }).done(function() {
        // alert("Спасибо! Сообщение отправлено!");
        swal({ title: 'Сообщение отправлено', type: 'success' });
        setTimeout(function() {
          // Done Functions
          th.trigger("reset");
        }, 1000);
      });
      return false;
    });
  
    $('.btn-send-form').on('click', function(){
      if ( $('form input[type=checkbox]').is(':checked') ) {
        $('form .checkbox-new').removeClass('red');
      } else
        $('form .checkbox-new').addClass('red');
    });

    // Открыть всплывающее окно с формой
    $('.popup').click(function(){
      $('.popup-wrap').fadeIn();
      $(".popup-wrap .title").html($(this).text()); //текст ссылки вставляем в название модального окна
    });
  
    if ( $(window).width() < 768 ) {

      $('.class').equalHeights();

      //Скрыть блок при клике вне его
      $(document).mouseup(function (e) {
          var container = $(".search--show");
          if (container.has(e.target).length === 0){
              container.fadeOut();
          };
      });

    }


    // swiper slider
    var swiper = new Swiper('.header-swiper-container', {
        navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev', },
        pagination: { el: '.swiper-pagination', clickable: true, dynamicBullets: true, },
        autoplay: { delay: 3500, disableOnInteraction: false, },
        spaceBetween: 30, // расст-е м-у слайдами
        grabCursor: true, // рука
        loop: true,
        mousewheel: true, // прокрутка колесом
        slidesPerView: 2, // кол-во слайдов
        // effect: 'fade', // для slidesPerView: 1
        // centeredSlides: true, //центрировать
        // lazy: true,
        breakpoints: {
          1200: { // < 1200
            slidesPerView: 2,
            spaceBetween: 40,
          },
          992: { // < 1024
            slidesPerView: 1,
            spaceBetween: 40,
          },
          768: { // < 768
            slidesPerView: 2,
            spaceBetween: 30,
          },
          576: { // < 768
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }
    });
  
    // stop autoplay swiper on hover
    $(".header-swiper-container").hover(function() {
        (this).swiper.autoplay.stop();
    }, function() {
        (this).swiper.autoplay.start();
    });

    // scroll to top
    $("#element, #element2").on("click", "a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'), top = $(id).offset().top;
      $('body, html').animate({scrollTop: top}, 1500);
    });
  
  
    $('input[type="tel"]').mask('0000-0000');

});
