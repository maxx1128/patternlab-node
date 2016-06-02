$('*[data-screen-size]').on('click', function(){

  var size_label = $(this).attr('data-screen-size');

  $('#sg-viewport').attr('data-screen', size_label);
});