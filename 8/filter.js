'use strict';

function filterByType(type, ...arg) {
  let filterEl = typeof type; // определить тип фильтрации

  let arr = Array.prototype.slice.call(arg);
  return arr.filter((i) => typeof i === filterEl);
}

console.log(filterByType('string', 10, 20, 'a', 'b', true, false));
