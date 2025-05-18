

const colorBtn = document.querySelector(`.change-color`);
colorBtn.addEventListener(`click`, setBodyValue);

const colorSpan = document.querySelector(`.color`);

function setBodyValue() {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  colorSpan.textContent = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}