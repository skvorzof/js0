import './button.css';

let count = 0;
const button = document.createElement('button');

button.textContent = 'Жми';

button.addEventListener('click', counter);

function label(cnt) {
  let count = cnt;

  cnt %= 100; // 5-20
  if (cnt >= 5 && cnt <= 20) return count + ' кликов';

  cnt %= 10; // 1,11,21
  if (cnt === 1) return count + ' клик';

  if (cnt >= 2 && cnt <= 4) return count + ' клика'; // 2-4,

  return count + ' кликов'; // 0,25,...
}

function counter() {
  button.textContent = label(count++);
}

export default button;
