/*global window, alert*/
$(document).ready(function () {

  var $window = $(window);

  $('[data-max-lines]').each(function () {
    var $this = $(this);
    var lines = $this.data('max-lines');
    $clamp($this[0], {clamp: lines});
  });

  function onResize() {
    var window_width = $window.width();
    var window_height = $window.height();

  }

  function onScroll() {
    var st = $window.scrollTop();

  }

  onResize();
  onScroll();
  $window.resize(onResize);
  $window.scroll(onScroll);

});