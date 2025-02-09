const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query='

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')
const modal = document.getElementById('movie-modal')
const closeModal = document.querySelector('.close-btn')
const modalTitle = document.getElementById('modal-title')
const modalOverview = document.getElementById('modal-overview')
const modalRelease = document.getElementById('modal-release')
const modalRating = document.getElementById('modal-rating')

// Getting initial movies
getMovies(API_URL)

async function getMovies(url) {
    const res = await fetch(url)
    const data = await res.json()

    showMovies(data.results)
}

function showMovies(movies) {
    main.innerHTML = ''

    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview, release_date } = movie

        if (!poster_path) {
            return; // Skip this movie if no image is found
        }

        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')

        movieEl.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="${title}" class="movie-img">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
        `
        movieEl.addEventListener('click', () => showModal(movie)) // Opening modal on click
        main.appendChild(movieEl)
    })
}

function getClassByRate(vote) {
    if(vote >= 8) {
        return 'green'
    } else if(vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
}

function showModal(movie) {
    modalTitle.textContent = movie.title
    modalOverview.textContent = movie.overview
    modalRelease.textContent = movie.release_date
    modalRating.textContent = movie.vote_average

    modal.style.display = 'block'
}

closeModal.addEventListener('click', () => {
    modal.style.display = 'none'
})

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const searchTerm = search.value

    if(searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm)
        search.value = ''
    } else {
        window.location.reload()
    }
})