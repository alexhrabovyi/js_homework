// 1 Написать функцию, которая принимает 2 числа и возвращает меньшее из них.

// function calcSmaller(x, y) {
//     return x > y ? x : y;
// }

// let num_1 = +prompt("Enter the first number");
// let num_2 = +prompt("Enter the second number");

// alert(calcSmaller(num_1, num_2));

// Function Declaration

// 2 Написать функцию, которая возводит переданное число в указанную степень.

// const getPower = function (num, power) {
//     return num ** power;
// };

// let num = +prompt("Enter your number");
// let power = +prompt("Enter the degree to which the number should be raised");

// alert(getPower(num, power));

// Function Expression

// 3 Написать функцию, которая принимает 2 числа и знак  (+ - * /), считает пример и возвращает результат.

// function calcSomething(num_1, num_2, sign) {
//     num_1 = +prompt("Enter the first number");
//     num_2 = +prompt("Enter the second number");
//     sign = prompt("Enter the math operator");

//     switch (sign) {
//         case "+":
//             alert(`${num_1} + ${num_2} = ${num_1 + num_2}`);
//             break;

//         case "-":
//             alert(`${num_1} - ${num_2} = ${num_1 - num_2}`);
//             break;

//         case "*":
//             alert(`${num_1} * ${num_2} = ${num_1 * num_2}`);
//             break;

//         case "/":
//             alert(`${num_1} / ${num_2} = ${num_1 / num_2}`);
//             break;
//     }
// }

// calcSomething();

// 4 Написать функцию, которая проверяет, является ли переданное ей число простым.

// function checkPrime(num) {
//     for (i = 1; i <= num; i++) {
//         if (num % i == 0 && i != num && i != 1) {
//             result = "Not a prime number";
//             break;
//         } else {
//             result = "It is a prime number";
//         }
//     }

//     return result;
// }

// let num = +prompt("Enter your number");
// checkPrime(num);
// alert(result);

// 5 Написать функцию, которая принимает число и выводит таблицу умножения для этого числа. Вызовите функцию для всех чисел от 2 до 9.

// function createMultiplicationTable(num) {
//     table = "";

//     for (i = 2; i < 10; i++) {
//         result = `${num} * ${i} = ${num * i};\n`;
//         table += String(result);
//     }

//     return table;
// }

// let num = +prompt("Enter your number");
// createMultiplicationTable(num);
// alert(table);

// 6 Написать функцию, которая реализует работу оператора %. Функция принимает 2 параметра и возвращает остаток от деления первого параметра на второй. 
// В функции использовать только + - * /, оператор % не использовать.

// 7 Написать функцию, которая принимает от 1 до 5 чисел и возвращает их сумму.

// function calcSum() {
//     sum = 0;

//     for (i = 0; i < 5; i++) {
//         num = prompt("Enter your number or STOP to stop calculating");

//         if (num == "STOP") {
//             break;
//         }

//         sum += +num;
//     }

//     return sum;
// }

// calcSum();
// alert(sum);

// 8 Написать функцию, которая принимает от 1 до 5 чисел и возвращает большее из них.

// function calcBiggest() {
//     num_service = null;

//     for (i = 0; i < 5; i++) {
//         num = prompt("Enter your number or STOP to stop calculating");

//         if (num == "STOP") {
//             break;
//         }

//         num_biggest = num_service > +num ? num_service : +num;

//         num_service = +num;
//     }

//     return num_biggest;
// }

// calcBiggest();

// alert(num_biggest);

// 9 Написать функцию, которая выводит все четные или нечетные числа, в указанном пользователем диапазоне. 
// Какие числа выводить, определяется третьим параметром типа bool (true – четные, false – нечетные).

// function calcEvenOrOdd(num_1, num_2, type) {
//     num_biggest = num_1 > num_2 ? num_1 : num_2;
//     num_smallset = num_1 > num_2 ? num_2 : num_1;
//     result_even = "";
//     result_odd = "";

//     for (; num_smallset <= num_biggest; num_smallset++) {

//         if (num_smallset % 2 == 0) {
//             result_even += `${String(num_smallset)} `;
//         } else {
//             result_odd += `${String(num_smallset)} `;
//         }
//     }

//     if (type == "EVEN") {
//         return result_even;
//     } else if (type == "ODD") {
//         return result_odd;
//     } else {
//         return "Incorrect type of calculating";
//     }
// }

// let num_1 = +prompt("Enter the first number");
// let num_2 = +prompt("Enter the second number");
// let type = prompt("Enter the type of calculating [EVEN/ODD]");

// alert(calcEvenOrOdd(num_1, num_2, type));

// 10 Написать функцию, которая принимает дату (день, месяц, год) и возвращает дату следующего дня в виде строки  «дд.мм.гггг». 
// Проверку на високосный год желательно написать отдельной функцией.

// Сначала вводятся данные, потом переменные, которые будут следующим днем, присваивается значение введенного, потом проверяется вискосный ли год, потом проверяется сколько дней в
// месяце(30 или 31), потом проверяется корректность данных, если введено 29 и больше дней и февраль, но год не високосный, то показывает что неправильно, если введен 31 день, 
// но в месяце 30 дней, то также неправильно, если таких моментов нет, то проверяется просто верность данность (чтоб день был больше 0 и меньше 32 и т.д.), далее уже 
// с учетом конца месяца, года, высокосного года высчитывается следующий день, и если месяц и день меньше 10, или только месяц, или только день, то при выводе даты добавляется нолик (просто для 
// красоты), если такого нет, то просто выводится как есть. 

// if year is leap, year_type = 1; if not year_type = 0
// if in month 30 days, month_type = 0; if 31, month_type = 1

// function checkYearType(y) {
//     if (y % 400 == 0 || y % 4 == 0 && y % 100 != 0) {
//         year_type = 1;
//     } else {
//         year_type = 0
//     }

//     return year_type;
// }

// function checkMonthType(m) {
//     if (m % 2 == 0) {
//         month_type = 0;
//     } else {
//         month_type = 1;
//     }

//     return month_type;
// }

// function calcNextDay(d, m, y) {
//     next_d = d;
//     next_m = m;
//     next_y = y;

//     checkYearType(y);
//     checkMonthType(m);

//     if (d >= 29 && m == 2 && year_type == 0) {
//         alert("Incorrect date");
//     } else if (d == 31 && month_type == 0) {
//         alert("Incorrect date");
//     } else if (d <= 31 && d >= 1 && m <= 12 && m >= 1) {

//         if (d == 31) {
//             next_d = 1;
//             next_m = m + 1;
//         } else if (d == 30 && month_type == 0) {
//             next_d = 1;
//             next_m = m + 1
//         } else if (d == 29 && year_type == 1) {
//             next_d = 1;
//             next_m = m + 1
//         } else if (d == 28 && year_type == 0) {
//             next_d = 1;
//             next_m = m + 1
//         } else {
//             next_d = d + 1;
//         }

//         if (next_m == 13) {
//             next_m = 1;
//             next_y = y + 1;
//         }

//         if (next_d < 10 && next_m < 10) {
//             alert(`Next day date is 0${next_d}.0${next_m}.${next_y}`);
//         } else if (next_d < 10) {
//             alert(`Next day date is 0${next_d}.${next_m}.${next_y}`);
//         } else if (next_m < 10) {
//             alert(`Next day date is ${next_d}.0${next_m}.${next_y}`);
//         } else {
//             alert(`Next day date is ${next_d}.${next_m}.${next_y}`);
//         }

//     } else {
//         alert("Incorrect date");
//     }

// }

// let d = +prompt("Enter the day");
// let m = +prompt("Enter the month");
// let y = +prompt("Enter the year");

// calcNextDay(d, m, y);