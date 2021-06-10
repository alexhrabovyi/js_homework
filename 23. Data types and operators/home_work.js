// 1 Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).

// let age = +prompt("Enter your age");

// if (0 < age && age <= 12) {
//     alert("You are child");
// } else if (12 <= age && age < 18) {
//     alert("You are teenager");
// } else if (18 <= age && age < 60) {
//     alert("You are adult");
// } else if (age >= 60) {
//     alert("You are pensioner");
// } else {
//     alert("You are not born yet");
// }

// 2 Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).

// let num = +prompt("Enter a number from 0 to 9");

// switch (num) {
//     case 0:
//         alert(")");
//         break;

//     case 1:
//         alert("!");
//         break;

//     case 2:
//         alert("@");
//         break;

//     case 3:
//         alert("#");
//         break;

//     case 4:
//         alert("$");
//         break;

//     case 5:
//         alert("%");
//         break;

//     case 6:
//         alert("^");
//         break;

//     case 7:
//         alert("&");
//         break;

//     case 8:
//         alert("*");
//         break;

//     case 9:
//         alert("(");
//         break;

//     default:
//         alert("Incorrect number");
// }

// 3 Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.

// let num = +prompt("Enter your number");

// let first_num = (num - num % 100) / 100;
// let second_num = (num % 100 - num % 10) / 10;
// let third_num = num % 10;
// if (first_num == second_num || first_num == third_num || second_num == third_num) {
//     alert("This number contains the same numbers");
// } else {
//     alert("This number does not have the same numbers");
// }

// 4 Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.

// let year = +prompt("Enter a year");

// if (year % 400 == 0 || year % 4 == 0 && year % 100 != 0) {
//     alert("This year is a leap year");
// } else {
//     alert("This year isn`t a leap year");
// }

// 5 Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.

// let num = +prompt("Enter your number");

// first_num = (num - num % 10000) / 10000;
// second_num = (num % 10000 - num % 1000) / 1000;
// fourth_num = (num % 100 - num % 10) / 10;
// fifth_num = num % 10;
// first_num == fifth_num && second_num == fourth_num ? alert("This number is palindrome") : alert("This number isn`t palindrome");

// 6 Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.

// let USD = +prompt("Enter the amount of your USD");
// let currency = prompt("Enter currency");

// switch (currency) {
//     case "EUR":
//         alert(USD * 0.82);
//         break;

//     case "UAH":
//         alert(USD * 27.48);
//         break;

//     case "AZN":
//         alert(USD * 1.70);
//         break;

//     default:
//         alert("Incorrect currency");
// }

// 7 Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.

// let sum = +prompt("Enter purchase amount");

// if (sum >= 200 && sum < 300) {
//     alert(`To pay: ${sum * 0.97}`);
// } else if (sum >= 300 && sum < 500) {
//     alert(`To pay: ${sum * 0.95}`);
// } else if (sum >= 500) {
//     alert(`To pay: ${sum * 0.93}`)
// } else {
//     alert(`To pay: ${sum}`)
// }

// 8 Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.

// let d = +prompt("Enter circumference");
// let p = +prompt("Enter perimeter of a square");
// const PI = 3.14;

// if (d / PI == p / 4) {
//     alert("A circle can be inscribed in a square");
// } else {
//     alert("A circle can`t be inscribed in a square");
// }

// 9 Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.

// let q_1 = +prompt("2 + 2 = ?");
// let q_2 = +prompt("x + 2 = 0, x = ?");
// let q_3 = +prompt("9 / 3 = ?");

// if (q_1 == 4 && q_2 == -2 && q_3 == 3) {
//     points = 6;
// } else if (q_1 == 4 && q_2 == -2 || q_1 == 4 && q_3 == 3 || q_2 == -2 && q_3 == 3) {
//     points = 4;
// } else if (q_1 == 4 || q_2 == -2 || q_3 == 3) {
//     points = 2;
// } else {
//     points = 0;
// }

// alert(points);

// 10 Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите возможность перехода на следующий месяц, год, а также високосный год.



// Сначала вводятся данные, потом переменные, которые будут следующим днем, присваивается значение введенного, потом проверяется вискосный ли год, потом проверяется сколько дней в
// месяце(30 или 31), потом проверяется корректность данных, если введено 29 и больше дней и февраль, но год не високосный, то показывает что неправильно, если введен 31 день, 
// но в месяце 30 дней, то также неправильно, если таких моментов нет, то проверяется просто верность данность (чтоб день был больше 0 и меньше 32 и т.д.), далее уже 
// с учетом конца месяца, года, высокосного года высчитывается следующий день, и если месяц и день меньше 10, или только месяц, или только день, то при выводе даты добавляется нолик (просто для 
// красоты), если такого нет, то просто выводится как есть. 


// let d = +prompt("Enter the day");
// let m = +prompt("Enter the month");
// let y = +prompt("Enter the year");

// let next_d = d;
// let next_m = m;
// let next_y = y;
// // if year is leap, year_type = 1; if not year_type = 0

// if (y % 400 == 0 || y % 4 == 0 && y % 100 != 0) {
//     year_type = 1;
// } else {
//     year_type = 0
// }

// // if in month 30 days, month_type = 0; if 31, month_type = 1

// if (m % 2 == 0) {
//     month_type = 0;
// } else {
//     month_type = 1;
// }

// // -----------

// if (d >= 29 && m == 2 && year_type == 0) {
//     alert("Incorrect date");
// } else if (d == 31 && month_type == 0) {
//     alert("Incorrect date");
// } else if (d <= 31 && d >= 1 && m <= 12 && m >= 1) {

//     if (d == 31) {
//         next_d = 1;
//         next_m = m + 1;
//     } else if (d == 30 && month_type == 0) {
//         next_d = 1;
//         next_m = m + 1
//     } else if (d == 29 && year_type == 1) {
//         next_d = 1;
//         next_m = m + 1
//     } else if (d == 28 && year_type == 0) {
//         next_d = 1;
//         next_m = m + 1
//     } else {
//         next_d = d + 1;
//     }

//     if (next_m == 13) {
//         next_m = 1;
//         next_y = y + 1;
//     }

//     if (next_d < 10 && next_m < 10) {
//         alert(`Next day date is 0${next_d}.0${next_m}.${next_y}`);
//     } else if (next_d < 10) {
//         alert(`Next day date is 0${next_d}.${next_m}.${next_y}`);
//     } else if (next_m < 10) {
//         alert(`Next day date is ${next_d}.0${next_m}.${next_y}`);
//     } else {
//         alert(`Next day date is ${next_d}.${next_m}.${next_y}`);
//     }

// } else {
//     alert("Incorrect date");
// }

