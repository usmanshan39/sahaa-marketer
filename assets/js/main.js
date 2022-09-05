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

  // owl carosal for meet the team page 
  var owl = $('.branPortfolio-owl-carousel');
  owl.owlCarousel({
    margin: 10,
    loop: true,
    nav: false,
    center: false,
    dots: true,
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
        items: 3
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



// tabs

  // Select all links with hashes
  $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
      // On-page links
      if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
          location.hostname == this.hostname
      ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
              // Only prevent default if animation is actually gonna happen
              event.preventDefault();
              $('html, body').animate({
                  scrollTop: target.offset().top
              }, 500, function() {
                  // Callback after animation
                  // Must change focus!
                  var $target = $(target);
                  $target.focus();
                  if ($target.is(":focus")) { // Checking if the target was focused
                      return false;
                  } else {
                      $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                      $target.focus(); // Set focus again
                  };
              });
          }
      }
  });


/*-------------------------------------
Isotope
-------------------------------------*/

// // Isotope Filter
// $('.isotope-item').isotope({
//     itemSelector: '.item',
//     layoutMode:'fitRows'
//     // masonry: {
//     //     columnWidth: 0
//     // }
// });

var $grid = $('.isotope-item').isotope({
  // options...
  itemSelector: '.item',
  layoutMode:'fitRows'

});

$grid.imagesLoaded().progress(function () {
  $grid.isotope('layout');
});


$('.nav-item-logos').click(function(){
 $('.nav-item-logos').removeClass('active');
 $(this).addClass('active');
 var selector=$(this).attr('data-filter');
 $('.isotope-item').isotope({
   filter:selector
 });
 return false;
});
  
});