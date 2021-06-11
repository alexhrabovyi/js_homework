// 1. Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта,
// необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.

let buy_list = [
    {
        product_name: "Milk",
        product_amount: 1,
        purchase_status: true,
    },

    {
        product_name: "Butter",
        product_amount: 2,
        purchase_status: false,
    },

    {
        product_name: "Yoghurt",
        product_amount: 3,
        purchase_status: false,
    },
];

function showArray(arr) {

    result = "";
    object_result = "";

    for (item of arr) {
        for (key in item) {
            object_result += `${key}: ${item[key]}\n`;
        }

        result += `${object_result}\n`;
        object_result = "";
    }

    alert(result);
}

// Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.

function sortByPurchaseStatus(arr) {

    array_sorted = arr.sort((a, b) => {
        if (a.purchase_status > b.purchase_status) {
            return 1;
        } else if (a.purchase_status < b.purchase_status) {
            return -1;
        } else {
            return 0;
        }
    });

    return array_sorted;
}

sortByPurchaseStatus(buy_list);

showArray(buy_list);


// Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, 
// необходимо увеличивать количество в существующей покупке, а не добавлять новую.

// ПОЯСНЕНИЕ: мы вводим название продукта, который хотим купить, и его количество.В функцию вносим эти данные и сам массив объектов.
// Переменная product_existence с изначальным значением 0. Потом она пригодится. Далее, обычным циклом перебираем объекты массива
// и смотрим, совпадают ли названия продуктов, если да, то сразу же добавляем к их количеству, новое количество, и повышаем product_existence.
// Далее функция заканчивается. Если же не было совпадения, следственно, product_existence не повышался, тогда выполняется другая конструкция, 
// создается новый объект, с названием продукта, которое мы ввели, количеством, которое мы ввели, а также по умолчанию статус покупки - ложь, то
// есть мы еще не купили их. product_existence отвечает за то, есть ли уже в массиве такой объект или нет. Если есть, то просто добавляем количество,
// если нет, то создаем новый объект.

let product_name = prompt("Enter the product name");
let product_amount = +prompt("Enter the amount of product");

function addProductToList(arr, product_name, product_amount) {

    product_existence = 0;

    for (item of arr) {
        if (item.product_name == product_name) {
            product_existence++;
            return item.product_amount += product_amount;
        }
    }

    if (product_existence == 0) {
        new_object = {
            product_name,
            product_amount,
            purchase_status: false,
        }

        return arr.push(new_object);
    }
}

addProductToList(buy_list, product_name, product_amount);
showArray(buy_list);


// Покупка продукта. Функция принимает название продукта и отмечает его как купленный.

function changeProductStatus(arr, product_name) {
    item_existance = 0;

    for (item of arr) {
        if (item.product_name == product_name) {
            return item.purchase_status = true;
        } else {
            item_existance++;
        }
    }

    if (item_existance == arr.length) {
        alert(`This product (${product_name}) does not exist`);
    }
}

let product_name = prompt("Enter the product name");

changeProductStatus(buy_list, product_name);
showArray(buy_list);




// 2. Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, 
// количества и цены за единицу товара. Написать следующие функции:

let check = [
    {
        product_name: "Apple",
        product_amount: 3,
        price_for_1_piece: 1,
    },

    {
        product_name: "Sausages",
        product_amount: 2,
        price_for_1_piece: 2,
    },

    {
        product_name: "Chocolates",
        product_amount: 5,
        price_for_1_piece: 1.25,
    },
];

// Подсчет общей суммы покупки;

function calcTotalPrice(arr) {
    total_price = 0;

    for (item of arr) {
        total_price += item.product_amount * item.price_for_1_piece;
    }

    return total_price;
}

function calcTotalTax(arr) {
    calcTotalPrice(arr);
    total_tax = total_price * 0.2;
    total_tax = total_tax.toFixed(2);
    return total_tax;
}


function calcBuyBonus(arr) {
    calcTotalPrice(arr);
    bonus = total_price * 0.005;
    bonus = bonus.toFixed(2);
    return bonus;
}

// Распечатка чека на экран;

function printCheck(arr) {
    calcTotalPrice(arr);
    calcTotalTax(arr);
    calcBuyBonus(arr);

    check_title = `
            ТОВ "СІЛЬПО-ФУД", магазин       
      м. Одеса, вулиця Кримська, будинок 71 
                   ПА 407201926534            
            00006 Каса Желяпова Л.С.        
               # ЧЕК № 19/1645/150          \n`;

    check_bonus = `    username 231545               
    Ви отримали ${total_price.toFixed(0)} балів                    
    ----------------------------------------
    Ваш бонус ${bonus} грн                      \n`;

    check_price = `    ----------------------------------------
    СУМА                               ${total_price}
    ----------------------------------------\n`;

    check_tax = `    ПДВ А     20,00%                    ${total_tax}\n\n`;

    check_footer = `               2 артикулів              
    0811437 0748375        dd:mm:yy hh:mm:ss
    ЗН КС00003754              ФН 3000267171
    ФІСКАЛЬНИЙ                           ЧЕК`;

    check_product = "";
    check_all_products = "";

    for (item of arr) {
        for (i = 0; i < 1; i++) {
            check_product += `    ${item.product_name}
    кількість: ${item.product_amount}
    ціна: ${item.price_for_1_piece} грн
    загальна ціна цього товару: ${item.product_amount * item.price_for_1_piece} грн\n`;
        }

        check_all_products += `${check_product} \n`;
        check_product = "";
    }

    return result = check_title + check_all_products + check_bonus + check_price + check_tax + check_footer;
}

console.log(printCheck(check));
// Советую смотреть результат через консоль, там все помещается


// Получение самой дорогой покупки в чеке;

function getMaxPrice(arr) {
    max_price = 0;

    for (item of arr) {
        for (key in item) {
            price_for_all_pieces = item.product_amount * item.price_for_1_piece;
            if (max_price < price_for_all_pieces) {
                max_price = price_for_all_pieces;
            }
        }
    }

    return max_price;
}

alert(getMaxPrice(check));


// Подсчет средней стоимости одного товара в чеке.

function calcAveragePrice(arr) {
    sum = 0;

    for (item of arr) {
        for (i = 0; i < 1; i++) {
            sum += item.product_amount * item.price_for_1_piece;
        }
    }

    average_price = sum / Number(arr.length);
    return average_price.toFixed(2);
}

alert(calcAveragePrice(check));



// 3. Создать массив CSS-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.). 
// Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля. 
// Написать функцию, которая принимает массив стилей и текст, и выводит этот текст с помощью document.write() в тегах <p></p>, 
// добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.

let properties = [
    {
        style_name: "text-align",
        style_value: "center",
    },

    {
        style_name: "text-transform",
        style_value: "uppercase",
    },

    {
        style_name: "color",
        style_value: "red",
    },
];

function addTextToDoc(arr, text) {
    style = "";

    for (item of arr) {
        for (i = 0; i < 1; i++) {
            style += `${item.style_name}: ${item.style_value}; `;
        }
    }

    document.write(`<p style="${style}">`);
    document.write(`${text}`);
    document.write("</p>");
}

let text = prompt("Enter the text");

addTextToDoc(properties, text);


// 4. Создать массив аудиторий академии. Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20) и 
// названия факультета, для которого она предназначена. Написать несколько функций для работы с ним.


let auditories = [
    {
        auditory_name: 101,
        auditory_seats: 80,
        auditory_faculty: "Physics",
    },

    {
        auditory_name: 416,
        auditory_seats: 60,
        auditory_faculty: "Mathematics",
    },

    {
        auditory_name: 205,
        auditory_seats: 40,
        auditory_faculty: "Computer science",
    },
]

// Вывод на экран всех аудиторий;

function showAuditories(arr) {

    show_auditories = "";

    for (item of arr) {
        for (i = 0; i < 1; i++) {
            show_auditory = `Auditory name: ${item.auditory_name}\nAuditory seats: ${item.auditory_seats}\nAuditory faculty: ${item.auditory_faculty}\n`
        }

        show_auditories += `${show_auditory}\n`;
        show_auditory = "";
    }

    alert(show_auditories);
}

showAuditories(auditories);

// Вывод на экран аудиторий для указанного факультета;

function checkAuditoriesFaculty(arr, faculty) {
    auditory_existance = 0;
    result = "";

    for (item of arr) {
        for (key in item) {
            if (faculty == item.auditory_faculty) {
                result += `${key}: ${item[key]}\n`;
                auditory_existance++;
            }
        }
    }

    if (auditory_existance == 0) {
        return "Such an audience does not exist";
    } else {
        return result;
    }
}

let faculty = prompt("Enter the faculty");
alert(checkAuditoriesFaculty(auditories, faculty));


// Функция сортировки аудиторий по количеству мест;

function sortBySeats(arr) {
    arr.sort((a, b) => {
        if (a.auditory_seats > b.auditory_seats) {
            return 1;
        } else if (a.auditory_seats < b.auditory_seats) {
            return -1;
        } else {
            return 0;
        }
    })
}

sortBySeats(auditories);
showAuditories(auditories);

// Функция сортировки аудиторий по названию (по алфавиту).

function sortByName(arr) {
    arr.sort((a, b) => {
        if (a.auditory_name > b.auditory_name) {
            return 1;
        } else if (a.auditory_name < b.auditory_name) {
            return -1;
        } else {
            return 0;
        }
    })
}

sortByName(auditories);
showAuditories(auditories);