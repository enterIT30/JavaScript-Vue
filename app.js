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


