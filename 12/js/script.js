const gol = $('#gol');
const csk = $('#csk');
const zenit = $('#zenit');

const ball = $('.ball');
ball.on('click', move);

const ballWidth = ball.width();
const ballHeight = ball.height();

const height = $('.field').height();
const width = $('.field').width();

const gate = height / 2; // Место для ворот

//ссылки на счётчик
const one = count();
const two = count();

function rand() {
  return Math.floor(Math.random() * (height - ballHeight));
}

// счётчик голов
function count() {
  let cnt = 0;

  return function () {
    return (cnt += 1);
  };
}

function move() {
  let hit = width - ballWidth; // растояние полёта мяча x
  let left = ball.position().left; // координаты x
  let randHeight = rand(); // рандом y

  // Направление удара x
  if (left > width / 2) hit = 0;

  // Анимация мяча x, y
  ball.animate(
    {
      left: hit,
      top: randHeight,
    },
    {
      duration: 800,
      step: function (now) {
        $(this).css({ transform: 'rotate(' + now * 5 + 'deg)' });
      },
    }
  );

  // Размер ворот - 2 мяча
  if (randHeight > gate - ballHeight && randHeight < gate + ballHeight) {
    // Счёт голов
    left > 0 ? csk.text(one) : zenit.text(two);

    gol.text('Ура гол 🥳').fadeIn(500).delay(1000).fadeOut(500); // Анимация забитого гола
  }
}
