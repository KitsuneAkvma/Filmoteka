import logo_white from '/public/svg/logo.svg';
import { paginationPlace } from './movie_search';

const gallery = document.querySelector('.film-cards');
const modalContent = document.querySelector('.modal');

const loader = `<div class="loader"><img
  class="loader__img"
  src="${logo_white}"
  alt="logo loader spinner"
/>
</div>`;
export const displayGalleryLoader = () => {
  gallery.classList.add('film-cards--loader');
  paginationPlace.style.display = 'none';
  gallery.innerHTML = loader;
};

export const hideGalleryLoader = () => {
  gallery.classList.remove('film-cards--loader');
  paginationPlace.style.display = 'flex';
};

export const displayModalLoader = () => {
  modalContent.classList.add('modal-content--loader');
  modalContent.innerHTML = loader;
};

export const hideModalLoader = () => {
  modalContent.classList.remove('modal-content--loader');
};
