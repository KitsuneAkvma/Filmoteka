import { renderModalMovie } from './cards_rendering';

import { modalTeam } from './modal_team';

import { API_KEY } from './main_fetch.js';

import { displayModalLoader } from './loader_spinner';

const MOVIE_URL = `https://api.themoviedb.org/3/movie/`;
const refs = {
  body: document.querySelector('body'),
  backdropModal: document.querySelector('.backdrop'),
  modal: document.querySelector('.modal-content'),
};

refs.body.addEventListener('click', openModal);
export const oneMovieFetch = async movieId => {
  const response = await fetch(`${MOVIE_URL}${movieId}?api_key=${API_KEY}`);
  const movie = await response.json();
  return movie;
};
export function openModal(e) {
  if (e.target.classList.contains('backdrop')) {
    closeModal();
  }
  const id = e.target.getAttribute('data-movieId');
  if (e.target?.closest('svg')?.classList.contains('modal-close')) {
    closeModal();
  } else {
    document.addEventListener('keydown', checkModalKey);

    if (e.target.closest('div').classList.contains('movie-card')) {
      refs.backdropModal.classList.remove('is-hidden');

      displayModalLoader();
      oneMovieFetch(id).then(elem => {
        setTimeout(() => {
          renderModalMovie(elem);
        }, 1000);
      });
    }
    if (e.target?.closest('span')?.classList.contains('team-link')) {
      refs.backdropModal.classList.remove('is-hidden');

      modalTeam();
    }
  }
}

function closeModal() {
  refs.body.style.overflowY = 'scroll';
  refs.backdropModal.classList.add('is-hidden');
  document.removeEventListener('keydown', checkModalKey);

  refs.modal.innerHTML = '';
}

function checkModalKey(e) {
  if (e.code === 'Escape') {
    closeModal();
  }
}
