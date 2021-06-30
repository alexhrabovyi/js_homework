const open_button = document.querySelector(".button-box__button");
const modal_wrapper = document.querySelector(".modal-wrapper");
const close_button = document.querySelector(".modal-box__button");

open_button.addEventListener("click", () => {
    modal_wrapper.classList.remove("hidden");
})

close_button.addEventListener("click", () => {
    modal_wrapper.classList.add("hidden");
})