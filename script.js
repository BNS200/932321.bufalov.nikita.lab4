'use strict';

var userName = prompt('Как вас зовут?', 'Гость');
if (userName === null || userName.trim() === '') {
  userName = 'Гость';
}
alert('Привет, ' + userName + '! Добро пожаловать в блог о еде.');
console.log('Пользователь:', userName);
console.log('Текущее время:', new Date().toLocaleString('ru-RU'));