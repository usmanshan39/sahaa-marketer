$( document ).ready(function() {
  // navbar toggle button
  $("#navbar-toggler").on("click", function(e){
    e.preventDefault();
    $(this).children(".fa-bars").toggleClass("d-none");
    $(this).children(".fa-times").toggleClass("d-none");
  });


  // owl carosal for index pages
  var owl = $('.video-owl-carousel');
  owl.owlCarousel({
    margin: 10,
    loop: true,
    nav: true,
    center: true,
    responsive: {
      0: {
        items: 2
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  })

  // owl carosal for meet the team page 
  var owl = $('.team-owl-carousel');
  owl.owlCarousel({
    margin: 10,
    loop: true,
    nav: false,
    center: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      },
      1400: {
        items: 5
      }
    }
  })

  // meet the team page counter

  $('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 3000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

  
});