$(document).ready(function() {
  $('.icon').on('click', function(){
    $(this).parent().find('ul').slideToggle();

    $(window).on('resize', function() {
      if ( $(window).width() > 480 ) {
        $('ul').show();
      }
    })
  });
});
