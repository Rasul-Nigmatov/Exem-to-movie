// let FETCH_APi = `https://newsapi.org/v2/everything?q=tesla&fromsortBy=publishedAt&apiKey=033a2e9b17c444cea3d9cffd81a7cc9f`;
const elSearchForm = document.querySelector(".js-search-form");
const elInputTitle = elSearchForm.querySelector(".js-search-form__title-input");
const elFormSelect = elSearchForm.querySelector(".js-searching-form_sort-select");
const elButton = document.querySelector(".btn-primary");

const elResult = document.querySelector(".search-result");
// const elBookmarkResult = document.querySelector(".bookmark_movies");
// const elMovieInfoModal = document.querySelector(".movie-info-modal");


const elTemplate = document.querySelector("#movies-template").content;
const elItem = document.querySelector(".movies-template__item");

const arrMovies = [];
const categoriesMovie = [];

const API__MOVIE = `https://www.omdbapi.com/?apikey=7fe333a&s=transformers`
let movieCall = ((api = API__MOVIE) => {
    fetch(api).then(response => {
        return response.json()
    })
    .then(data => {
        elResult.innerHTML = "";
        let newMovieFragment = document.createDocumentFragment();

        data.Search.forEach(movie => {
            let newMovie = elTemplate.cloneNode(true);
        
            $(".card-img-top", newMovie).src = movie.Poster;
            $(".movie-title", newMovie).textContent = movie.Title;
            $(".movie-year", newMovie).textContent = movie.Year;
            $(".movie-type", newMovie).textContent = movie.Type;
            
            newMovieFragment.appendChild(newMovie);
            console.log(); 
        })
        elResult.appendChild(newMovieFragment);
    })
}) 
movieCall(API__MOVIE)


elInputTitle.addEventListener("change", (evt) => {
    evt.preventDefault();
    if(elInputTitle.value !== "") {
        API__MOVIE = `https://www.omdbapi.com/?apikey=7fe333a&s=${elInputTitle.value.trim()}`
    }else {
        API__MOVIE = `https://www.omdbapi.com/?apikey=7fe333a&s=transformers`
    }
    console.log(evt.preventDefault());
})

