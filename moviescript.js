const genreDropdown = document.getElementById('genres');

const populateGenreDropdown = (genres) => {
  genres.forEach(genre => {
    const option = document.createElement('option');
    option.value = genre.id;
    option.text = genre.name;
    genreDropdown.appendChild(option);
  });
};

const getSelectedGenre = () => {
  return genreDropdown.value;
};

const getRandomMovie = (movies) => {
  const randomIndex = Math.floor(Math.random() * movies.length);
  return movies[randomIndex];
};

const clearCurrentMovie = () => {
  const movieInfo = document.getElementById('movieInfo');
  movieInfo.innerHTML = '';
};

const displayMovie = (movie) => {
  const movieDiv = document.getElementById('movieInfo');

  const poster = document.createElement('img');
  poster.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  poster.classList.add('moviePoster');

  const title = document.createElement('h2');
  title.innerText = movie.title;

  const overview = document.createElement('p');
  overview.innerText = movie.overview;

  movieDiv.appendChild(title);
  movieDiv.appendChild(poster);
  movieDiv.appendChild(overview);
};