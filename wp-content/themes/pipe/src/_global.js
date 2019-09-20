$(window).scroll(function () {
  var height = $(window).scrollTop();
  var line = document.querySelector('.banner') ? parseInt(getComputedStyle(document.querySelector('.banner')).height) : 400;
  if (height > line) {
    $('#back2Top').css('display', 'flex');
  } else {
    $('#back2Top').css('display', 'none');
  }
});
$(document).ready(function () {
  $("#back2Top").click(function (event) {
    event.preventDefault();
    $("html, body").animate({scrollTop: 0}, "slow");
    return false;
  });

});
