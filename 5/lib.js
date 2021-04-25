(function () {
  function makeSecretNumber() {
    return Math.floor(Math.random() * 1000);
  }

  window.startGame = function () {
    let amountCount = 10; // Кол-во попыток
    let secretNumber = makeSecretNumber();

    while (amountCount >= 0) {
      if (amountCount == 0) {
        let restart = confirm('Потрачено 🙁. Ещё раз?');
        // Перезапуск или выход
        if (restart) {
          amountCount = 10;
        } else return;
      }

      let userNumber = prompt(`Введите число. Попыток ${amountCount}`);

      if (userNumber === null) return alert('Ну и ладно 🤪');

      if (isNaN(+userNumber) || userNumber == '') {
        alert('Введите число 🤬 не тратьте попытки');
      } else if (+userNumber > secretNumber) {
        alert('Меньше👇 ');
      } else if (+userNumber < secretNumber) {
        alert('Больше 👆');
      } else {
        return alert('Ура, победа 🥳');
      }
      amountCount--;
    }
  };
})();
