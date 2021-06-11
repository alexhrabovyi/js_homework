// let x1 = +prompt("Enter x1 coordinate");
// let y1 = +prompt("Enter y1 coordinate");
// let x2 = +prompt("Enter x2 coordinate");
// let y2 = +prompt("Enter y2 coordinate");

// const rectangle = {
//     "x1 coordinate": Number([x1]),
//     "y1 coordinate": Number([y1]),
//     "x2 coordinate": Number([x2]),
//     "y2 coordinate": Number([y2]),
// }

// 1 Функция принимает объект - прямоугольник и выводит информацию о нем(где какая точка расположена).

// function showCoordinates(object) {
//     result = "";

//     for (key in object) {
//         result += `${(key)}: ${object[key]}; \n`
//     }

//     return result;
// }

// alert(showCoordinates(rectangle));

// 2 Функция принимает объект-прямоугольник и возвращает его ширину. 

// function calcWidth(rectangle) {
//     x_biggest = rectangle["x1 coordinate"] > rectangle["x2 coordinate"] ? rectangle["x1 coordinate"] : rectangle["x2 coordinate"];
//     x_smallest = rectangle["x1 coordinate"] > rectangle["x2 coordinate"] ? rectangle["x2 coordinate"] : rectangle["x1 coordinate"];

//     width = x_biggest - x_smallest;

//     return width;
// }

// alert(calcWidth(rectangle));

// 3 Функция принимает объект-прямоугольник и возвращает его высоту.

// function calcHeight(rectangle) {
//     y_biggest = rectangle["y1 coordinate"] > rectangle["y2 coordinate"] ? rectangle["y1 coordinate"] : rectangle["y2 coordinate"];
//     y_smallest = rectangle["y1 coordinate"] > rectangle["y2 coordinate"] ? rectangle["y2 coordinate"] : rectangle["y1 coordinate"];

//     height = y_biggest - y_smallest;

//     return height;
// }

// alert(calcHeight(rectangle));

// 4 Функция принимает объект-прямоугольник и возвращает его площадь

// function calcWidth(rectangle) {
//     x_biggest = rectangle["x1 coordinate"] > rectangle["x2 coordinate"] ? rectangle["x1 coordinate"] : rectangle["x2 coordinate"];
//     x_smallest = rectangle["x1 coordinate"] > rectangle["x2 coordinate"] ? rectangle["x2 coordinate"] : rectangle["x1 coordinate"];

//     width = x_biggest - x_smallest;

//     return width;
// }

// function calcHeight(rectangle) {
//     y_biggest = rectangle["y1 coordinate"] > rectangle["y2 coordinate"] ? rectangle["y1 coordinate"] : rectangle["y2 coordinate"];
//     y_smallest = rectangle["y1 coordinate"] > rectangle["y2 coordinate"] ? rectangle["y2 coordinate"] : rectangle["y1 coordinate"];

//     height = y_biggest - y_smallest;

//     return height;
// }

// function calcSquare() {
//     square = calcWidth(rectangle) * calcHeight(rectangle);
//     return square;
// }

// alert(calcSquare());

// 5 Функция принимает объект-прямоугольник и возвращает его периметр. 

// function calcWidth(rectangle) {
//     x_biggest = rectangle["x1 coordinate"] > rectangle["x2 coordinate"] ? rectangle["x1 coordinate"] : rectangle["x2 coordinate"];
//     x_smallest = rectangle["x1 coordinate"] > rectangle["x2 coordinate"] ? rectangle["x2 coordinate"] : rectangle["x1 coordinate"];

//     width = x_biggest - x_smallest;

//     return width;
// }

// function calcHeight(rectangle) {
//     y_biggest = rectangle["y1 coordinate"] > rectangle["y2 coordinate"] ? rectangle["y1 coordinate"] : rectangle["y2 coordinate"];
//     y_smallest = rectangle["y1 coordinate"] > rectangle["y2 coordinate"] ? rectangle["y2 coordinate"] : rectangle["y1 coordinate"];

//     height = y_biggest - y_smallest;

//     return height;
// }

// function calcPerimeter() {
//     perimeter = calcHeight(rectangle) * 2 + calcWidth(rectangle) * 2;
//     return perimeter;
// }

// alert(calcPerimeter());

// 6 Функция изменения ширины прямоугольника. Она принимает объект-прямоугольник и на сколько единиц изменить ширину. 

// let w_increase_value = +prompt("Enter how much to increase");

// function calcWidthIncrease(rectangle, w_increase_value) {
//     x_biggest = rectangle["x1 coordinate"] > rectangle["x2 coordinate"] ? rectangle["x1 coordinate"] : rectangle["x2 coordinate"];

//     coordinates_increased = x_biggest + w_increase_value;
//     if (x_biggest == rectangle["x1 coordinate"]) {
//         return rectangle["x1 coordinate"] = coordinates_increased;
//     } else {
//         return rectangle["x2 coordinate"] = coordinates_increased;
//     }
// }

// function showCoordinates(object) {
//     result = "";

//     for (key in object) {
//         result += `${(key)}: ${object[key]}; \n`
//     }

//     return result;
// }

// calcWidthIncrease(rectangle, w_increase_value);
// alert(showCoordinates(rectangle));

// 7 Функция изменения высоты прямоугольника. Она принимает объект-прямоугольник и на сколько единиц изменить высоту.

// let h_increase_value = +prompt("Enter how much to increase");

// function calcHeightIncrease(rectangle, h_increase_value) {
//     y_biggest = rectangle["y1 coordinate"] > rectangle["y2 coordinate"] ? rectangle["y1 coordinate"] : rectangle["y2 coordinate"];

//     coordinates_increased = y_biggest + h_increase_value;
//     if (y_biggest == rectangle["y1 coordinate"]) {
//         return rectangle["y1 coordinate"] = coordinates_increased;
//     } else {
//         return rectangle["y2 coordinate"] = coordinates_increased;
//     }
// }

// function showCoordinates(object) {
//     result = "";

//     for (key in object) {
//         result += `${(key)}: ${object[key]}; \n`
//     }

//     return result;
// }

// calcHeightIncrease(rectangle, h_increase_value);
// alert(showCoordinates(rectangle));

// 8 Функция изменения ширины и высоты прямоугольника. Она принимает объект-прямоугольник и два значения – для изменения ширины и высоты. 

// let w_increase_value = +prompt("Enter how much to increase width");
// let h_increase_value = +prompt("Enter how much to increase height");

// function calcHWIncrease(rectangle, w_increase_value, h_increase_value) {
//     x_biggest = rectangle["x1 coordinate"] > rectangle["x2 coordinate"] ? rectangle["x1 coordinate"] : rectangle["x2 coordinate"];
//     y_biggest = rectangle["y1 coordinate"] > rectangle["y2 coordinate"] ? rectangle["y1 coordinate"] : rectangle["y2 coordinate"];

//     coordinate_x_increased = x_biggest + w_increase_value;
//     coordinate_y_increased = y_biggest + h_increase_value;

//     if (x_biggest == rectangle["x1 coordinate"]) {
//         rectangle["x1 coordinate"] = coordinate_x_increased;
//     } else {
//         rectangle["x2 coordinate"] = coordinate_x_increased;
//     }

//     if (y_biggest == rectangle["y1 coordinate"]) {
//         rectangle["y1 coordinate"] = coordinate_y_increased;
//     } else {
//         rectangle["y2 coordinate"] = coordinate_y_increased;
//     }

//     return rectangle["x1 coordinate"], rectangle["x2 coordinate"], rectangle["y1 coordinate"], rectangle["y2 coordinate"];
// }

// function showCoordinates(object) {
//     result = "";

//     for (key in object) {
//         result += `${(key)}: ${object[key]}; \n`
//     }

//     return result;
// }

// calcHWIncrease(rectangle, w_increase_value, h_increase_value);
// alert(showCoordinates(rectangle));

// 9 Функция смещения прямоугольника по оси X.Она принимает объект - прямоугольник и на сколько единиц его сдвинуть.

// function calcTranslationX(rectangle, trans_x_value) {
//     rectangle["x1 coordinate"] += trans_x_value;
//     rectangle["x2 coordinate"] += trans_x_value;
//     return rectangle["x1 coordinate"], rectangle["x2 coordinate"];
// }

// function showCoordinates(object) {
//     result = "";

//     for (key in object) {
//         result += `${(key)}: ${object[key]}; \n`
//     }

//     return result;
// }

// let trans_x_value = +prompt("Enter how much to move along the x-axis");

// calcTranslationX(rectangle, trans_x_value);
// alert(showCoordinates(rectangle));

// 10 Функция смещения прямоугольника по оси Y. Она принимает объект-прямоугольник и на сколько единиц его сдвинуть.

// function calcTranslationY(rectangle, trans_y_value) {
//     rectangle["y1 coordinate"] += trans_y_value;
//     rectangle["y2 coordinate"] += trans_y_value;
//     return rectangle["y1 coordinate"], rectangle["y2 coordinate"];
// }

// function showCoordinates(object) {
//     result = "";

//     for (key in object) {
//         result += `${(key)}: ${object[key]}; \n`
//     }

//     return result;
// }

// let trans_y_value = +prompt("Enter how much to move along the y-axis");

// calcTranslationY(rectangle, trans_y_value);
// alert(showCoordinates(rectangle));

// 11 Функция смещения прямоугольника и по оси X и по  оси Y. Она принимает объект-прямоугольник и два значения: сдвиг по оси X и сдвиг по оси Y.

// function calcTranslationXY(rectangle, trans_x_value, trans_y_value) {
//     rectangle["x1 coordinate"] += trans_x_value;
//     rectangle["x2 coordinate"] += trans_x_value;

//     rectangle["y1 coordinate"] += trans_y_value;
//     rectangle["y2 coordinate"] += trans_y_value;

//     return rectangle["x1 coordinate"], rectangle["x2 coordinate"], rectangle["y1 coordinate"], rectangle["y2 coordinate"];
// }

// function showCoordinates(object) {
//     result = "";

//     for (key in object) {
//         result += `${(key)}: ${object[key]}; \n`
//     }

//     return result;
// }

// let trans_x_value = +prompt("Enter how much to move along the x-axis");
// let trans_y_value = +prompt("Enter how much to move along the y-axis");

// calcTranslationXY(rectangle, trans_x_value, trans_y_value);
// alert(showCoordinates(rectangle));

// 12 Функция для проверки, находится ли точка внутри прямоугольника. Она принимает объект-прямоугольник и координаты точки.

// function checkBelongingToRectangle(rectangle, x_check, y_check) {
//     x_biggest = rectangle["x1 coordinate"] > rectangle["x2 coordinate"] ? rectangle["x1 coordinate"] : rectangle["x2 coordinate"];
//     x_smallest = rectangle["x1 coordinate"] > rectangle["x2 coordinate"] ? rectangle["x2 coordinate"] : rectangle["x1 coordinate"];

//     y_biggest = rectangle["y1 coordinate"] > rectangle["y2 coordinate"] ? rectangle["y1 coordinate"] : rectangle["y2 coordinate"];
//     y_smallest = rectangle["y1 coordinate"] > rectangle["y2 coordinate"] ? rectangle["y2 coordinate"] : rectangle["y1 coordinate"];

//     if (x_check <= x_biggest && x_check >= x_smallest && y_check <= y_biggest && y_check >= y_smallest) {
//         return `x = ${x_check}; y = ${y_check} belonging to a rectangle`;
//     } else {
//         return `x = ${x_check}; y = ${y_check} not belonging to a rectangle`;
//     }
// }

// let x_check = +prompt("Enter the x coordinate");
// let y_check = +prompt("Enter the y coordinate");

// alert(checkBelongingToRectangle(rectangle, x_check, y_check));