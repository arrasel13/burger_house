$(document).scroll(function() {
    var scroll = $(document).scrollTop();
  
    if (scroll >= 50) {
      $(".h_menu").addClass("transparent");
    } else {
      $(".h_menu").removeClass("transparent");
    }
});