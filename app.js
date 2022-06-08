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


