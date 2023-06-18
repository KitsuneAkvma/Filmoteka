import dotenv from 'dotenv';
dotenv.config()


export const API_KEY = process.env.THEMOVIEDB_KEY;
export const API_URL = `https://api.themoviedb.org/3/trending/`;
export const GENRE_URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=`;

export const popularMovies = async (pageNo = 1) => {
  const movies = await (
    await fetch(`${API_URL}movie/week?api_key=${API_KEY}&page=${pageNo}`)
  ).json();
  const genreIds = await (await fetch(`${GENRE_URL}${API_KEY}`)).json();

  return { movies, genreIds };
};
