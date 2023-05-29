const refs = {
  btnStart: document.querySelector('button[adta-action = "start"]'),
  btnStop: document.querySelector('button[adta-action = "stop"]'),
  body: document.body,
}

const delay = 1000;
const interval = null;

// генерация цвета
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

// добавляет рандомный цвет на body
function getBodyColor() {
    return body.style.backgroundColor = getRandomHexColor();
};


// обработка событий
startBtn.addEventListener('click', startBtnHandler);
stopBtn.addEventListener('click', stopBtnHandler);

function startBtnHandler() { };
function stopBtnHandler() { };