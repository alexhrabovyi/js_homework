// там надо было еще по нажатию на постер выводить инфу, но апишка даёт только название, постер, и год, собственно выводить нечего, так что я это не добавлял

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=a3441c09";

const content_block = document.querySelector(".content");
const prev_button = document.querySelector(".button_prev");
const next_button = document.querySelector(".button_next");
const search_button = document.querySelector(".button_search");
const search_input = document.querySelector(".search__input");
const film_template = document.querySelector("#film_template");

let PAGE_NUM = 1;

async function makeAPIRequest(request, page_num) {
    const response = await fetch(`${API_URL}&s=${request}&page=${page_num}`);
    const result = await response.json();

    return result;
}

async function searchFilms(page_num) {
    let request = search_input.value;

    const result = await makeAPIRequest(request, page_num);

    return result;
}

function renderFilms(result) {
    content_block.replaceChildren();

    next_button.classList.add("hidden");

    const films = result.Search;
    const num_of_films = result.totalResults;

    console.log(films);
    console.log(num_of_films);

    for (i = 0; i < films.length; i++) {
        const filmsWrapper = film_template.content.cloneNode(true);

        const poster = filmsWrapper.querySelector(".content__film__img");
        poster.src = films[i].Poster;

        const film_name = filmsWrapper.querySelector(".content__film__name");
        film_name.textContent = films[i].Title;

        const film_year = filmsWrapper.querySelector(".content__film__year");
        film_year.textContent = films[i].Year;

        content_block.appendChild(filmsWrapper);
    }

    if (num_of_films > 10) {
        next_button.classList.remove("hidden");
    }
}


search_button.addEventListener("click", async (e) => {
    e.preventDefault();

    PAGE_NUM = 1;

    const result = await searchFilms(PAGE_NUM);

    renderFilms(result);

    return PAGE_NUM;
})

next_button.addEventListener("click", async (e) => {
    e.preventDefault();

    ++PAGE_NUM;

    const result = await searchFilms(PAGE_NUM);

    renderFilms(result);

    prev_button.classList.remove("hidden");

    if ((result.totalResults - PAGE_NUM * 10) < 10) {
        next_button.classList.add("hidden");
    }

    return PAGE_NUM;
})


prev_button.addEventListener("click", async (e) => {

    e.preventDefault();

    --PAGE_NUM;

    const result = await searchFilms(PAGE_NUM);

    renderFilms(result);

    if (PAGE_NUM === 1) {
        prev_button.classList.add("hidden");
    }

    return PAGE_NUM;
})