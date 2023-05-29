const refs = {
  btnStart: document.querySelector('button[data-start]'),
  btnStop: document.querySelector('button[data-stop]'),
  body: document.body,
}

const delay = 1000;
let timerId = null;

// генерация цвета
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

// добавляет рандомный цвет на body
function setBodyColor() {
  refs.body.style.backgroundColor = getRandomHexColor();
};


// обработка событий
refs.btnStart.addEventListener('click', startBtnHandler);
refs.btnStop.addEventListener('click', stopBtnHandler);

function startBtnHandler() {
  timerId = setInterval(setBodyColor, delay);
  refs.btnStart.disabled = true;
};
function stopBtnHandler() {
  clearInterval(timerId);
  refs.btnStart.disabled = false;
};