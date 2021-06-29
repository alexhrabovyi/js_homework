// 1) Реализовать класс, описывающий окружность.В классе должны быть следующие компоненты:

// поле, хранящее радиус окружности;
// get - свойство, возвращающее радиус окружности;
// set - свойство, устанавливающее радиус окружности;
// get - свойство, возвращающее диаметр окружности;
// метод, вычисляющий площадь окружности;
// метод, вычисляющий длину окружности.

// Продемонстрировать работу свойств и методов. 


class CircleProperties {
    constructor(rad) {
        this.rad = rad;
        this.pi = 3.14;
    }

    get returnRadius() {
        return `The radius of the circle is ${this.rad}`;
    }

    set setRadius(value) {
        if (value > 0) {
            this.rad = value;
        } else {
            alert("Incorrect radius value");
        }
    }

    get returnDiameter() {
        return `The diameter of the circle is ${this.rad * 2}`;
    }

    calcSquare() {
        return this.pi * this.rad ** 2;
    }

    calcCircumference() {
        return this.pi * this.rad * 2;
    }
}

let circle_1 = new CircleProperties;
let radius = +prompt("Enter the radius value");

circle_1.setRadius = radius;

alert(circle_1.calcCircumference());



// 2) Реализовать класс, описывающий простой маркер. В классе должны быть следующие компоненты:

// поле, которое хранит цвет маркера;
// поле, которое хранит количество чернил в маркере (в процентах);
// метод для печати (метод принимает строку и выводит текст соответствующим цветом; текст выводится до тех пор, 
// пока в маркере есть чернила; один не пробельный символ – это 0,5% чернил в маркере).
// Реализовать класс, описывающий заправляющийся маркер, унаследовав его от простого маркера и добавив метод для заправки маркера.

// Продемонстрировать работу написанных методов.


class StandartMarker {
    constructor(color, charge, text) {
        this.color = color;
        this.charge = charge * 2;
        this.text = text;

    }

    text_arr = [];
    number_of_symbols = "";

    print() {
        this.text_arr = this.text.split('');
        this.text_arr.length = this.charge;
        for (let symbol of this.text_arr) {
            this.number_of_symbols += symbol;
        }
        document.write(`<p style="color: ${this.color}">`);
        document.write(this.number_of_symbols);
        document.write("</p>");
    }
}

class RefillableMarker extends StandartMarker {
    constructor(color, charge, text, add_charge) {
        super(color, charge, text, add_charge);
        this.add_charge = add_charge * 2;
    }

    fillInMarker() {
        this.charge += this.add_charge;
    }
}


let color = prompt("Enter the color of the text");
let charge = +prompt("Enter the charge of the marker");
let text = prompt("Enter the text");
let add_charge = +prompt("Enter the additional marker charge");

let new_marker = new RefillableMarker(color, charge, text, add_charge);
new_marker.fillInMarker();
new_marker.print();



// 3) Реализовать класс Employee, описывающий работника, и создать массив работников банка.

// Реализовать класс EmpTable для генерации HTML-кода таблицы со списком работников банка. 
// Массив работников необходимо передавать через конструктор, а получать HTML-код с помощью метода getHtml().

// Создать объект класса EmpTable и вывести на экран результат работы метода getHtml().


// ПОЯСНЕНИЕ: Первый класс помещает в себя данные работника с учетом проверки(ради интереса её добавил), далее идет функция конструктор, кoторой
// вводится сколько работников надо сделать, потом каждому надо ввести параметры, это все передается в массив, сам массив передается во второй класс,
// где метод генерирует таблице. АЛГОРИТМ: Вводится количество работников -> Вводятся данные работника -> Это вводится в первый класс -> Происходит проверка данных ->
// Это все добавляется в изначально пустой массив -> Это проделывается столько, сколько работников -> Переменной инициализируем класс, в который попадает массив
// объектов сделанных по первому классу -> Вызов метода -> Метод генерирует таблицу (Спасибо всем богам, что не надо делать блок-схему, слава джаваскрипту. 
// Надеюсь, нормально объяснил)



class Employee {
    constructor(gender, age, work_experience) {
        this.gender = gender;
        this.age = age;
        this.work_experience = work_experience;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        if (value < 18 || value > 60) {
            alert("Incorrect age");
            return;
        }

        this._age = value;
    }

    get gender() {
        return this._gender;
    }

    set gender(value) {
        if (value != "male" && value != "female") {
            alert("Incorrect gender")
            return;
        }

        this._gender = value;
    }

    get work_experience() {
        return this._work_experience;
    }

    set work_experience(value) {
        if (value < 0 || value > 42) {
            alert("Incorrect work experience");
            return;
        }

        this._work_experience = value;
    }
}

class EmpTable {
    constructor(workersArray) {
        this.workersArray = workersArray;
    }

    getHTML() {
        document.write('<table border="3px">')
        document.write("<tr>");
        document.write("<td>Workers List</td>");
        document.write("</tr>");
        document.write("<tr>");
        document.write("<td>Gender</td>");
        document.write("<td>Age</td>");
        document.write("<td>WorkExperience</td>");
        document.write("</tr>");
        for (i = 0; i < this.workersArray.length; i++) {
            document.write("<tr>");
            document.write("<td>");
            document.write(`${this.workersArray[i].gender}`);
            document.write("</td>");
            document.write("<td>");
            document.write(`${this.workersArray[i].age}`);
            document.write("</td>");
            document.write("<td>");
            document.write(`${this.workersArray[i].work_experience}`);
            document.write("</td>");
            document.write("</tr>");
        }
        document.write("</table>")
    }
}

function WorkersConstructor() {
    number = +prompt("Enter the number of workers need to create");

    for (i = 1; i <= number; i++) {
        gender = prompt("Enter the worker gender");
        age = +prompt("Enter the worker age");
        work_experience = +prompt("Enter the worker work experience");
        workersArray.push(new Employee(gender, age, work_experience));
    }
}

let workersArray = [];

WorkersConstructor();

let htmlTable = new EmpTable(workersArray);
htmlTable.getHTML();


