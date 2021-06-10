// 1 Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.

// function calcBiggest(num_1, num_2) {
//     if (num_1 > num_2) {
//         return 1;
//     } else if (num_1 < num_2) {
//         return -1;
//     } else {
//         return 0;
//     }
// }

// let num_1 = +prompt("Enter the first number");
// let num_2 = +prompt("Enter the second number");

// alert(calcBiggest(num_1, num_2));

// 2 Написать функцию, которая вычисляет факториал переданного ей числа.

// function calcFactorial(num) {
//     f = 1;
//     for (i = 1; i <= num; i++) {
//         f *= i
//     }
//     return f;
// }

// let num = +prompt("Enter your number");
// alert(calcFactorial(num));

// 3 Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.

// function createString() {
//     result = "";

//     for (i = 0; i < 3; i++) {
//         num = prompt("Enter your number");
//         result += num;
//     }

//     return result;
// }

// alert(createString());

// 4 Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.

// function calcSquare(width, height) {
//     if (height == 0) {
//         square = width * width;
//     } else if (width == 0) {
//         square = height * height;
//     } else {
//         square = width * height;
//     }

//     return square;
// }

// let width = +prompt("Enter width");
// let height = +prompt("Enter height");

// alert(calcSquare(width, height));

// 5 Написать функцию, которая проверяет, является ли переданное ей число совершенным.Совершенное число – это число, равное сумме всех своих собственных делителей.

// function calcPerfectNum(num) {
//     result = 0;

//     for (i = 1; i <= num; i++) {
//         if (num % i == 0) {
//             result += i;
//         }
//     }

//     if (result - num == num) {
//         return "It is a perfect number";
//     } else {
//         return "It isn't a perfect number";
//     }
// }

// let num = +prompt("Enter your number");
// alert(calcPerfectNum(num));

// 6 Написать функцию, которая принимает минимальное и максимальное значения для диапазона, и выводит только те числа из диапазона, 
// которые являются совершенными. Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет. 

// function calcPerfectNumFromRange(num_1, num_2) {

//     num_biggest = num_1 > num_2 ? num_1 : num_2;
//     num_smallest = num_1 > num_2 ? num_2 : num_1;
//     string = "";

//     for (; num_smallest <= num_biggest; num_smallest++) {

//         function calcPerfectNum(num) {
//             dividers = 0;
//             result = 0;

//             for (i = 1; i <= num; i++) {
//                 if (num % i == 0) {
//                     dividers += i;
//                 }
//             }

//             if (dividers - num == num) {
//                 result = dividers - num;
//             }

//             return result;
//         }

//         calcPerfectNum(num_smallest);

//         if (result != 0) {
//             string += `${result} `;
//         }
//     }

//     if (string == 0) {
//         string = "There are no perfect numbers in this range"
//     }

//     return string;
// }

// let num_1 = +prompt("Enter the first number");
// let num_2 = +prompt("Enter the second number");

// alert(calcPerfectNumFromRange(num_1, num_2));

// 7 Написать функцию, которая принимает время(часы, минуты, секунды) и выводит его на экран в формате «чч: мм: сс».
// Если при вызове функции минуты и / или секунды не были переданы, то выводить их как 00.

// function showTime(h = 00, m = 00, s = 00) {

//     if (h > 23 || h < 0 || m > 60 || m < 0 || s > 60 || s < 0) {
//         alert("Incorrect time");
//         return;
//     }

//     if (h < 10) {
//         h = `0${h}`
//     }

//     if (m < 10) {
//         m = `0${m}`
//     }

//     if (s < 10) {
//         s = `0${s}`
//     }

//     alert(`${h}:${m}:${s}`);
// }

// let h = +prompt("Enter the number of hours");
// let m = +prompt("Enter the number of minutes");
// let s = +prompt("Enter the number of seconds");

// showTime(h, m, s);

// 8 Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.

// function calcSec(h, m, s) {
//     return h * 3600 + m * 60 + s;
// }

// let h = +prompt("Enter the number of hours");
// let m = +prompt("Enter the number of minutes");
// let s = +prompt("Enter the number of seconds");

// alert(calcSec(h, m, s));

// 9 Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».

// function calcHMS(x) {
//     h = (x - x % 3600) / 3600;
//     m = ((x - h * 3600) - (x - h * 3600) % 60) / 60;
//     s = x - h * 3600 - m * 60;

//     if (h < 10) {
//         h = `0${h}`
//     }

//     if (m < 10) {
//         m = `0${m}`
//     }

//     if (s < 10) {
//         s = `0${s}`
//     }

//     return `${h}:${m}:${s}`
// }

// let s = +prompt("Enter the number of seconds");
// alert(calcHMS(s));

// 10 Написать функцию, которая считает разницу между датами. Функция принимает 6 параметров, которые описывают 2 даты, 
// и возвращает результат в виде строки «чч:мм:сс». 
// При выполнении задания используйте функции из предыдущих 2-х заданий: 
// сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс»

// function calcDifInTime(h_1 = 0, m_1 = 0, s_1 = 0, h_2 = 0, m_2 = 0, s_2 = 0) {

//     function calcSec(h, m, s) {
//         return h * 3600 + m * 60 + s;
//     }

//     total_sec_1 = calcSec(h_1, m_1, s_1);
//     total_sec_2 = calcSec(h_2, m_2, s_2);

//     dif_sec = total_sec_1 - total_sec_2;

//     function calcHMS(x) {
//         h = (x - x % 3600) / 3600;
//         m = ((x - h * 3600) - (x - h * 3600) % 60) / 60;
//         s = x - h * 3600 - m * 60;

//         if (h < 10) {
//             h = `0${h}`
//         }

//         if (m < 10) {
//             m = `0${m}`
//         }

//         if (s < 10) {
//             s = `0${s}`
//         }

//         return `${h}:${m}:${s}`
//     }

//     return calcHMS(dif_sec);

// }

// let h_1 = +prompt("Enter the number of hours");
// let m_1 = +prompt("Enter the number of minutes");
// let s_1 = +prompt("Enter the number of seconds");
// let h_2 = +prompt("Enter the number of hours");
// let m_2 = +prompt("Enter the number of minutes");
// let s_2 = +prompt("Enter the number of seconds");

// alert(calcDifInTime(h_1, m_1, s_1, h_2, m_2, s_2));