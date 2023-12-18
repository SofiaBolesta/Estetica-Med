import Swiper from '../js/vendor/swiper.js';
const specialistSwiper = document.querySelector('.specialist__swiper');

export const initSpecialistSwiper = () => {
  if (specialistSwiper) {
    (() =>
      new Swiper('.specialist__swiper', {
        direction: 'horizontal',
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          320: {
            slidesPerView: 'auto',
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 'auto',
          },
          1200: {
            initialSlide: 0,
            slidesPerView: 2,
            spaceBetween: 40,
          },
        },
        mousewheel: false,
        keyboard: true,
        allowSlideNext: true,
        allowSlidePrev: true,
      })
    )();
  }
};
