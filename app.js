// Number ==================================================================================

// Получить число pi из Math и округлить до 2-х знаков после точки
let p = Math.PI.toFixed(2);
console.log(p);

// Используя Math найти макс и мин число из представленного ряда чисел 15, 11, 16, 12, 51, 12, 13, 51

let max = Math.max(15, 11, 16, 12, 51, 12, 13, 51);
let min = Math.min(15, 11, 16, 12, 51, 12, 13, 51);

console.log(max, min);

// Работа с Math.random:

  //получить случайное число и округлить до двух цифр после запятой
  let random = Math.random().toFixed(2);
  console.log(typeof(random));

  // Получить случайное число от 0 до ХХ - любое произвольное число
  let randomNum = Math.floor((Math.random() * 3) + 1); // включительно, тогда +1
  console.log(randomNum);

// Проверить результат вычисления 0.6 + 0.7. Как привести к нормальному виду (1.3)?

// let sum = 0.6 + 0.7; 1.2999999999999998

// let sum = (0.6 * 10 + 0.7 * 10) / 10;

let sum = (0.6 * 10 + 0.7 * 10) / 10;
console.log(sum);

// Получить число из строки '100$'

let number = parseInt('100$');
console.log(number);

// String ==================================================================================

let string = 'some test string';

// Получить первую и последнюю букву строки

let firstLetter = string[0];
let lastLetter = string[string.length - 1];

console.log(firstLetter, lastLetter);

// Сделать первую и последнюю буквы в верхнем регистре

let toUpFirstLastLetter = `${string[0].toUpperCase()}${string.slice(1, -1)}${string[string.length - 1].toUpperCase()}`;

console.log(toUpFirstLastLetter);

// Найти положение слова 'string' в строке

console.log(string.indexOf('string'));

// Найти положение второго пробела
let firstSpace = string.indexOf(' ');
let secondSpace = string.indexOf(' ', firstSpace + 1);
console.log(secondSpace);

// Получить строку с 5-го символа длиной 4 буквы
console.log(string.substr(5, 4));

// Получить строку с 5-го по 9-й символ

console.log(string.slice(5, 9));

// Получить новую строку из исходной путем удаления последних 6-и символов

let newString = string.slice(0, -6);
console.log(newString);

// Из двух переменных получить переменную string в которой будет содержаться текст 2016

let a = 20;
let b = 16;

let stringNum1 = String(a) + String(b);
let stringNum2 = `${a}${b}`;

console.log(stringNum1, stringNum2);

//==================================================================================
/* 
let str = 'some test string';
let newStr = str.replace(/s/g, 'p');
console.log(newStr); */

// Object ==================================================================================

let obj = {
  product: 'iphone',
};

obj.price = 1000;
obj.current = 'dollar';
/*
obj[price] = 1000;
obj[current] = 'dollar';
 */
obj.details = {};

obj.details.model = 3300;
obj.details.color = 'blue';

// Boolean operators (if, else if) ==================================================================================


// Чему равно а, почему?

let $a = 0 || 'string'; // 'string'

let $b = 1 && 'string'; // 'string'

let $c = null || 25;  // 25

let $d = null && 25;  // null

let $e = null || 0 || 35; // 35

let $f = null && 0 && 35; // null

console.log($a, $b, $c, $d, $e, $f);

// Что отобразится в консоли. Почему?

console.log(12 + 14 + '12'); // '2612'

console.log(3 + 2 - '1'); // 4

console.log('3' + 2 - 1); // 31

console.log(true + 2); // 3

console.log(+'10' + 1); // 11

console.log(undefined + 2); // NaN

console.log(null + 5); // 5

console.log(true + undefined); // Nan


/**
 * Создать произвольную переменную, присвоеть ей значение и написать условие,
 * если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.
 */

let enis = 'hidden';

if (enis === 'hidden') {
  enis = 'visible';
} else {
  enis = 'hidden';
}

console.log(enis);


/**
 * Создать переменную и присвойте ей число.
 *
 * Используя if, записать условие:
 *
 * - если переменная равна нулю, присвоить ей 1;
 * - если меньше нуля - строку “less then zero”;
 * - если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).
 */

let numbass = 69;

if (numbass == 0) {
  numbass = 1;
} else if (numbass < 0) {
  numbass = 'less then zero';
} else {
  numbass *= 10;
}

console.log(numbass);

/**
 * Дан объект
 * Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' и свойство
 * needRepair в объекте car изменить на true; иначе изменить на false.
 */

let car = {
  name: 'Lexus',
  age: 10,
  create: 2008,
  needRepair: false,
};

if (car.age > 5) {
  console.log('Need Repair');
  car.needRepair = true;
} else {
  car.needRepair = false;
}

console.log(car);

/**
 * Дан объект
 * Написать условие если у item есть поле discount и там есть значение которое
 * не NaN а также есть поле price значение которого также не NaN то в объекте item
 * создать поле priceWithDiscount и записать туда цену с учетом скидки и вывести ее
 * в консоль, обратите внимание что поля discount и price это строки и вам из них
 * нужно получить числа чтобы выполнить расчет. иначе если поля discount нет то
 * вывести просто поле price в консоль.
 */

let item = {
  name: 'Intel core i7',
  price: '100$',
  discount: '15%',
};

if (item.discount && isNaN(item.discount) && item.price && isNaN(item.price)) {
  item.priceWithDiscount = `${+parseInt(item.price) - ((+parseInt(item.price) * +parseInt(item.discount)) / 100)}`;
  console.log(item.priceWithDiscount);
} else {
  console.log(item.price);
}



/**
 * Написать условие если цена товара больше или равна минимальной цене и меньше или равна максимальной цене то вывести
 * в консоль название этого товара, иначе вывести в консоль что товаров не найдено.
 */

let product = {
  name: 'Яблоко',
  price: '120$',
};

let minPr = 10; // минимальная цена
let maxPr = 20; // максимальная цена

if (parseInt(product.price) >= minPr && parseInt(product.price) <= maxPr) {
  console.log(product.name);
} else {
  console.log('товаров не найдено');
}

//==================================================================================

