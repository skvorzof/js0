'use strict';

let url = 'https://swapi.dev/api/people/'; // 🤢

const input = document.querySelector('#person_search_input');
const select = document.querySelector('#category_search_input');
const btnSearch = document.querySelector('#search_request_btn');
const ul = document.querySelector('.search_result');

const nameItem = document.querySelector('#name');
const heightItem = document.querySelector('#height');
const massItem = document.querySelector('#mass');
const birthItem = document.querySelector('#birth_year');
const filmsItem = document.querySelector('#films_count');

select.addEventListener('change', setCategory);
btnSearch.addEventListener('click', search);

async function apiFetch(url) {
  let response = await fetch(url);
  return response.json();
}

async function createCategorySearch() {
  let category = await apiFetch('https://swapi.dev/api/'); // 🤢
  let option;

  for (const [key, value] of Object.entries(category)) {
    // Временно без категории films (items.title)
    if (key != 'films') option += `<option value=${value}>${key}</option>`;
  }
  select.innerHTML = option;
}

// Выбор категории для поиска
function setCategory() {
  url = this.value;
}

// Поиск
async function search() {
  let query = url + '?search=' + input.value;
  let searchRes = await apiFetch(query);
  let li = '';

  if (searchRes.count == 0) return (ul.innerHTML = 'Ничего нет');

  searchRes.results.forEach((item) => {
    // Вывод объектов в ul, // добавление события onklick 🤢
    li += `<li onclick="selectItem(this)" value="${item.name}">${item.name}</li>`;
  });

  ul.innerHTML = li;
}

// Функция по событию onclick
async function selectItem(item) {
  // Данные переданые в атрибуте value
  let el = item.getAttribute('value');

  let searchRes = await apiFetch(url);

  const res = searchRes.results
    // Фильтр выбранного объекта
    .filter((item) => item.name === el)
    // Заполнение данных объекта
    .map((item) => {
      nameItem.textContent = item.name;
      heightItem.textContent = item.height;
      massItem.textContent = item.mass;
      birthItem.textContent = item.birth_year;
      filmsItem.textContent = item.films.length;
    });
}
createCategorySearch();
