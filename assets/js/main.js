$( document ).ready(function() {
  // navbar toggle button
  $("#navbar-toggler").on("click", function(e){
    e.preventDefault();
    $(this).children(".fa-bars").toggleClass("d-none");
    $(this).children(".fa-times").toggleClass("d-none");
  })
  
});