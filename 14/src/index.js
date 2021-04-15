import button from './modules/button';
import select from './modules/select';
import './index.css';

const city = ['Санкт-Петербург', 'Караганда', 'Москва', 'Переславль-Залесский'];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

let selectCity = select(city);
let selectNum = select(numbers);

document.getElementById('root').appendChild(selectCity);
document.getElementById('root').appendChild(selectNum);

document.getElementById('root').appendChild(button);
