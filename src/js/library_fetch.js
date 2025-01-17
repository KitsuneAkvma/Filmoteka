import { renderMovies } from './cards_rendering';
const api_key = `bf9c4d58b7779ca7f547438ec065a7d2`;
const api_url = `https://api.themoviedb.org/3/movie/`;
import { paginationPlace } from './pagination';

export async function fetchLibrary(ids) {
  let watchedMoviesURL = [];

  for (const movieId of ids) {
    watchedMoviesURL.push(api_url + `${movieId.id}?api_key=${api_key}`);
  }

  const movies = [];

  for (const movie of watchedMoviesURL) {
    let res = await (await fetch(movie)).json();
    let genres = res[`genres`];
    let genresIds = [];
    for (const genre of genres) {
      genresIds.push(genre.id);
    }
    res['genre_ids'] = genresIds;
    movies.push(res);
  }

  renderMovies(0, movies, movies[0]['genres']);
  paginationPlace.innerHTML = '';
}
