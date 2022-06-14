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

// Function ==================================================================================

console.clear();

/**
 * Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение
 * Если нет ни одного аргумента, то вернуть нуль
 */
function multiply() {
  let sumArg = 1;
  if (!arguments.length) {
    return 0;
  } else {
    for (let i = 0; i < arguments.length; i++) {
      sumArg *= arguments[i];
    }
  }

  return sumArg;
}

console.log(multiply(2, 4, 5, 6));

multiply();


/**
 * Создайте функцию, которая принимает строку и возвращает строку перевертыш
 */

function reverseString(str) {
/*   if (typeof(str) !== string) {

  } */
  str = String(str);
  let newStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

console.log(reverseString('test'));
console.log(reverseString(''));
console.log(reverseString(null));
console.log(reverseString(undefined));
console.log(reverseString());

/**
 * Создайте функцию, которая в качестве аргумента может принять строку, числа, null или
 * undefined и возвращает строку, где каждый символ разделен пробелом и заменен на юникод-значение символа
 */

function getCodeStringFromText(str) {
  str = String(str);
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    newStr += `${str[i].charCodeAt()} ` ;
  }
  return newStr.trim();
}

console.log(getCodeStringFromText("hello"));

/**
 * Создать функцию угадай число
 *
 * Она принимает число от 1-10(обязательно проверить, что число не больше 10 и не меньше 0).
 * Если число не соответствует условию то верните ошибку return new Error ("Please provide number in range 0 - 10").
 * Если передано не число, то верните ошибку return new Error ("Please provide a vaild number");
 *
 * Далее, функция генерирует рандомное число от 1-10 и сравнивает с заданным числом, если они совпали
 * то возвращать строку "You win!", если нет, то строку 'You are lose, your number is 8, the random number is 5'.
 *
 * Если передано число в виде строки, то преобразовать к числу.
 */

function guessTheNumber(num) {
  let ret;
  let number = num;
  if (typeof(number) === 'string' && !Number.isNaN(+number)) {
    number = +number;
  }
  if (typeof(number) !== 'number') {
    ret = new Error ("Please provide a vaild number");
  } else if (number < 1 || number > 10) {
    ret = new Error ('Please provide number in range 0 - 10');
  } else {
    let random = Math.floor(Math.random() * 10);
    if (random == number) {
      ret = "You win!";
    } else {
      ret = `You are lose, your number is ${number}, the random number is ${random}`;
    }
  }
  return ret;
}

console.log(guessTheNumber(null));

// Array methods ==================================================================================

/**
 * Создать функцию, которая принимает число т и возвращает массив, заполненный числами от 1 до n
 */

function getArray(num) {
  let newArr = [];

  for (let i = 1; i <= num; i++) {
    newArr[i-1] = i;
  }
  return newArr;
}

console.log(getArray(10));

function getArray(num) {
  let newArr = [];

  for (let i = 1; i <= num; i++) {
    newArr.push(i);
  }
  return newArr;
}

console.log(getArray(10));

/**
 * Создать функцию, которая принимает массив, а возвращает новый массив с дублированными элементами
 * сходного массива
 */

function doubleArray(arr) {
  return arr.concat(arr);
}

console.log(doubleArray([1,2,3]));

/**
 * Создать функцию, которая принимает произвольное число массивов и удаляет из каждого массива
 * первый элемент, а возвращает массив из оставшихся значений
 */


function changeCollection() {
  let mainArr = [];

  if (arguments.length) {
    for (let i = 0; i < arguments.length; i++) {
      if (Array.isArray(arguments[i])) {
        arguments[i].shift();
        mainArr.push(arguments[i]);
      }
    }
  }
  return mainArr;
}

console.log(changeCollection([1, 2, 3], ['a', 'b', 'c'], [5, 6, 7]));

/**
 * Создать функцию которая принимает массив пользоватлей, поле котрое хочу проверить и значение
 * на которое хочу проверять указанное поле. Проверять, что все аргументы переданы. Если что-то не
 * переданно, то возвращать объект ошибки return new Error('Error message'). Возвращать новый массив с
 * пользователями соответствующие указанным параметрам
 */


const users = [
  {
    "_id": "5e36b779dc76fe3db02adc32",
    "balance": "$1,955.65",
    "picture": "http://placehold.it/32x32",
    "age": 33,
    "name": "Berg Zimmerman",
    "gender": "male"
  },
  {
    "_id": "5e36b779d117774176f90e0b",
    "balance": "$3,776.14",
    "picture": "http://placehold.it/32x32",
    "age": 37,
    "name": "Deann Winters",
    "gender": "female"
  },
  {
    "_id": "5e36b779daf6e455ec54cf45",
    "balance": "$3,424.84",
    "picture": "http://placehold.it/32x32",
    "age": 36,
    "name": "Kari Waters",
    "gender": "female"
  }
];


function filterUsers(arr, key, value) {
  let newArr = [];
  let res;
  if (arguments.length != 3) {
    res = new Error('Error message');
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][key] == value) {
        newArr.push(arr[i]);
      }
    }
    res = newArr;
  }
  return res;
}

console.log(filterUsers(users, "age", 36));

// Higher-Order Function ==================================================================================

/**
 * Создать функции:
 *
 * - первая принимает массив и колбек (одна для всех)
 * - вторая функция колбек обрабатывает каждый элемент массива (для каждого вызова свой callback)
 *
 * Первая возвращает строку `New value: ` и результат обработки:
 *
 * firstFunc(['my', 'name', 'is', 'Trinity'], handler1)) // 'New value: MyNameIsTrynyty'
 * firstFunc([10, 20, 30], handler2) //'New value: 100, 200, 300'
 * firstFunc([{age: 45, name: 'Jhon'}, {age: 20, name: 'Aaron'}], handler3) // 'New value: Jhon is 45, Aaron is 20'
 * firstFunc(['abs', '123'], handler4) // 'New value: cba, 321'
 */

// 1
function firstFunc(arr, fn) {
  let newArr = '';
  for (let i = 0; i < arr.length; i++) {
    newArr += fn(arr[i]);
  }
  return `New value: ${newArr.trim()}`;
}

function handler1(el) {
  return `${el[0].toUpperCase()}${el.slice(1)}`;
}

console.log(firstFunc(['my', 'name', 'is', 'Trinity'], handler1));


function handler2(el) {
  return `${el * 10}, `;
}

console.log(firstFunc([10, 20, 30], handler2) )

function handler3(el) {
  return `${el.name} is ${el.age}, `;
}

console.log(firstFunc([{age: 45, name: 'Jhon'}, {age: 20, name: 'Aaron'}], handler3));

function handler4(el) {
  let newElr = '';
  for (let i = el.length-1; i >= 0; i--) {
    newElr += el[i];
  }
  return `${newElr}, `;
}

console.log(firstFunc(['abs', '123'], handler4));

