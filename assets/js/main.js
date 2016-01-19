/*global window, alert*/
$(document).ready(function () {

  var $window = $(window);

  $('[data-max-lines]').each(function () {
    var $this = $(this);
    var lines = $this.data('max-lines');
    $clamp($this[0], {clamp: lines});
  });


  $('.mobile-trigger').on('click', function(e){
    $('nav').toggle();
  });

});
