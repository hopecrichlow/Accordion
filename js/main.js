//IIFE
(function () {

$('ul').on('click', 'h3', function(){
  var section = $(event.target).sibling;
  $(section).removeClass('slide');
  $(section).addClass('visible')
});




} ());