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
  
  /* * * * * * * * * Форма * * * * * * * */
  // Открыть всплывающее окно с формой
  $('.popup').click(function(){
    $('.popup-wrap').fadeIn();
    $(".popup-wrap .title").html($(this).text()); //текст ссылки вставляем в название модального окна
  });

  //Скрываем при нажатии на 'close'
  $('.popup-wrap .close').click(function(){
    $('.popup-wrap').fadeOut();
  });

  
  /* * * * * * * * * /Форма * * * * * * * */

//   if ( $(window).width() < 768 ) {
    
//     $('.class').equalHeights();

//     // Скрываем блок текста при клике вне его
//     $(document).mouseup(function (e){ // событие клика по веб-документу
//       var div = $(".main-form"); // тут указываем ID/class элемента
//       // если клик был не по нашему блоку и не по его дочерним элементам
//       if (!div.is(e.target) && div.has(e.target).length === 0) { 
//         div.parent().parent().fadeOut(); // скрываем его
//       }
//     });
    
//   }

  
  var swiper = new Swiper('.header-swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
    // autoplay: {
    //   delay: 3500,
    //   disableOnInteraction: false,
    // },
    spaceBetween: 30, // расст-е м-у слайдами
    grabCursor: true, // рука
    loop: true,
    mousewheel: true, // прокрутка колесом
    // centeredSlides: true, //центрировать

    slidesPerView: 5, // кол-во слайдов

    // effect: 'fade', // для slidesPerView: 1

    breakpoints: {
      1200: { // < 1200
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: { // < 1024
        slidesPerView: 3,
        spaceBetween: 40,
      },
      768: { // < 768
        slidesPerView: 2,
        spaceBetween: 30,
      },
      576: { // < 768
        slidesPerView: 1,
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
