const text = document.querySelector(".text");
const textarea = document.querySelector(".textarea");

document.addEventListener("keydown", function (event) {
    if (event.code === "KeyE" && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();
        text.classList.add("hidden");
        textarea.classList.remove("hidden");
        let p_text = text.textContent;
        textarea.value = p_text;
    } else if (event.code === "Comma" && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();
        text.classList.remove("hidden");
        textarea.classList.add("hidden");
        let p_text = textarea.value;
        text.innerHTML = p_text;
    }
})