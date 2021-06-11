// 1 Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!».

let name = prompt("Enter your name");

alert(`Hello, ${name}!`);

// 2 Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат. Текущий год укажите в коде как константу.

let year = +prompt("Enter your year of birth");
const CURRENT_YEAR = 2020;

alert(`You are ${CURRENT_YEAR - year} years old`);

// 3 Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.

let a = +prompt("Enter side length of a square");

alert(`P = ${a * 4}`);

// 4 Запросите у пользователя радиус окружности и выведите площадь такой окружности.

let r = +prompt("Enter radius of a circle");
const PI = 3.14;

alert(`S = ${PI * r ** 2}`);

// 5 Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться. Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя.

let d = +prompt("Enter a distance between cities");
let h = +prompt("Enter time for which you want to get there");

alert(`Your speed should be ${d / h}`);

// 6 Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в константе.

let USD = +prompt("Enter the amount of your USD");
const EUR = 0.82;

alert(`Your USD = ${USD * EUR} EUR`);

// 7 Пользователь указывает объем флешки в Гб. Программа должна посчитать сколько файлов размером в 820 Мб помещается на флешку.

let gb = +prompt("Enter your flash drive capacity");
const FILE = 820;

alert(`Your flash drive can accomodate ${(gb * 1024 - gb * 1024 % 820) / 820} files`);

// 8 Пользователь вводит сумму денег в кошельке и цену одной шоколадки. Программа выводит сколько шоколадок может купить пользователь и сколько сдачи у него останется.

let sum = +prompt("Enter amount of money in your wallet");
let cost = +prompt("Enter cost of chocolate");

alert(`You can buy ${(sum - sum % cost) / cost} chocolate(s), your change is ${sum % cost}`);

// 9 Запросите у пользователя трехзначное число и выведите его задом наперед. Для решения задачи вам понадобится оператор % (остаток от деления).

let num = +prompt("Enter a number");

let first_num = (num - num % 100) / 100;
let second_num = (num % 100 - num % 10) / 10;
let third_num = num % 10;
alert(third_num * 100 + second_num * 10 + first_num);

// 10 Пользователь вводит сумму вклада в банк на 2 месяца, с процентной ставкой депозита 5% годовых. Вывести сумму начисленных процентов.

let num = +prompt("Enter deposit amount");
const RATE = 1.05;

alert((num * RATE - num) / 12 * 2);

