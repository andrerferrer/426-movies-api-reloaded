const list = document.querySelector('#results');

const insertMovies = (json) => {
  json.Search.forEach((result) => {
    const movie = `
    <li>
      <img src="${result.Poster}" alt="" />
      <p>${result.Title}</p>
    </li>`;
    list.insertAdjacentHTML('beforeend', movie);
  });
};

const fetchMovies = (query) => {
  fetch(`http://www.omdbapi.com/?s=${query}&apikey=adf1f2d7`)
    .then(response => response.json())
    .then(insertMovies);
};

const updateResultsList = (event) => {
  event.preventDefault();
  list.innerHTML = '';
  const input = document.querySelector('#search-input');
  fetchMovies(input.value);
}

export { fetchMovies, updateResultsList }
