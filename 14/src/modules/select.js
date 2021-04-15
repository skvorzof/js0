import './select.css';

function select(arr) {
  const sel = document.createElement('select');
  arr.forEach((el) => {
    sel.innerHTML += '<option>' + el + '</option>';
  });
  return sel;
}

export default select;
