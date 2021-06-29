const $button_1 = $('#b-1');
const $button_2 = $('#b-2');
const $button_3 = $('#b-3');
const $button_4 = $('#b-4');
const $button_5 = $('#b-5');
const $button_6 = $('#b-6');
const $button_7 = $('#b-7');
const $button_8 = $('#b-8');
const $button_9 = $('#b-9');
const $button_0 = $('#b-0');

const $button_del = $('#del');
const $button_dot = $('#dot');
const $button_res = $('#res');

const $button_plus = $('#plus');
const $button_minus = $('#minus');
const $button_multi = $('#multi');
const $button_div = $('#div');

let $text = $('.display-block__text');

let text_value = "";

$button_1.on("click", function () {
    text_value += "1";
    $text.text(text_value);
})

$button_2.on("click", function () {
    text_value += "2";
    $text.text(text_value);
})

$button_3.on("click", function () {
    text_value += "3";
    $text.text(text_value);
})

$button_4.on("click", function () {
    text_value += "4";
    $text.text(text_value);
})

$button_5.on("click", function () {
    text_value += "5";
    $text.text(text_value);
})

$button_6.on("click", function () {
    text_value += "6";
    $text.text(text_value);
})

$button_7.on("click", function () {
    text_value += "7";
    $text.text(text_value);
})

$button_8.on("click", function () {
    text_value += "8";
    $text.text(text_value);
})

$button_9.on("click", function () {
    text_value += "9";
    $text.text(text_value);
})

$button_0.on("click", function () {
    text_value += "0";
    $text.text(text_value);
})

$button_dot.on("click", function () {
    text_value += ".";
    $text.text(text_value);
})

$button_plus.on("click", function () {
    signCheck();

    if (check_sign != "+" && check_sign != "-" && check_sign != "*" && check_sign != "/") {
        text_value += "+";
        $text.text(text_value);
    }
})

$button_minus.on("click", function () {
    signCheck();

    if (check_sign != "+" && check_sign != "-" && check_sign != "*" && check_sign != "/") {
        text_value += "-";
        $text.text(text_value);
    }
})

$button_multi.on("click", function () {
    signCheck();

    if (check_sign != "+" && check_sign != "-" && check_sign != "*" && check_sign != "/") {
        text_value += "*";
        $text.text(text_value);
    }
})

$button_div.on("click", function () {
    signCheck();

    if (check_sign != "+" && check_sign != "-" && check_sign != "*" && check_sign != "/") {
        text_value += "/";
        $text.text(text_value);
    }
})

$button_del.on("click", function () {
    let del_arr = [];

    del_arr = Array.from(text_value);
    del_arr.pop();

    text_value = "";

    for (let i = 0; i < del_arr.length; i++) {
        text_value += del_arr[i];
    }

    $text.text(text_value);
})

$button_res.on("click", function () {
    num_arr = [];

    num_arr = Array.from(text_value);

    num_1 = "";

    for (let k = 0; k < num_arr.length; k++) {
        if (num_arr[k] != "+" && num_arr[k] != "-" && num_arr[k] != "*" && num_arr[k] != "/") {
            num_1 += num_arr[k]
        } else {
            break;
        }
    }

    num_2 = "";

    for (let i = num_arr.length - 1; i >= 0; i--) {
        if (num_arr[i] != "+" && num_arr[i] != "-" && num_arr[i] != "*" && num_arr[i] != "/") {
            num_2 += num_arr[i];
        } else {
            break;
        }
    }

    num_2 = num_2.split("").reverse().join("");

    sign = "";

    for (let j = 0; j < num_arr.length; j++) {
        if (num_arr[j] === "+" || num_arr[j] === "-" || num_arr[j] === "*" || num_arr[j] === "/") {
            sign = num_arr[j];
            break;
        }
    }

    if (sign === "+") {
        result = Number(num_1) + Number(num_2);
    } else if (sign === "-") {
        result = Number(num_1) - Number(num_2);
    } else if (sign === "*") {
        result = Number(num_1) * Number(num_2);
    } else if (sign === "/") {
        result = Number(num_1) / Number(num_2);
    }

    text_value = "";
    text_value = result;

    $text.text(text_value);
})

function signCheck() {
    arr_signs = [];

    arr_signs = Array.from(text_value);

    check_sign = "";

    for (i = 0; i < arr_signs.length; i++) {
        if (arr_signs[i] === "+" || arr_signs[i] === "-" || arr_signs[i] === "*" || arr_signs[i] === "/") {
            check_sign = arr_signs[i];
            break;
        }
    }
}