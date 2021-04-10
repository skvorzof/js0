const gol = $('#gol');

const ball = $('.ball');
ball.on('click', move);

const ballWidth = ball.width();
const ballHeight = ball.height();

const height = $('.field').height();
const width = $('.field').width();

const gate = height / 2; // Место для ворот

function rand() {
  return Math.floor(Math.random() * (height - ballHeight));
}

function move() {
  let hit = width - ballWidth; // растояние полёта мяча x
  let left = ball.position().left; // координаты x
  let randHeight = rand(); // рандом y

  // Направление удара x
  if (left > width / 2) hit = 0;

  // Анимация мяча x, y
  ball.animate({
    left: hit,
    top: randHeight,
  });

  // Размер ворот - 2 мяча
  if (randHeight > gate - ballHeight && randHeight < gate + ballHeight) {
    gol.text('Ура гол 🥳').fadeIn(500).delay(1000).fadeOut(500); // Анимация забитого гола
  }
}
