$(document).ready(function(){

  // Mobile Nav Functionnality
  $('#hamburger,#close').click(function(){
    $('#hamburger,#close').toggle();
    $('.custom-navigation #links').toggleClass('visible');
  });


});
