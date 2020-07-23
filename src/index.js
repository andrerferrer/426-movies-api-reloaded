// SELECT ELEMENTS //
const form = document.querySelector('#search-form');

// DECLARE FUNCTIONS //
const insertMovies = (data) => {
  const movies = data.Search;
  const list = document.querySelector('#results');
  list.innerHTML = '';
  movies.forEach((movie) => {
    const movieHTML = `<li>
      <img src="${movie.Poster}" alt="" />
      <p>${movie.Title}</p>
    </li>`;
    list.insertAdjacentHTML('beforeend', movieHTML);
  });
};

const fetchMovies = (query) => {
  fetch(`http://www.omdbapi.com/?s=${query}&apikey=adf1f2d7`)
    .then(response => response.json())
    .then(insertMovies);
};

// EVENT LISTENERS && FUNCTION CALLS //
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const input = document.querySelector('#search-input');
  fetchMovies(input.value);
});

fetchMovies('mad max'); // on 1st page load
