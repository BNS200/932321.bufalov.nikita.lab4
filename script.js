'use strict';

var userName = prompt('Как вас зовут?', 'Гость');
if (userName === null || userName.trim() === '') {
  userName = 'Гость';
}
alert('Привет, ' + userName + '! Добро пожаловать в блог о еде.');
console.log('Пользователь:', userName);
console.log('Текущее время:', new Date().toLocaleString('ru-RU'));

var dishCalories = [420, 380, 610, 290, 520, 180, 750];

var HIGH_CALORIE_THRESHOLD = 600;
var LOW_CALORIE_THRESHOLD  = 300;

function findMax(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return 0;
  }
  var max = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

function filterArray(arr, predicate) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (predicate(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

function sumArray(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

var maxCalories = findMax(dishCalories);

var highCalorieDishes = filterArray(dishCalories, function (kcal) {
  return kcal > HIGH_CALORIE_THRESHOLD;
});

var totalCalories    = sumArray(dishCalories);
var highCalorieTotal = sumArray(highCalorieDishes);

var lowCalorieCount = 0;
var lowCalorieTotal = 0;

for (var i = 0; i < dishCalories.length; i++) {
  if (dishCalories[i] <= LOW_CALORIE_THRESHOLD) {
    lowCalorieCount++;
    lowCalorieTotal += dishCalories[i];
  }
}

var lowCalorieShare = totalCalories > 0 ? (lowCalorieTotal / totalCalories) * 100 : 0;

alert('Суммарная калорийность – ' + totalCalories + ' ккал, ' + 'из них ' + highCalorieTotal + ' ккал – в высококалорийных блюдах.');

console.log('--- Отчёт по калорийности ---');
console.log('Массив калорийности:', dishCalories);
console.log('Максимум калорийности:', maxCalories, 'ккал');
console.log('Высококалорийные блюда (>' + HIGH_CALORIE_THRESHOLD + ' ккал):', highCalorieDishes);
console.log('Суммарная калорийность:', totalCalories, 'ккал');
console.log('Сумма в высококалорийных блюдах:', highCalorieTotal, 'ккал');
console.log('Количество низкокалорийных блюд (≤' + LOW_CALORIE_THRESHOLD + ' ккал):', lowCalorieCount);
console.log('Доля низкокалорийных блюд:', lowCalorieShare.toFixed(2) + '%');

if (totalCalories > 3000) {
  console.log('Такой рацион лучше распределить на 2 дня');
}