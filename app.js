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

// Ternary operator ==================================================================================


/**
 * Записать в виде switch case следующее условие:
 * if (a === 'block') {
 *  console.log('block')
 * } else if (a === 'none') {
 *  console.log('none')
 * } else if (a === 'inline') {
 *  console.log('inline')
 * } else {
 *  console.log('other')
 * }
 */

let display = 'none';

switch(display) {
  case 'block':
    console.log('block');
    break;
  case 'none':
    console.log('none');
    break;
  case 'inline':
    console.log('inline');
    break;
  default:
    console.log('other');
}

/**
 * Записать данное условие в виде тернарного оператора
 *
 * let b = 'hidden';
 *
 * if (b === 'hidden') {
 *  b = 'visible';
 * } else {
 *  b = 'hidden';
 * }
 */

let bob = 'hidden';

//bob === 'hidden' ? bob = 'visible' : bob = 'hidden';

bob = bob === 'hidden' ? 'visible' : 'hidden'; //так правильней

console.log(bob);

/**
 * Записать данное условие в виде тернарного оператора
 *
 * let c = 0;
 *
 * if (c === 0) {
 *  c = 1;
 * } else if (c < 0) {
 *  c = 'less then zero';
 * } else {
 *  c *= 10;
 * }
 */

let coc = 2;

//coc === 0 ? coc = 1 : coc < 0 ? coc = 'less then zero' : coc *= 10;

coc = coc === 0 ? 1 : coc < 0 ? 'less then zero' : coc * 10; //так правильней
console.log(coc);

// Cycle ==================================================================================

/**
 * На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова
 *
 * будут в верхнем регистре. Использовать for или while.
 */

let stringi = 'i am in the easycode';
let res = '';

let i = 0;
while (i < stringi.length) {
  if (stringi[i] == 0 || stringi[i - 1] == ' ') {
    res += stringi[i].toUpperCase();
  } else {
    res += stringi[i];
  }
  i++;
}

console.log(res);



/**
 * Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш
 * (то есть последняя буква становится первой, предпоследняя - второй итд).
 */

let normStr = 'tseb eht ma i';
let newStr = '';

for (let i = normStr.length - 1; i >= 0; i--) {
  newStr += normStr[i];
}

console.log(newStr);

/**
 * Факториал числа - произведение всех натуральных чисел от 1 до n
 * включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью циклов вычислить
 * факториал числа 10. Использовать for.
 */
let fact = 1;
for (let i = 1; i <= 10; i++) {
  fact *= i;
}
console.log(fact);

/**
 * На основе строки “JavaScript is a pretty good language” сделать новую строку,
 * где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for.
 */

let gogr = 'JavaScript is a pretty good languag';
let newGogr = '';

for (let i = 0; i < gogr.length; i++) {
  if (gogr[i] == ' ') {
    continue;
  } else if (gogr[i - 1] == ' '){
    newGogr += gogr[i].toUpperCase();
  } else {
    newGogr += gogr[i];
  }
}

console.log(newGogr);


/**
 * Найти все нечетные числа в массиве от 1 до 15 включительно и вывести их в консоль.
 * Массив [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] Использовать for of.
 */

let arrNumb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for (let value of arrNumb) {
  if (value % 2 == 0) {
    continue;
  } else {
    console.log(value);
  }
}

// так лучше
for (let value of arrNumb) {
  if (value % 2) {
    console.log(value);
  }
}

/**
 * Перебрать объект и если значение в свойстве это строка то переписать
 * ее всю в верхнем регистре. Использовать for in.
 */


let list = {
  name: 'denis',
  work: 'easycode',
  age: 29,
};

for (let key in list) {
  if (typeof(list[key]) == 'string') {
    list[key] = list[key].toUpperCase();
  }
}

console.log(list);

//==================================================================================


