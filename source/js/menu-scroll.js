const menuServices = document.querySelector('.menu__link-services');
const menuContacts = document.querySelector('.menu__link-contacts');
const footerMenuServices = document.querySelector('.footer__link-services');
const footerMenuContacts = document.querySelector('.footer__link-contacts');

const menuScroll = () => {
  if (document.querySelector('.services')) {
    menuServices.addEventListener('click', function () {
      document.querySelector('.services').scrollIntoView({behavior: 'smooth'});
    });
    footerMenuServices.addEventListener('click', function () {
      document.querySelector('.services').scrollIntoView({behavior: 'smooth'});
    });
  }
  if (document.querySelector('.contacts')) {
    menuContacts.addEventListener('click', function () {
      document.querySelector('.contacts').scrollIntoView({behavior: 'smooth'});
    });
    footerMenuContacts.addEventListener('click', function () {
      document.querySelector('.contacts').scrollIntoView({behavior: 'smooth'});
    });
  }
};

export {menuScroll};
