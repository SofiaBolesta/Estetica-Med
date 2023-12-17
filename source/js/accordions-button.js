const buttonShow = document.querySelector('.services__accordion-button');
const textButtonOpen = document.querySelector('.services__icon-open');
const textButtonClose = document.querySelector('.services__icon-close');
const threadLiftingButtonShow = document.querySelector('.thread-lifting__accordion-button');
const threadLiftingButtonOpen = document.querySelector('.thread-lifting__icon-open');
const threadLiftingButtonClose = document.querySelector('.thread-lifting__icon-close');
const elosButtonShow = document.querySelector('.elos__accordion-button');
const elosButtonOpen = document.querySelector('.elos__icon-open');
const elosButtonClose = document.querySelector('.elos__icon-close');
const aestheticsButtonShow = document.querySelector('.aesthetics__accordion-button');
const aestheticsButtonOpen = document.querySelector('.aesthetics__icon-open');
const aestheticsButtonClose = document.querySelector('.aesthetics__icon-close');
const wrapBodyButtonShow = document.querySelector('.wrap-body__accordion-button');
const wrapBodyButtonOpen = document.querySelector('.wrap-body__icon-open');
const wrapBodyButtonClose = document.querySelector('.wrap-body__icon-close');
const massageButtonShow = document.querySelector('.massage__accordion-button');
const massageButtonOpen = document.querySelector('.massage__icon-open');
const massageButtonClose = document.querySelector('.massage__icon-close');
const epilationButtonShow = document.querySelector('.epilation__accordion-button');
const epilationButtonOpen = document.querySelector('.epilation__icon-open');
const epilationButtonClose = document.querySelector('.epilation__icon-close');

function showButtonText() {
  buttonShow.addEventListener('click', () => {
    if (textButtonClose.classList.contains('services__icon-close--hidden')) {
      textButtonOpen.classList.add('services__icon-open--hidden');
      textButtonClose.classList.remove('services__icon-close--hidden');
    } else {
      textButtonOpen.classList.remove('services__icon-open--hidden');
      textButtonClose.classList.add('services__icon-close--hidden');
    }
  });
}
function showButtonThreadLifting() {
  threadLiftingButtonShow.addEventListener('click', () => {
    if (threadLiftingButtonClose.classList.contains('thread-lifting__icon-close--hidden')) {
      threadLiftingButtonOpen.classList.add('thread-lifting__icon-open--hidden');
      threadLiftingButtonClose.classList.remove('thread-lifting__icon-close--hidden');
    } else {
      threadLiftingButtonOpen.classList.remove('thread-lifting__icon-open--hidden');
      threadLiftingButtonClose.classList.add('thread-lifting__icon-close--hidden');
    }
  });
}
function showButtonElos() {
  elosButtonShow.addEventListener('click', () => {
    if (elosButtonClose.classList.contains('elos__icon-close--hidden')) {
      elosButtonOpen.classList.add('elos__icon-open--hidden');
      elosButtonClose.classList.remove('elos__icon-close--hidden');
    } else {
      elosButtonOpen.classList.remove('elos__icon-open--hidden');
      elosButtonClose.classList.add('elos__icon-close--hidden');
    }
  });
}
function showButtonAesthetics() {
  aestheticsButtonShow.addEventListener('click', () => {
    if (aestheticsButtonClose.classList.contains('aesthetics__icon-close--hidden')) {
      aestheticsButtonOpen.classList.add('aesthetics__icon-open--hidden');
      aestheticsButtonClose.classList.remove('aesthetics__icon-close--hidden');
    } else {
      aestheticsButtonOpen.classList.remove('aesthetics__icon-open--hidden');
      aestheticsButtonClose.classList.add('aesthetics__icon-close--hidden');
    }
  });
}
function showButtonWrapBody() {
  wrapBodyButtonShow.addEventListener('click', () => {
    if (wrapBodyButtonClose.classList.contains('wrap-body__icon-close--hidden')) {
      wrapBodyButtonOpen.classList.add('wrap-body__icon-open--hidden');
      wrapBodyButtonClose.classList.remove('wrap-body__icon-close--hidden');
    } else {
      wrapBodyButtonOpen.classList.remove('wrap-body__icon-open--hidden');
      wrapBodyButtonClose.classList.add('wrap-body__icon-close--hidden');
    }
  });
}
function showButtonMassage() {
  massageButtonShow.addEventListener('click', () => {
    if (massageButtonClose.classList.contains('massage__icon-close--hidden')) {
      massageButtonOpen.classList.add('massage__icon-open--hidden');
      massageButtonClose.classList.remove('massage__icon-close--hidden');
    } else {
      massageButtonOpen.classList.remove('massage__icon-open--hidden');
      massageButtonClose.classList.add('massage__icon-close--hidden');
    }
  });
}
function showButtonEpilation() {
  epilationButtonShow.addEventListener('click', () => {
    if (epilationButtonClose.classList.contains('epilation__icon-close--hidden')) {
      epilationButtonOpen.classList.add('epilation__icon-open--hidden');
      epilationButtonClose.classList.remove('epilation__icon-close--hidden');
    } else {
      epilationButtonOpen.classList.remove('epilation__icon-open--hidden');
      epilationButtonClose.classList.add('epilation__icon-close--hidden');
    }
  });
}


export {showButtonText, showButtonThreadLifting, showButtonElos, showButtonAesthetics, showButtonWrapBody, showButtonMassage, showButtonEpilation};
