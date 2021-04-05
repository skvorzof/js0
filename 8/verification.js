'use strict';
let userInput = prompt('Введите js код:', '');

verificationCode(userInput);

function verificationCode(code) {
  try {
    eval(code);
    alert('🙆 ваш код работает без ошибок. ' + code);
  } catch (exc) {
    alert('👎 ваш код не работает в "строгом" режиме. Ошибка –> ' + exc);
  }
}
