import Swiper from '../js/vendor/swiper.js';
const sliderWithoutTextSwiper = document.querySelector('.slider-without-text__swiper');

export const initSliderWithoutTextSwiper = () => {
  if (sliderWithoutTextSwiper) {
    (() =>
      new Swiper('.slider-without-text__swiper', {
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
