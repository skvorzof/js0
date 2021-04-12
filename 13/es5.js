let todoList = document.getElementById('todo_list');

let form = document.querySelector('form');
form.addEventListener('submit', sendForm);

function getTodos() {
  let count = todoList.children.length + 1; // Кол-во <li>
  todoList.style.counterReset = 'cnt ' + count;

  let todos = document.querySelectorAll('#todo_list li');

  for (let i = 0; i < todos.length; i++) {
    todos[i].addEventListener('click', doneTodo);
  }
}

getTodos(); // Получить список totoList

function sendForm(e) {
  e.preventDefault();

  let todo = e.target[0].value.trim();

  // Проверка на пустую запись
  if (todo == '') {
    alert('Поле не должно быть пустым ✍️');
  } else if (isTodoExist(todo)) {
    alert('Запись существует 🤓');
  } else {
    addNewTodo(todo);
  }
  e.target[0].value = ''; // Очистить input
}

function addNewTodo(todo) {
  let el = document.createElement('li');
  el.textContent = todo;
  todoList.prepend(el); // Добавить новый todo в начало списка

  getTodos(); // Обновить список totoList
}

function doneTodo() {
  this.classList.toggle('done');
}

function isTodoExist(todo) {
  let res = false;
  let arrTodos = [];
  let li = document.querySelectorAll('#todo_list li');

  for (let i = 0; i < li.length; i++) {
    arrTodos.push(li[i]);
  }

  for (let i = 0; i < arrTodos.length; i++) {
    if (arrTodos[i].outerText == todo) res = true;
  }

  return res;
}
