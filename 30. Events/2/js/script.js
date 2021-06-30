let num_cells_1 = document.querySelectorAll(".num-cell-1");
let num_cells_2 = document.querySelectorAll(".num-cell-2");
let word_cells = document.querySelectorAll(".word-cell");
const sort_button_1 = document.querySelector(".button-sort-1");
const sort_button_2 = document.querySelector(".button-sort-2");
const sort_button_3 = document.querySelector(".button-sort-3");
const random_button = document.querySelector(".button-random");
const sort_button_all = document.querySelector(".button-sort-all");

random_button.addEventListener("click", () => {
    for (let i = 0; i < num_cells_1.length; i++) {
        const num = Math.round(Math.random() * 100)
        num_cells_1[i].innerHTML = num;
    }

    for (let i = 0; i < num_cells_2.length; i++) {
        const num = Math.round(Math.random() * 100)
        num_cells_2[i].innerHTML = num;
    }
})

sort_button_1.addEventListener("click", () => {
    sortNums1();
})

sort_button_2.addEventListener("click", () => {
    sortNums2();
})

sort_button_3.addEventListener("click", () => {
    sortWords();
})

sort_button_all.addEventListener("click", () => {
    sortNums1();
    sortNums2();
    sortWords();
})


function sortNums1() {
    let nums_1 = [];

    for (let i = 0; i < num_cells_1.length; i++) {
        nums_1.push(num_cells_1[i].innerHTML);
    }

    nums_1.sort(function (a, b) { return a - b; });

    for (let k = 0; k < nums_1.length; k++) {
        num_cells_1[k].innerHTML = nums_1[k];
    }
}

function sortNums2() {
    let nums_2 = [];

    for (let i = 0; i < num_cells_2.length; i++) {
        nums_2.push(num_cells_2[i].innerHTML);
    }

    nums_2.sort(function (a, b) { return a - b; });

    for (let k = 0; k < nums_2.length; k++) {
        num_cells_2[k].innerHTML = nums_2[k];
    }
}

function sortWords() {
    let words = [];

    for (let i = 0; i < word_cells.length; i++) {
        words.push(word_cells[i].innerHTML);
    }

    words.sort();

    for (let k = 0; k < words.length; k++) {
        word_cells[k].innerHTML = words[k];
    }
}
