const gallery = document.getElementById('gallery');
const modal = document.getElementById('myModal');
const modalImg = document.getElementById('modalImg');
const closeBtn = document.querySelector('.modal__close');

export const initModalGallery = () => {

  gallery.addEventListener('click', function (event) {

    const target = event.target;
    if (target.tagName === 'IMG') {
      const fullSizeSrc = target.getAttribute('data-fullsize');
      if (fullSizeSrc) {
        openModal(fullSizeSrc);
      }
    }
  });

  closeBtn.addEventListener('click', closeModal);

  window.addEventListener('click', function (event) {

    if (event.target === modal) {
      closeModal();
    }
  });

  function openModal(imageSrc) {
    modal.style.display = 'block';
    modalImg.src = imageSrc;
  }

  function closeModal() {
    modal.style.display = 'none';
  }
};
