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
import {initOfficesSwiper} from './offices-swiper';
import {initWorkSwiper} from './work-swiper';
import {initCosmeticSwiper} from './cosmetic-swiper';
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
  initOfficesSwiper();
  initWorkSwiper();
  initCosmeticSwiper();
  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initAccordions();
    initModalGallery();
  });
});
