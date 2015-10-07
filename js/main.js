//IIFE
(function () {

$('h3').click(
  function(){ $(this).parent('one').addClass('hidden') },
  function(){ $(this).siblings().removeClass('hidden') },
  function(){ $(this).siblings().addClass('showing') }
  )

// $('ul').on('click', 'span', function(event){
//   var header = $(event.target);
//   header.sibling.removeClass('.hidden');
//   header.sibling.addClass('.showing');
// });




} ());