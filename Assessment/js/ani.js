

//Navbar
$(window).scroll(function(){
    if ($(this).scrollTop() > 50) {
       $('#navbar').addClass('sticky');
    } else {
       $('#navbar').removeClass('sticky');
    }
});
//Nvabar

// Hamburger menu
// close hamburger menu after click a
$( '.menus a' ).on("click", function(){
  $('#shree').click();
});


