// там надо было еще по нажатию на постер выводить инфу, но апишка даёт только название, постер, и год, собственно выводить нечего, так что я это не добавлял

// переменная с моей апишкой
const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=a3441c09";

// переменные блока, куда помещаются фильмы; блока, куда помещаются избранные фильмы; кнопки назад; кнопки вперед; 
// кнопки поиска; инпута, чтоб можно было брать от туда запрос; темплейта со структурой фильма
const content_block = document.querySelector(".content");
const fav_content_block = document.querySelector(".fav-content");
const prev_button = document.querySelector(".button_prev");
const next_button = document.querySelector(".button_next");
const search_button = document.querySelector(".button_search");
const search_input = document.querySelector(".search__input");
const film_template = document.querySelector("#film_template");

// переменная массива в котором объекты, а в них данные об избранных фильмах, это всё хранится локально
let local_films = JSON.parse(localStorage.getItem("local_films")) || [];;

// глобальная переменная номера страницы
let PAGE_NUM = 1;


async function makeAPIRequest(request, page_num) {
    const response = await fetch(`${API_URL}&s=${request}&page=${page_num}`);
    const result = await response.json();

    return result;
}

// берёт из вне номер страницы, запрос берёт из инпута прямо в этой функции, дальше выполняется функция выше, у которой теперь есть запрос и номер страницы
// и возвращает результат ввиде массива фильмов по указанному запросу и номеру страницы 
async function searchFilms(page_num) {
    let request = search_input.value;

    const result = await makeAPIRequest(request, page_num);

    return result;
}

// функция которая рендерит постер, название, год.Также добавляет боксу всего этого айдишник, который берет с айпишки.Принимает объект данных которые для рендера, а также место,
// куда будут рендериться(контент блок (стандартный) или в блок для избранных фильмов) также возращает кнопку для добавления в избранное (нужно будет позже)
function renderFilm(film_object, place) {

    const filmsWrapper = film_template.content.cloneNode(true);

    const poster = filmsWrapper.querySelector(".content__film__img");
    poster.src = film_object.poster_value;

    const film_name = filmsWrapper.querySelector(".content__film__name");
    film_name.textContent = film_object.title_value;

    const film_year = filmsWrapper.querySelector(".content__film__year");
    film_year.textContent = film_object.year_value;

    const film = filmsWrapper.querySelector(".content__film");
    film.id = film_object.id;

    const fav_button = filmsWrapper.querySelector(".favourite-button");

    place.appendChild(filmsWrapper);

    return fav_button;
}

// Скрывает кнопку поиска(так как эта функция используется при каждом запросе, не факт что в новом запросе будет больше чем 10 результатов), из массива апишки берет объект где найденные фильмы,
// также из апишки берется количество результатов чтоб контролировать кнопки.Циклом перебирается объект с фильмами, создается объект с нужными значениями для того чтобы его добавить в json.
// Дальше рендерятся фильмы в контент блок.Дальше проверяется есть ли такие же фильмы в блоке с избранным, если есть, то кнопка добавить в избранное становится заполненной.Дальше добавляется
// действие на клик для кнопки избранное.На клик: ищется иконка избранного и делается заполненной, добавляется в массив json объект, далее выбранный фильм генерируется в блоке для избранных
// фильмов, далее в сгенерированном фильме ищется кнопка "добавить в избанное" и делается заполненной(так как по умолчанию она не заполненна), также убирается класс с кнопки удалить, так как
// до этого она не нужна.Кнопка удалить: удаляет фильм из блока избранного, ищет этот же фильм в контент блоке и делает кнопку избранного не заполненной, удаляет этот фильм из локального
// хранилища. Также проводится проверка, если есть еще фильмы, то кнопка далее становится видимой
function renderFilms(result) {
    content_block.replaceChildren();

    next_button.classList.add("hidden");

    const films = result.Search;
    const num_of_films = result.totalResults;

    for (i = 0; i < films.length; i++) {

        const local_film = {
            poster_value: films[i].Poster,
            title_value: films[i].Title,
            year_value: films[i].Year,
            id: films[i].imdbID,
        }

        const fav_button = renderFilm(local_film, content_block);

        let star_check = fav_content_block.querySelector(`#${local_film.id}`);

        let icon = fav_button.querySelector(".favourite-button__icon");

        if (star_check) {
            icon.src = "svg/star_active.svg";
        };

        fav_button.addEventListener("click", () => {

            fav_icon = fav_button.querySelector(".favourite-button__icon");
            fav_icon.src = "svg/star_active.svg";

            local_films.push(local_film);
            window.localStorage.setItem("local_films", JSON.stringify(local_films));
            console.log(local_films);

            const fav_button_new = renderFilm(local_film, fav_content_block);
            const fav_icon_new = fav_button_new.querySelector(".favourite-button__icon");
            fav_icon_new.src = "svg/star_active.svg";

            const film = fav_content_block.querySelector(`#${local_film.id}`);

            delete_button = film.querySelector(".delete-button");
            delete_button.classList.remove("hidden");

            delete_button.addEventListener("click", () => {
                fav_content_block.removeChild(film);

                content_film = content_block.querySelector(`#${local_film.id}`);

                const fav_button_icon = content_film.querySelector(".favourite-button__icon");
                fav_button_icon.src = "svg/star_inactive.svg";

                id = local_film.id;
                local_films = local_films.filter((local_film) => local_film.id !== id);
                window.localStorage.setItem("local_films", JSON.stringify(local_films));
            })
        })

        if (num_of_films > 10) {
            next_button.classList.remove("hidden");
        }
    }
}

// отменяет дефолтное поведение, глобальную переменную номера страницы делает равной 1, так как поиск сбрасывает значения, далее идет поиск фильма, рендер результатов, значение страницы 
// возвращается
search_button.addEventListener("click", async (e) => {
    e.preventDefault();

    PAGE_NUM = 1;

    const result = await searchFilms(PAGE_NUM);

    renderFilms(result);

    return PAGE_NUM;
})

// ищет фильм, но страница на 1 больше, рендерит фильмы, делает кнопку назад видимой (логично, так как у нас страница на 1 больше пред.), проверяет есть ли еще результаты, и от этого зависит, 
// будет ли видима кнопка далее, возвращает номер страницы
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

// тоже самое, но на один меньше, если номер страницы = 1, то удаляет кнопку назад, так как эта страница первая
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

// для отображения сохраненных фильмов при перезагрузке, все тоже самое что и у кнопки добавить в избранное на клик
for (local_film of local_films) {

    const fav_button = renderFilm(local_film, fav_content_block);

    fav_icon = fav_button.querySelector(".favourite-button__icon");
    fav_icon.src = "svg/star_active.svg";

    const film = fav_content_block.querySelector(`#${local_film.id}`);

    delete_button = film.querySelector(".delete-button");
    delete_button.classList.remove("hidden");

    delete_button.addEventListener("click", () => {
        fav_content_block.removeChild(film);

        id = film.id;

        local_films = local_films.filter((local_film) => local_film.id !== id);
        window.localStorage.setItem("local_films", JSON.stringify(local_films));

        content_film = content_block.querySelector(`#${local_film.id}`);

        const fav_button_icon = content_film.querySelector(".favourite-button__icon");
        fav_button_icon.src = "svg/star_inactive.svg";
    })
}

