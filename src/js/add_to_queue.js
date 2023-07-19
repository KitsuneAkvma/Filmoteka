import { storageKeyWatched } from './add_to_watched';
import { Notify } from 'notiflix';

const modal = document.querySelector('.modal');
export const storageKeyQueue = 'movies-queued';

modal.addEventListener('click', ev => {
  const targetEl = ev.target;
  if (
    targetEl.nodeName == 'BUTTON' &&
    targetEl.classList.contains('button--queue')
  ) {
    const movieId = modal.querySelector('div[data-movieid]').dataset.movieid;
    const movieTitle = modal.querySelector(
      '.film-details__main-title'
    ).innerHTML;

    let queuedList = JSON.parse(localStorage.getItem(storageKeyQueue));
    if (queuedList == null) {
      queuedList = [];
    }

    let queuedIds = [];
    queuedList.forEach(queuedMovie => {
      queuedIds.push(queuedMovie.id);
    });

    if (queuedIds.includes(movieId)) {
      Notify.warning('You already added the movie to queued');
    } else {
      let watchedList = JSON.parse(localStorage.getItem(storageKeyWatched));
      if (watchedList) {
        if (watchedList.length > 0) {
          let watchedIds = [];
          watchedList.forEach(watchedMovie => {
            watchedIds.push(watchedMovie.id);
          });

          if (watchedIds.includes(movieId)) {
            watchedList.splice(watchedIds.indexOf(movieId), 1);
            localStorage.setItem(
              storageKeyWatched,
              JSON.stringify(watchedList)
            );
          }
        }
      }

      const movieInfo = {
        id: movieId,
        title: movieTitle,
      };
      queuedList.push(movieInfo);
      localStorage.setItem(storageKeyQueue, JSON.stringify(queuedList));
    }
  }
});
