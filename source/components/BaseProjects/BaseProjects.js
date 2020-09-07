import './BaseProjects.scss';


const slides = document.querySelectorAll('.projects__cards')
console.log(slides.length)

const ProjectSwiper = new Swiper('.swiper-projects', {
  loop: true,
  loopAdditionalSlides: 3,
  loopedSlides: 3,
  centeredSlides: true,
  slidesPerView: 3,
  spaceBetween: 10,
  paginationClickable: true,
  noSwiping: true,
  watchOverflow: true,
  navigation: {
    nextEl: '.project-next',
    prevEl: '.project-prev',
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
