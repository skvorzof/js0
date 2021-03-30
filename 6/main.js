'use strict';

function User(newUser) {
  let user = newUser.split(' ');
  this.firstName = user[0];
  this.lastName = user[1];
  this.regDate = new Date();

  this.addNewUser = function () {
    return (
      this.firstName +
      ' ' +
      this.lastName +
      ' ' +
      this.regDate.toLocaleString('ru')
    );
  };
}

function UserList() {
  let users = [];

  function checkValidInput(input) {
    // Преобразовать в число, убрать пробелы и проверить на Number
    let isNum = +input.split(' ').join('');
    if (!isNaN(isNum)) {
      alert('Не цифры');
      return false;
    }
    // Преобразовать в массив и проверить кол-во
    let arrFromInput = input.split(' ');
    if (arrFromInput.length != 2) {
      alert('Не меньше и не больше 2 слов');
      return false;
    }
    return true;
  }

  function isUserExists(user) {
    let res = false;
    // Проверка на существующие записи в массиве
    users.forEach((item) => {
      let first = item.split(' ')[0];
      let last = item.split(' ')[1];
      if (first == user.firstName && last == user.lastName) res = true;
    });
    return res;
  }

  function getAllUsers() {
    alert(users);
  }

  while (true) {
    let fullUserName = prompt('Введите имя и фамилию, через пробел.');

    if (fullUserName == null) return getAllUsers();

    if (checkValidInput(fullUserName)) {
      let newUser = new User(fullUserName);

      if (isUserExists(newUser)) {
        alert('Такой пользователь существует');
      } else {
        let addUserInUsers = newUser.addNewUser();
        users.push(addUserInUsers);
      }
    }
  }
}

UserList();
