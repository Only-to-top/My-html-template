$(function() {

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
      swal({
        title: 'Сообщение отправлено',
        type: 'success',
      });
      setTimeout(function() {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });

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

});
