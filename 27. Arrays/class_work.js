// Создать массив из 10 случайных чисел и написать несколько функций для работы с ним.

// const numbers = [];

// for (i = 0; i < 10; i++) {
//     const randomNumber = Math.round(Math.random() * 100);
//     numbers.push(randomNumber);
// }

// console.log(numbers);

// 1) Функция принимает массив и выводит его на экран. 

// function showArray(arr) {
//     message = "";

//     for (elem of arr) {
//         message += `${elem}; `
//     }

//     alert(message);
// }

// showArray(numbers);

// 2) Функция принимает массив и выводит только четные элементы. 

// function showEven(arr) {
//     message = "";

//     for (elem of arr) {
//         if (elem % 2 == 0) {
//             message += `${elem}; `;
//         }
//     }

//     alert(message);
// }

// showEven(numbers);

// 3) Функция принимает массив и возвращает сумму всех элементов массива.

// function calcSum(arr) {
//     sum = 0;

//     for (elem of arr) {
//         sum += elem;
//     }

//     return sum;
// }

// alert(calcSum(numbers));

// 4) Функция принимает массив и возвращает его максимальный элемент. 

// function calcMax(arr) {
//     max = 0;

//     for (elem of arr) {
//         if (elem > max) {
//             max = elem;
//         }
//     }

//     return max;
// }

// alert(calcMax(numbers));

// 5) Функция добавления нового элемента в массив по указанному индексу. 

// function addByIndex(arr, index, elem) {
//     arr.splice(index, 0, elem);
// }

// let index = +prompt("Enter the index of new element");
// let element = +prompt("Enter the new element");

// addByIndex(numbers, index, element);

// showArray(numbers);

// 6) Функция удаления элемента из массива по указанному индексу. 

// function removeElement(arr, index) {
//     arr.splice(index, 1);
// }

// let index = +prompt("Enter the index of element");

// removeElement(numbers, index);

// alert(numbers);




// Создать еще один массив из 5 случайных чисел и написать следующие функции

// 1) Функция принимает 2 массива и возвращает новый массив, в котором собраны все элементы из двух массивов без повторений.

// function union(arr1, arr2) {
//     const result = [];
//     const concatenated = arr1.concat(arr2);

//     for (const item of concatenated) {
//         if (!result.includes(item)) {
//             result.push(item);
//         }
//     }

//     return concatenated;
// }

// 2) Функция принимает 2 массива и возвращает новый массив, в котором собраны общие элементы(то есть элементы, которые встречаются и в первом и во втором массивах) без повторений. 

// function intersection(arr1, arr2) {
//     const united = union(arr1, arr2);
//     return united.filter(item => arr1.includes(item) && arr2.includes(item));
// }

// 3) Функция принимает 2 массива и возвращает новый массив, в котором собраны все элементы из первого массива, которых нет во втором массиве. 

// function differenc(arr1, arr2) {
//     return arr1.filter((elem) => !arr2.includes(elem));
// }





// Создать массив фруктов и отсортировать его по алфавиту. Написать следующие функции. 

// const fruits = ["Apple", "Pear", "Apricot", "Orange", "Peach"];

// fruits.sort();

// Вывод на экран с помощью document.write() в виде списка (с помощью тегов ul и li). 

// function printList(list) {
//     document.write("<ul>");
//     for (let item of list) {
//         document.write(`<li>${item}</li>`);
//     }
//     document.write("</ul>");
// }

// printList(fruits);

// Поиск фрукта в массиве. Функция принимает название фрукта и возвращает индекс найденного элемента или -1, если не найден. Поиск должен быть не регистрозависимым.

// function findFruitIndex(name) {
//     return fruits.findIndex((fruit) => fruit.toLowerCase() === name.toLowerCase());
// }

// let name = prompt("Enter the name of element that you are searching");
// console.log(findFruitIndex(name));