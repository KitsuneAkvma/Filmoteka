import { storageKeyQueue } from './add_to_queue';
import { Notify } from 'notiflix';

const modal = document.querySelector('.modal');
export const storageKeyWatched = 'movies-watched';

modal.addEventListener('click', ev => {
  const targetEl = ev.target;
  if (
    targetEl.nodeName == 'BUTTON' &&
    targetEl.classList.contains('button--watched')
  ) {
    const movieId = modal.querySelector('div[data-movieid]').dataset.movieid;
    const movieTitle = modal.querySelector(
      '.film-details__main-title'
    ).innerHTML;

    let watchedList = JSON.parse(localStorage.getItem(storageKeyWatched));
    if (watchedList == null) {
      watchedList = [];
    }

    let watchedIds = [];
    watchedList.forEach(watchedMovie => {
      watchedIds.push(watchedMovie.id);
    });

    if (watchedIds.includes(movieId)) {
      Notify.warning('You already added the movie to watched');
    } else {
      let queuedList = JSON.parse(localStorage.getItem(storageKeyQueue));
      if (queuedList) {
        if (queuedList.length > 0) {
          let queuedIds = [];
          queuedList.forEach(queuedMovie => {
            queuedIds.push(queuedMovie.id);
          });

          if (queuedIds.includes(movieId)) {
            queuedList.splice(queuedIds.indexOf(movieId), 1);
            localStorage.setItem(storageKeyQueue, JSON.stringify(queuedList));
          }
        }
      }

      const movieInfo = {
        id: movieId,
        title: movieTitle,
      };
      watchedList.push(movieInfo);
      localStorage.setItem(storageKeyWatched, JSON.stringify(watchedList));
    }
  }
});
