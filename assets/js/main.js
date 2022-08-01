$(document).ready(function () {
  // add navbar scroll effect
  if ($(window).width() > 990) {
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      if (scroll > 250) {
        $(".navbar").addClass('colour-navbar');
      } else {
        $(".navbar").removeClass('colour-navbar');
      }
    });
  } else {
    $(".navbar").addClass('colour-navbar');
  }

  // change text in main header
  var words = [
      'Reaults?',
      'Sales?',
      'Growth?',
      'Connections?',
    ],
    i = 0;
  setInterval(function () {
    $('#changingword').fadeOut(function () {
      $(this).html(words[i = (i + 1) % words.length]).fadeIn();
    });
  }, 2000);


})