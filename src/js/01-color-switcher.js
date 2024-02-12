const bodyChangeColor = document.querySelector('body');
const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');

let intervalId = null;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

buttonStop.disabled = true;
// buttonStop.setAttribute('disabled', '');

buttonStart.addEventListener('click', element => {
    buttonStart.disabled = true;
    buttonStop.disabled = false;

  intervalId = setInterval(() => {
    bodyChangeColor.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

buttonStop.addEventListener('click', element => {
    buttonStop.disabled = true;
    buttonStart.disabled = false;

  clearInterval(intervalId);
});
