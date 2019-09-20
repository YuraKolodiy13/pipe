//animation for first screen
if (document.querySelector('.banner')) {
  window.onload = setTimeout(function () {
    document.querySelector('.banner').classList.add('visible');
  }, 500);
}

//scroll down
$(".mouse_scroll").click(function () {
  $([document.documentElement, document.body]).animate({
    scrollTop: $("#services").offset().top
  }, 1000);
});

//animation for all sections
function isVisible(elem) {
  let coords = elem.getBoundingClientRect();
  let windowHeight = document.documentElement.clientHeight;
  let topVisible = coords.top >= 0 && coords.top <= windowHeight;
  let bottomVisible = coords.bottom <= windowHeight && coords.bottom >= 0;
  return topVisible || bottomVisible;
}

const sections = document.querySelectorAll('.section');
$(window).on("load scroll", function () {
  // Don't run the rest of the code if every section is already visible
  if (!document.querySelectorAll('.section:not(.visible)')) return;

  for (let i = 0; i < sections.length; i++) {
    if (isVisible(sections[i])) {
      let lazyImages = sections[i].querySelectorAll('.lazy');
      if (lazyImages.length !== 0) {
        if (lazyImages && lazyImages[0].tagName === 'IMG') {
          for (let j = 0; j < lazyImages.length; j++) {
            lazyImages[j].src = lazyImages[j].dataset.background;
          }
        } else {
          for (let j = 0; j < lazyImages.length; j++) {
            lazyImages[j].style.background = lazyImages[j].dataset.background;
          }
        }
      }
      setTimeout(function () {
        sections[i].classList.add('visible');
      }, 200);
    }
  }
});