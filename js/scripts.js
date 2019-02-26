$(function() {
  
  var doc = $(document);
  var win = $(windows);
  
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

  // Скрываем блок текста при клике вне его
  doc.mouseup(function (e){ // событие клика по веб-документу
    var div = $(".main-form"); // тут указываем ID/class элемента
    // если клик был не по нашему блоку и не по его дочерним элементам
    if (!div.is(e.target) && div.has(e.target).length === 0) { 
      div.parent().parent().fadeOut(); // скрываем его
    }
  });
  /* * * * * * * * * /Форма * * * * * * * */

//   if(document.documentElement.clientWidth > 768) {
//     $('.class').equalHeights();
//   }
  
//   $('.slider-organizations').slick({
//     dots: false,
//     nav: true,
//     infinite: true,
//     speed: 300,
//     adaptiveHeight: true,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     responsive: [
//       { breakpoint: 1200, settings: {slidesToShow: 3} },
//       { breakpoint: 992, settings: {slidesToShow: 3} },
//       { breakpoint: 768, settings: {slidesToShow: 2} },
//       { breakpoint: 480, settings: {slidesToShow: 1} }
//     ]
//   });
  
  $("#element, #element2").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'), top = $(id).offset().top;
    $('body, html').animate({scrollTop: top}, 1500);
  });

});
