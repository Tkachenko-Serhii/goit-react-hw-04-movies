const BASE_URL = `https://api.themoviedb.org/3`;
const API_KEY = `0e03d2359202713e59ab7c25960ab620`;
const TRENDING_FILMS = `${BASE_URL}/trending/all/day?api_key=${API_KEY}`;
const SEARCH_FILMS = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&include_adult=false`;

export function getTrending() {
  const url = `${TRENDING_FILMS}&page=1`;
  return fetch(url).then((res) => res.json());
}

export function searchFilms(searchQuery) {
  return fetch(`${SEARCH_FILMS}&query=${searchQuery}&page=1`).then((res) =>
    res.json()
  );
}

export function getMovieDetails(id) {
  return fetch(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
  ).then((res) => res.json());
}

export function getMovieCredits(id) {
  return fetch(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  ).then((res) => res.json());
}

export function getMovieReviews(id) {
  return fetch(
    `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  ).then((res) => res.json());
}
