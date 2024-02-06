const mobileWidthMediaQuery = window.matchMedia('(max-width: 767px)');
const headerContainerMenu = document.querySelector('.header__container-menu');
const headerWrapper = document.querySelector('.header__wrapper');
const headerBurger = document.querySelector('.header__burger');
let menuIsOpened = false;

const checkViewport = () => {
  if (mobileWidthMediaQuery.matches) {
    menuIsOpened = !menuIsOpened;

    if (menuIsOpened) {
      headerContainerMenu.classList.add('open');
      headerWrapper.classList.add('active');
      document.body.style.overflowY = 'hidden';

      return;
    }

    document.body.style.overflowY = 'scroll';
    headerContainerMenu.classList.remove('open');
    headerWrapper.classList.remove('active');
  }
};

export const initMenu = () => {
  headerBurger.addEventListener('click', checkViewport);
};
