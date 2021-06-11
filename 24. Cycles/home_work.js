// 1 Подсчитать сумму всех чисел в заданном пользователем диапазоне.

let num_1 = +prompt("Enter the first number");
let num_2 = +prompt("Enter the second number");
let sum = 0;

let num_biggest = num_1 > num_2 ? num_1 : num_2;
let num_smallest = num_1 < num_2 ? num_1 : num_2;

for (i = num_smallest; i <= num_biggest; i++) {
    sum += i;
}

alert(sum);

// 2 Запросить 2 числа и найти только наибольший общий делитель.

let num_1 = +prompt("Enter the first number");
let num_2 = +prompt("Enter the second number");
let del;

for (i = 1; i <= num_1 || i <= num_2; i++) {
    if (num_1 % i == 0 && num_2 % i == 0) {
        del = i;
    }
}

alert(del);

// 3 Запросить у пользователя число и вывести все делители этого числа.

let num = +prompt("Enter the number");
let message = "";

for (i = 1; i <= num; i++) {
    if (num % i == 0) {
        message += `${String(i)} `;
    }
}

alert(message);

// 4 Определить количество цифр в введенном числе.

let num = +prompt("Enter your number");
let amount = 1;

for (i = 10; i <= num; i *= 10) {
    if (num % i != 0) {
        amount++;
    }
}

alert(`In your number there are ${amount} digit(s)`);

// 5 Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. 
// При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран. 
// Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.

let pos = 0;
let neg = 0;
let zero = 0;
let even = 0;
let odd = 0;


for (i = 0; i < 10; i++) {
    num = +prompt("Enter your number");

    if (num > 0) {
        pos++;
    } else if (num == 0) {
        zero++;
    } else {
        neg++;
    }

    if (num % 2 == 0) {
        even++;
    } else {
        odd++;
    }
}

alert(`Positive numbers - ${pos}, negative numbers - ${neg}, zeros - ${zero}; even - ${even}, odd - ${odd}.`);

// 6 Зациклить калькулятор. 
// Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример.
// И так до тех пор, пока пользователь не откажется.

for (i = 0; i != 1;) {
    num_1 = +prompt("Enter the first number");
    num_2 = +prompt("Enter the second number");
    sign = prompt("Enter math operation sign");

    switch (sign) {
        case "+":
            alert(`${num_1} + ${num_2} = ${num_1 + num_2}`);
            break;

        case "-":
            alert(`${num_1} - ${num_2} = ${num_1 - num_2}`);
            break;

        case "*":
            alert(`${num_1} * ${num_2} = ${num_1 * num_2}`);
            break;

        case "/":
            alert(`${num_1} / ${num_2} = ${num_1 / num_2}`);
            break;

        default:
            alert("Incorrect sign")
    }

    question = prompt("One more operation? [YES/NO]")

    if (question == "YES") {
        i = 0;
    } else {
        i = 1;
    }
}

// 8 Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK.

for (i = 1; ; i++) {
    switch (i) {
        case 1:
            alert("Monday");
            break;

        case 2:
            alert("Tuesday");
            break;

        case 3:
            alert("Wednesday");
            break;

        case 4:
            alert("Thursday");
            break;

        case 5:
            alert("Friday");
            break;

        case 6:
            alert("Saturday");
            break;

        case 7:
            alert("Sunday");
            break;

        default:
            i = 0;
    }
}

// 9 Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10.

let result = "";

for (i = 2; i <= 9; i++) {
    for (k = 1; k <= 10; k++) {
        result += `${String(i * k)} `;
    }
}

alert(result);

// 10 Игра «Угадай число».Предложить пользователю загадать число от 0 до 100 и отгадать его следующим способом: 
// каждую итерацию цикла делите диапазон чисел пополам, записываете результат в N и спрашиваете у пользователя 
// «Ваше число > N, < N или == N ?».В зависимости от того, что указал пользователь, уменьшаете диапазон.Начальный диапазон от 0 до 100, 
// поделили пополам и получили 50. Если пользователь указал, что его число > 50, то изменили диапазон на от 51 до 100. И так до тех пор, пока пользователь не выберет == N.

