$(function() {
  
  $('.hamburger').click(function(){
    $(this).toggleClass('is-active');
  });
  
  $('[data-fancybox=""]').fancybox({
    animationEffect: 'zoom-in-out',
  });

  //E-mail Ajax Send
  $(".main-form").submit(function() {
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      // url: "/wp-content/themes/itres/mail.php", //for WP
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
  
  $('.btn-send-form').click(function(){
    if ( $('form input[type=checkbox]').is(':checked') ) {
      $('form .checkbox-new').removeClass('red');
    } else
      $('form .checkbox-new').addClass('red');
  });
  
  /* * * * * * * * * Форма * * * * * * * */
  // Открыть всплывающее окно с формой
  $('.popup').click(function(){
    $('.popup-wrap').fadeIn();
    $(".popup-wrap .title").html($(this).text()); //текст ссылки вставляем в название модального окна
  });
  
  if ( $(window).width() < 768 ) {
    
    $('.class').equalHeights();

    if ( $('.main-form').css('display', 'block') ) {
      // Скрываем блок текста при клике вне его
      $(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $(".main-form"); // тут указываем ID/class элемента
        // если клик был не по нашему блоку и не по его дочерним элементам
        if (!div.is(e.target) && div.has(e.target).length === 0) { 
          div.parent().parent().fadeOut(); // скрываем его
        }
      });
    }
    
  }


  // slider
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

  
  $("#element, #element2").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'), top = $(id).offset().top;
    $('body, html').animate({scrollTop: top}, 1500);
  });

});
