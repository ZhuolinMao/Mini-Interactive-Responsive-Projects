const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1fbe69a3526fffd6756b94db915112e5';
const IMG_PATH = 'https://image.tmdb.org/t/p/w500';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');
const headline = document.getElementById('headline');

getMovies(API_URL, false);

async function getMovies(url, isSearching) {
    const res = await fetch(url);
    const data = await res.json();

    showMovies(data.results, isSearching);
}

function showMovies(movies, isSearching) {
    if(!isSearching){
        headline.innerHTML = "Recent Movies";
    }
    else{
        headline.innerHTML = "Search Results";
    }

    main.innerHTML = '';

    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview, release_date } = movie;

        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');

        movieEl.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                    ${overview}
                <h5>Released on ${release_date}</h5>
            </div>
        `;
        main.appendChild(movieEl);
    })
}

function getClassByRate(vote) {
    if (vote >= 8) {
        return 'green';
    } 
    else if (vote >= 5) {
        return 'orange';
    } 
    else {
        return 'red';
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchTerm = search.value;

    if (searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm, true);
        search.value = '';
    } 
    else {
        window.location.reload();
    }
})