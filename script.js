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