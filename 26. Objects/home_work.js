//1. Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), и следующие функции для работы с этим объектом:

// let car_specs = {
//     "manufacturer": "Volkswagen",
//     "model": "Passat B6",
//     "year of car maufacture": 2006,
//     "averege speed (km/h)": 160,
// }

// Функция для вывода на экран информации об автомобиле;

// function showCarSpecs(object) {
//     show_message = "";

//     for (let key in object) {
//         show_message += `${[key]}: ${object[key]} \n`;
//     }

//     alert(show_message);
// }


// showCarSpecs(car_specs);

// Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. 
// Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.

// function calcTime(object, distance) {

//     time = distance / Number(object["averege speed (km/h)"]);
//     time += (time - time % 4) / 4;
//     return time;
// }

// let distance = +prompt("Enter the distance");

// alert(`It takes ${calcTime(car_specs, distance)} hour(s)`);

// 2. Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом: 

// let numerator_1 = +prompt("Enter the numerator of fractional number");
// let denominator_1 = +prompt("Enter the denominator of fractional number");

// let numerator_2 = +prompt("Enter the numerator of fractional number");
// let denominator_2 = +prompt("Enter the denominator of fractional number");

// let fraction = {
//     numerator_1: [numerator_1],
//     denominator_1: [denominator_1],
//     numerator_2: [numerator_2],
//     denominator_2: [denominator_2],
// }

// function calcLeastCommonDivisor(fraction) {
//     denom_biggest = denominator_1 > denominator_2 ? denominator_1 : denominator_2;
//     denom_smallest = denominator_1 > denominator_2 ? denominator_2 : denominator_1;

//     for (i = denom_biggest; ; i++) {
//         if (i % denom_biggest == 0 & i % denom_smallest == 0) {
//             least_com_div = i;
//             return least_com_div;
//         }
//     }
// }

// function showObject(object) {
//     for (key in object) {
//         alert(key);
//         alert(object[key]);
//     }
// }

// showObject(fraction);

// Функция сложения 2-х объектов-дробей;

// function calcFractionsSum(fraction) {
//     if (denominator_1 == denominator_2) {
//         numerator_sum = numerator_1 + numerator_2;
//         denominator_sum = denominator_1;
//     } else {
//         calcLeastCommonDivisor(fraction);
//         numerator_sum = numerator_1 * (least_com_div / denominator_1) + numerator_2 * (least_com_div / denominator_2);
//         denominator_sum = least_com_div;
//     }

//     return numerator_sum, denominator_sum;
// }

// calcFractionsSum(fraction);
// alert(`numerator sum = ${numerator_sum} \ndenominator sum = ${denominator_sum}`);

// Функция вычитания 2-х объектов-дробей;

// function calcFractionsDif(fraction) {
//     if (denominator_1 == denominator_2) {
//         numerator_dif = numerator_1 - numerator_2;
//         denominator_dif = denominator_1;
//     } else {
//         calcLeastCommonDivisor(fraction);
//         numerator_dif = numerator_1 * (least_com_div / denominator_1) - numerator_2 * (least_com_div / denominator_2);
//         denominator_dif = least_com_div;
//     }

//     return numerator_dif, denominator_dif;
// }

// calcFractionsDif(fraction);
// alert(`numerator dif = ${numerator_dif} \ndenominator dif = ${denominator_dif}`);

// Функция умножения 2 - х объектов - дробей;

// function calcFractionsMult(fraction) {
//     numerator_mult = numerator_1 * numerator_2;
//     denominator_mult = denominator_1 * denominator_2;

//     return numerator_mult, denominator_mult;
// }

// calcFractionsMult(fraction);
// alert(`numerator mult = ${numerator_mult} \ndenominator mult = ${denominator_mult}`);

// Функция деления 2-х объектов-дробей;

// function calcFractionsDiv(fraction) {
//     numerator_div = numerator_1 * denominator_2;
//     denominator_div = denominator_1 * numerator_2;
//     return numerator_div, denominator_div;
// }

// calcFractionsDiv(fraction);
// alert(`numerator div = ${numerator_div} \ndenominator div = ${denominator_div}`);

// Функция сокращения объекта-дроби.

// function calcFractionReduction(fraction) {
//     whole_part_reduc = (numerator_1 - numerator_1 % denominator_1) / denominator_1;
//     numerator_reduc = numerator_1 % denominator_1;
//     denominator_reduc = denominator_1;
//     for (i = 1; i <= denominator_reduc; i++) {

//         if (numerator_reduc % i == 0 && denominator_reduc % i == 0) {
//             numerator_reduc = numerator_reduc / i;
//             denominator_reduc = denominator_reduc / i;
//         }
//     }

//     return whole_part_reduc, numerator_reduc, denominator_reduc;
// }

// calcFractionReduction(fraction);
// alert(`whole part = ${whole_part_reduc} \nnumerator reduc = ${numerator_reduc} \ndenominator reduc = ${denominator_reduc}`);

// 3. Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом: 

let h = +prompt("Enter the number of hours");
let m = +prompt("Enter the number of minutes");
let s = +prompt("Enter the number of seconds");

let time = {
    h: [h],
    m: [m],
    s: [s],
}

function transInSec(time) {
    all_in_sec = h * 3600 + m * 60 + s;
    return all_in_sec;
}

function transSecInTime(all_in_sec) {
    h = (all_in_sec - all_in_sec % 3600) / 3600;
    m = ((all_in_sec - h * 3600) - (all_in_sec - h * 3600) % 60) / 60;
    s = all_in_sec % 60;
    return h, m, s;
}

// Функция вывода времени на экран;

// function showTime(time) {
//     alert(`${time.h}:${time.m}:${time.s}`);
// }

// showTime(time);

// Функция изменения времени на переданное количество секунд;

// let add_sec = +prompt("Enter seconds to increase");

// function addSec(time, add_sec) {
//     transInSec(time);
//     all_in_sec += add_sec;
//     return transSecInTime(all_in_sec);
// }

// addSec(time, add_sec);

// Функция изменения времени на переданное количество минут;

// let add_min = +prompt("Enter minutes to increase");

// function addMin(time, add_min) {
//     transInSec(time);
//     add_min = add_min * 60;
//     all_in_sec += add_min;
//     return transSecInTime(all_in_sec);
// }

// addMin(time, add_min);

// Функция изменения времени на переданное количество часов. 

// let add_h = +prompt("Enter hours to increase");

// function addH(time, add_h) {
//     transInSec(time);
//     add_h = add_h * 3600;
//     all_in_sec += add_h;
//     return transSecInTime(all_in_sec);
// }

// addH(time, add_h);

if (m <= 0) {
    alert(`${h}:0${m}:${s}`);
} else if (s <= 0) {
    alert(`${h}:${m}:0${s}`);
} else if (m <= 0 && s <= 0) {
    alert(`${h}:0${m}:0${s}`);
} else {
    alert(`${h}:${m}:${s}`);
}