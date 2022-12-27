function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const COLOR_FREQUENCY = 1000;

const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
};

refs.startBtn.addEventListener('click', onStartClick);

function onStartClick(e) {
  const { startBtn, stopBtn } = refs;
  const intervID = setInterval(changeColor, COLOR_FREQUENCY);

  changeColor();
  toggleActiveBtn(stopBtn, startBtn);

  stopBtn.addEventListener('click', onStopClick(intervID), { once: true });
}

function onStopClick(intervID) {
  return function (e) {
    const { startBtn, stopBtn } = refs;

    clearInterval(intervID);
    toggleActiveBtn(startBtn, stopBtn);
  };
}

function changeColor() {
  refs.body.style.backgroundColor = getRandomHexColor();
}

function toggleActiveBtn(activeBtn, inactiveBtn) {
  inactiveBtn.setAttribute('disabled', true);
  activeBtn.removeAttribute('disabled');
}