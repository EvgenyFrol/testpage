import './BaseHeader.scss';

var banner = document.querySelector('.video-wrapper');
console.log(banner);
var header = document.querySelector('.header');
var coord = banner.clientHeight;

  window.addEventListener('scroll', function() {
    var Y = pageYOffset;

  if (Y >= coord) {
    header.style.backgroundColor = "#302e2d";
  } else {
    header.style.backgroundColor = "transparent"
  }
});
