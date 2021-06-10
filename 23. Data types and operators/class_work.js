// 1 Запросить у пользователя число и определить, оно положительное, отрицательное или ноль.

// let num = +prompt("Enter your number");

// if (num > 0) {
//     alert("This number is positive");
// } else if (num < 0) {
//     alert("This number is negative");
// } else {
//     alert("This number is zero");
// }

// 2 Запросить у пользователя его возраст и проверить корректность введенных данных (0–120 лет).

// let age = +prompt("Enter your age");

// if (0 < age && age < 120) {
//     alert("Your age is correct");
// } else {
//     alert("Your age is incorrect");
// }

// 3 Запросить у пользователя число и вывести его модуль(| 7 | = 7, | -7 | = 7).

// let num = +prompt("Enter your number");

// alert(Math.abs(num));

// 4 Запросить у пользователя время (часы, минуты, секунды) и проверить корректность введенных данных.

// let h = +prompt("Enter current hours");
// let m = +prompt("Enter current minutes");
// let s = +prompt("Enter current seconds");

// if (h >= 0 && h <= 23 && m >= 0 && m <= 59 && s >= 0 && s <= 59) {
//     alert("Your time is correct");
// } else {
//     alert("Your time is incorrect");
// }

// 5 Запросить координаты точки (x, y) и определить номер четверти, в которую попала эта точка. Необходимо учесть случаи попадания точки на оси X или Y или в начало координат.

// let x = +prompt("Enter your x coordinate");
// let y = +prompt("Enter your y coordinate");

// if (x > 0 && y > 0) {
//     alert("First quarter");
// } else if (x < 0 && y > 0) {
//     alert("Second quarter");
// } else if (x < 0 && y < 0) {
//     alert("Third quarter");
// } else if (x > 0 && y < 0) {
//     alert("Fourth quarter");
// } else {
//     alert("Origin")
// }

// 6 Запросить у пользователя номер месяца и вывести на экран его название.

// let month = +prompt("Enter the month number");

// switch (month) {
//     case 1:
//         alert("January");
//         break;

//     case 2:
//         alert("February");
//         break;

//     case 3:
//         alert("March");
//         break;

//     case 4:
//         alert("April");
//         break;

//     case 5:
//         alert("May");
//         break;

//     case 6:
//         alert("June");
//         break;

//     case 7:
//         alert("July");
//         break;

//     case 8:
//         alert("August");
//         break;

//     case 9:
//         alert("September");
//         break;

//     case 10:
//         alert("October");
//         break;

//     case 11:
//         alert("November");
//         break;

//     case 12:
//         alert("December");
//         break;

//     default:
//         alert("Incorrect number");
// }

// 7 Реализовать калькулятор. Пользователь вводит 2 числа и знак (+ - * /). В зависимости от введенного знака решить пример и вывести результат.

// let num_1 = +prompt("Enter first number");
// let num_2 = +prompt("Enter second number");
// let oper = prompt("Enter mathematical operator");

// switch (oper) {
//     case "+":
//         alert(`${num_1} + ${num_2} = ${num_1 + num_2}`);
//         break;

//     case "-":
//         alert(`${num_1} - ${num_2} = ${num_1 - num_2}`);
//         break;

//     case "*":
//         alert(`${num_1} * ${num_2} = ${num_1 * num_2}`);
//         break;

//     case "/":
//         alert(`${num_1} / ${num_2} = ${num_1 / num_2}`);
//         break;

//     default:
//         alert("Incorrect operator");
// }

// 8 Запросить 2 числа и вывести большее из них.

// let num_1 = +prompt("Enter first number");
// let num_2 = +prompt("Enter second number");

// num_1 > num_2 ? alert(num_1) : alert(num_2);

// 9 Запросить 1 число и проверить, оно кратно 5 или нет.

// let num = +prompt("Enter your number");

// num % 5 == 0 ? alert("Multiple") : alert("Not multiple");

// 10 Запросить у пользователя название планеты. Если пользователь ввел «Земля» или «земля», то вывести «Привет, землянин!», в остальных случаях вывести «Привет, инопланетянин!».

// let planet = prompt("Enter your planet");

// planet == "Земля" || planet == "земля" ? alert("Привет, землянин!") : alert("Привет, инопланетянин!");