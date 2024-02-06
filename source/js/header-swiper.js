import Swiper from '../js/vendor/swiper.js';
const headerSwiper = document.querySelector('.header__swiper');

export const initHeaderSwiper = () => {
  if (headerSwiper) {
    (() =>
      new Swiper('.header__swiper', {
        direction: 'horizontal',
        loop: true,
        mousewheel: false,
        keyboard: true,
        allowSlideNext: true,
        allowSlidePrev: true,
        centeredSlides: true,
        autoplay: {
          delay: 3500,
          disableOnInteraction: false,
        },
      })
    )();
  }
};
