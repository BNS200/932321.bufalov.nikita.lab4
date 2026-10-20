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