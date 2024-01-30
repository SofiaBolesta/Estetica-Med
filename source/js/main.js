import {initAccordions} from './init-accordion';
import {
  showButtonAesthetics,
  showButtonElos, showButtonEpilation, showButtonMassage,
  showButtonText,
  showButtonThreadLifting,
  showButtonWrapBody
} from './accordions-button';
import {initSpecialistSwiper} from './specialist-swiper';
import {initModalGallery} from './modal-gallery';
import {initMenu} from './burger-menu';
import {initSliderWithTextSwiper} from './slider-with-text-swiper';
import {initSliderWithoutTextSwiper} from './slider-without-text-swiper';
import {menuScroll} from './menu-scroll';

window.addEventListener('DOMContentLoaded', () => {
  // Utils
  // ---------------------------------

  // Modules
  // ---------------------------------
  showButtonText();
  showButtonThreadLifting();
  showButtonElos();
  showButtonAesthetics();
  showButtonWrapBody();
  showButtonMassage();
  showButtonEpilation();
  initSpecialistSwiper();
  initMenu();
  initSliderWithTextSwiper();
  initSliderWithoutTextSwiper();
  menuScroll();
  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initAccordions();
    initModalGallery();
  });
});
