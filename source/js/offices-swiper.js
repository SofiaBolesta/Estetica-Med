import Swiper from '../js/vendor/swiper.js';
const officesSwiper = document.querySelector('.offices__swiper');

export const initOfficesSwiper = () => {
  if (officesSwiper) {
    (() =>
      new Swiper('.offices__swiper', {
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
            slidesPerView: 2,
          },
          1500: {
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
