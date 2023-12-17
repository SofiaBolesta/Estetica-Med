import {initAccordions} from './init-accordion';
import {
  showButtonAesthetics,
  showButtonElos, showButtonEpilation, showButtonMassage,
  showButtonText,
  showButtonThreadLifting,
  showButtonWrapBody
} from './accordions-button';
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
  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initAccordions();
  });
});
