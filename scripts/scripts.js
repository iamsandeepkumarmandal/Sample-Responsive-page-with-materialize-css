$(document).ready(function () {
  $('.sidenav').sidenav();
  $('textarea#icon_message').characterCounter();
  $('.tap-target').tapTarget();
  $('#menu').click(function () {
    $('.tap-target').tapTarget('open')
  });

  $("#toast_js").click(function () {
    M.toast({
      html: '<strong>I am a toast!</strong>',
      displayLength : 5000,
      classes : 'teal',
      completeCallback : afterToast
    })
  });

  $('.collapsible').collapsible();
  
  $(".owl-carousel").owlCarousel({
    nav: false,
    items: 1,
    dots: true,
    autoplay: true,
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
  });

  function afterToast(){
    M.toast({
      html: '<strong>toast execution is done!</strong>',
      classes : 'green'
    })
  }
});