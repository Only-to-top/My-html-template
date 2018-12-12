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

  // $('.element').equalHeights();

});
