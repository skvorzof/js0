'use strict';

let data = [];

let url = 'https://swapi.dev/api/people'; // 🤢

const input = document.querySelector('#person_search_input');
const select = document.querySelector('#category_search_input');
const btnSearch = document.querySelector('#search_request_btn');
const ul = document.querySelector('.search_result');

select.addEventListener('change', setCategory);
btnSearch.addEventListener('click', search);

async function apiFetch(url) {
  let response = await fetch(url);

  if (response.status === 200) return response.json();

  throw new Error(alert('Ошибка сервера 💩 ' + response.status));
}

//Вывод категорий в select
async function createCategorySearch() {
  let category = await apiFetch('https://swapi.dev/api/'); // 🤢
  let option;

  for (const [key, value] of Object.entries(category)) {
    if (key !== 'films') option += `<option value=${value}>${key}</option>`;
  }

  select.innerHTML = option;
}

// Выбор категории для поиска
function setCategory() {
  url = this.value;
}

// Вывод результата поиска в ul > li
async function search() {
  let li = '';
  let query = url + '?search=' + input.value;

  data = await apiFetch(query);

  if (data.count === 0) return (ul.innerHTML = 'Ничего нет 👀');

  data.results.map((item, index) => {
    li += `<li data-index="${index}">${item.name}</li>`;
  });

  ul.innerHTML = li;
}

// Вывод персональнй информации по клику
ul.addEventListener('click', (e) => {
  let target = e.target;
  if (target.tagName !== 'LI' || !target.getAttribute('data-index')) return;

  let targetData = target.getAttribute('data-index');
  targetData = data.results[targetData];

  document.querySelector('#name').textContent = targetData.name;
  document.querySelector('#height').textContent = targetData.height;
  document.querySelector('#mass').textContent = targetData.mass;
  document.querySelector('#birth_year').textContent = targetData.birth_year;
  document.querySelector('#films_count').textContent = targetData.films.length;
});

createCategorySearch();