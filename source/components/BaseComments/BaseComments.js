import './BaseComments.scss';


const ProjectSwiper = new Swiper('.swiper-comments', {

  loop: true,
  loopAdditionalSlides: 3,
  loopedSlides: 3,
  centeredSlides: true,
  slidesPerView: 3,
  spaceBetween: 10,
  paginationClickable: true,
  noSwiping: true,  
  navigation: {
    nextEl: '.comments-next',
    prevEl: '.comments-prev',
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 10,
      noSwiping: false,

    },
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
      loopAdditionalSlides: 1,
      loopedSlides: 1,
      centeredSlides: false,
      noSwiping: false,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
      loopAdditionalSlides: 1,
      loopedSlides: 1,
      centeredSlides: false,
      noSwiping: false,
    }
  }
});
