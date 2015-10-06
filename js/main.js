//IIFE
(function () {

$('ul').on('click', 'h3', function(event){
  var section = $(event.target).sibling;
  $(section).addClass('visable');
});




} ());