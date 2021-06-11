// 1 Запросите у пользователя число, возведите это число во 2-ю степень и выведите на экран.

// let num = +prompt("Enter the number");

// alert(num ** 2);

// 2 Запросите у пользователя 2 числа и выведите среднее арифметическое этих чисел.

// let num_1 = +prompt("Enter the first number");
// let num_2 = +prompt("Enter the second number");

// alert((num_1 + num_2) / 2);

// 3 Запросите у пользователя длину стороны квадрата и выведите площадь такого квадрата.

// let length = +prompt("Enter the side length of a square");

// alert(length * length);

// 4 Реализуйте конвертор из километров в мили (пользователь вводит километры, программа выводит мили). 1 км = 0,621371 миль. Это значение укажите в коде как константу.

// let km = +prompt("Enter kilometers");
// const mile = 0.621371;

// alert(`${km * mile} miles`);

// 5 Реализуйте калькулятор. Пользователь вводит два числа, а программа выводит результаты действий + - * / между этими числами.

// let num_1 = +prompt("Enter the first number");
// let num_2 = +prompt("Enter the second number");

// alert(`+ = ${num_1 + num_2}, - = ${num_1 - num_2}, * = ${num_1 * num_2}, / = ${num_1 / num_2}`)

// 6 Пользователь вводит значения a и b для формулы a * x + b = 0, а программа считает и выводит значение x.

// let num_1 = +prompt("Enter the first number");
// let num_2 = +prompt("Enter the second number");

// alert(`x = ${(0 - num_2) / num_1}`);

// 7 Запросите у пользователя текущее время (часы и минуты) и выведите, сколько часов и минут осталось до следующего дня.

// let h = +prompt("Enter hours");
// let m = +prompt("Enter minutes");

// alert(`Until the next day left ${((1440 - h * 60 - m) - (1440 - h * 60 - m) % 60) / 60}:${(1440 - h * 60 - m) % 60}`);

// 8 Запросите у пользователя трехзначное число и выведите вторую цифру этого числа. Для решения задачи используйте оператор % (остаток от деления).

// let num = +prompt("Enter the number");

// alert((num % 100 - (num % 10)) / 10);

// 9 Запросите у пользователя пятизначное число и переместите последнюю цифру в начало (из числа 12345 должно получиться число 51234).

// let num = +prompt("Enter the number");

// let first_num = (num - num % 10000) / 10000;
// let second_num = (num % 10000 - num % 1000) / 1000;
// let third_num = (num % 1000 - num % 100) / 100;
// let fourth_num = (num % 100 - num % 10) / 10;
// let last_num = num % 10;
// alert(last_num * 10000 + first_num * 1000 + second_num * 100 + third_num * 10 + fourth_num);

// 10 Зарплата работника составляет $250 + 10% от продаж. Запросите общую сумму продаж за месяц и посчитайте зарплату.

// let sum = +prompt("Enter your total sales per month");

// alert(250 + sum * 0.1);