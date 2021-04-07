'use strict';

const defaultContent = `<p>
Товарищи! консультация с широким активом играет важную роль в
формировании позиций, занимаемых участниками в отношении поставленных
задач. Равным образом дальнейшее развитие различных форм деятельности
требуют от нас анализа новых предложений.
</p>`;

const content = document.querySelector('.content');
const btnEdit = document.querySelector('.btn_edit');
const btnSave = document.querySelector('.btn_save');
const btnDel = document.querySelector('.btn_del');
const btnExit = document.querySelector('.btn_exit');
const select = document.getElementById('select');

btnEdit.addEventListener('click', editContent);
btnSave.addEventListener('click', saveContent);
btnDel.addEventListener('click', delContent);
btnExit.addEventListener('click', exit);
select.addEventListener('change', changeSelect);

const arr = []; // array ключей редакций контента
let curKey = null;

// Получаем сортированные ключи из localStorage
function getKeys() {
  let length = localStorage.length;

  // Заполняем массив ключами из localStorage
  for (let i = 0; i < length; i++) {
    arr.push(localStorage.key(i));
  }
  // Сортируем по времени добавления в localStorage
  arr.sort((a, b) => a - b);
}

function getDataStore(key) {
  //Если key не задан берём последний key из localStorage
  !key ? (key = arr[arr.length - 1]) : key;

  // Записываем в контент значение key из localStorage
  // Если localStorage пустой, присваиваем  default значение
  let dataStore = localStorage.getItem(key) || defaultContent;
  curKey = key; // Key для удаления
  content.innerHTML = dataStore;
}

function editContent() {
  content.contentEditable = true;
  content.style.background = 'ivory';
  btnEdit.disabled = true;
  select.disabled = true;
  btnSave.style.display = 'inline';
  btnDel.style.display = 'inline';
  btnExit.style.display = 'inline';
}

function exit() {
  location.reload(); // 🤢
}

function saveContent() {
  localStorage.setItem(Date.now(), content.innerHTML);

  content.contentEditable = false;
  content.style.background = 'white';
  btnSave.style.display = 'none';
  btnDel.style.display = 'none';
  btnExit.style.display = 'none';
  btnEdit.disabled = false;
  select.disabled = false;

  location.reload(); // 🤢
}

function createSelectOptions() {
  // Заполняем select
  let options = arr.map((el, index) => {
    // Последний элемент selected
    let sel = index + 1 == arr.length ? 'selected' : '';
    let opt = `<option ${sel} value=${el}>Редакция ${index + 1}</option>`;
    return opt;
  });
  select.innerHTML = options;
}

function changeSelect() {
  getDataStore(this.value);
}

function delContent() {
  localStorage.removeItem(curKey);
  location.reload(); // 🤢
}

getKeys();
getDataStore();
createSelectOptions();
