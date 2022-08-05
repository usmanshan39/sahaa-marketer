$( document ).ready(function() {
  // navbar toggle button
  $("#navbar-toggler").on("click", function(e){
    e.preventDefault();
    $(this).children(".fa-bars").toggleClass("d-none");
    $(this).children(".fa-times").toggleClass("d-none");
  });


  // owl carosal
  var owl = $('.owl-carousel');
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
  
});