const btn = document.querySelector('.js-click');
const box = document.querySelector('.js-box');

btn.addEventListener('click', handleClick);

let step = 0;

function handleClick() {
  step += 50;
  box.style.marginTop = `${step}px`;
  box.style.marginLeft = `${step}px`;
}
