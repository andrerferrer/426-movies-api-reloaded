// IMPORTS
import { fetchMovies, findMovieNameAndFetch } from './movies';
import { initSortable } from './plugins/init_sortable';

// SELECT ELEMENTS //
const form = document.querySelector('#search-form');

// EVENT LISTENERS && FUNCTION CALLS //
form.addEventListener('submit', findMovieNameAndFetch);


// FUNCTION CALLS
fetchMovies('mad max'); // on 1st page load
initSortable();