import './BaseSlider.scss';

var mySiderr = new Swiper ('.carousel', {
  // Optional parameters
  loop: true,
  centeredSlides: true,
  paginationClickable: true,
  noSwiping: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.carousel__next',
    prevEl: '.carousel__prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.slider-scrollbar',
  },
})
