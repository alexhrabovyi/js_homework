// 1 Вывести # столько раз, сколько указал пользователь.

// let num = +prompt("Enter the number of repetitions");
// let i = 0;

// while (i <= num) {
//     alert("#");
//     i++;
// }

// 2 Пользователь ввел число, а на экран вывелись все числа от введенного до 0.

// let num = +prompt("Enter your number");

// while (num >= 0) {
//     alert(num);
//     num--;
// }

// 3 Запросить число и степень. Возвести число в указанную степень и вывести результат.

// let num = +prompt("Enter your number");
// let pow = +prompt("Enter power");
// let a = num;
// let i = 1;

// while (i < pow) {
//     a *= num;
//     i++;
// }

// alert(a);

// 4 Запросить 2 числа и найти все общие делители.

// let num_1 = +prompt("Enter the first number");
// let num_2 = +prompt("Enter the second number");
// let i = 1;

// while (i <= num_1 || i <= num_2) {
//     if (num_1 % i == 0 && num_2 % i == 0) {
//         alert(i);
//     }
//     i++;
// }

// 5 Посчитать факториал введенного пользователем числа.

// let num = +prompt("Enter your number");
// let i = 1;
// let f = 1;

// while (i <= num) {
//     f = f * i;
//     i++;
// }

// alert(f);

// 6 Предлагать пользователю решить пример 2 + 2 * 2 до тех пор, пока он не решит его правильно.

// do {
//     num = +prompt("2 + 2 * 2 = ?");
// } while (num != 6);

// 7 Делить число 1000 на 2 до тех пор, пока не получится число меньше 50. Вывести это число и сколько делений произвели.

// let num = 1000;
// let i = 0;

// do {
//     num = num / 2;
//     i++;
// } while (num > 50);

// alert(`Dividend = ${num}, number of divisions = ${i}`);

// 8 Вывести все числа от 1 до 100, которые кратные указанному пользователем числу.

// let num = +prompt("Enter your number");

// for (i = 1; i <= 100; i++) {
//     if (i % num == 0) {
//         alert(i);
//     }
// }

// 9 Вывести каждый 4 - й элемент из указанного пользователем диапазона.Пользователь указывает минимальное и максимальное значения диапазона.

// let num_1 = +prompt("Enter the first number");
// let num_2 = +prompt("Enter the second number")

// num_smallest = num_1 < num_2 ? num_1 : num_2;
// num_biggest = num_1 > num_2 ? num_1 : num_2;

// let i = num_smallest;

// for (i = i + 4; i <= num_biggest; i = i + 4) {
//     alert(i);
// }


// 10 Запросить число и проверить, простое ли оно. Простое число делится без остатка только на себя и на единицу.

// let num = +prompt("Enter your number");
// let i;
// for (i = 1; i <= num; i++) {
//     if (num % i == 0 && i != num && i != 1) {
//         break;
//     }
// }

// if (i - 1 == num) {
//     alert("Prime number");
// } else {
//     alert("Complex number");
// }