const button = document.querySelector(".button");
const red_circle = document.querySelector(".red-circle");
const yellow_circle = document.querySelector(".yellow-circle");
const green_circle = document.querySelector(".green-circle");

button.addEventListener("click", () => {

    if (red_circle.classList.contains("red-off") && yellow_circle.classList.contains("yellow-off") && green_circle.classList.contains("green-off")) {
        red_circle.classList.remove("red-off");
        red_circle.classList.add("red-on");
    } else if (red_circle.classList.contains("red-on") && yellow_circle.classList.contains("yellow-off") && green_circle.classList.contains("green-off")) {
        red_circle.classList.remove("red-on");
        red_circle.classList.add("red-off");
        yellow_circle.classList.remove("yellow-off");
        yellow_circle.classList.add("yellow-on");
    } else if (red_circle.classList.contains("red-off") && yellow_circle.classList.contains("yellow-on") && green_circle.classList.contains("green-off")) {
        yellow_circle.classList.remove("yellow-on");
        yellow_circle.classList.add("yellow-off");
        green_circle.classList.remove("green-off");
        green_circle.classList.add("green-on");
    } else {
        green_circle.classList.remove("green-on");
        green_circle.classList.add("green-off");
        red_circle.classList.remove("red-off");
        red_circle.classList.add("red-on");
    }
})
