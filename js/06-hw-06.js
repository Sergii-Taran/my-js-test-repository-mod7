// const inputEl = document.querySelector('input');
// const createEl = document.querySelector('button[data-create]');
// const destroyEl = document.querySelector('button[data-destroy]');
// const boxesEl = document.querySelector('#boxes');

// let sizes = 30;

// createEl.addEventListener('click', createMarkup);
// destroyEl.addEventListener('click', () => {
//   inputEl.value = '';
//   clear();
// });

// function createMarkup() {
//   if (inputEl.value < 1 || inputEl.value > 100) {
//     return;
//   }

//   createBoxes(inputEl.value);
// }

// function clear() {
//   boxesEl.innerHTML = '';
//   sizes = 30;
// }

// function createBoxes(amount) {
//   clear();

//   for (let i = 0; i < amount; i++) {
//     const box = document.createElement('div');
//     box.style.width = `${sizes}px`;
//     box.style.height = `${sizes}px`;
//     box.style.backgroundColor = getRandomHexColor();

//     console.log(box);

//     boxesEl.append(box);
//     sizes += 10;
//   }
// }

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// =================================

const input = document.querySelector('input');
const create = document.querySelector('button[data-create]');
const destroy = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

create.addEventListener('click', onCreate);
destroy.addEventListener('click', destroyBoxes);

function onCreate() {
  const amount = Number(input.value);

  if (amount < 1 || amount > 100) {
    alert('Enter a number from 1 to 100');
    return;
  }

  createBoxes(amount);
  input.value = '';
}

function createBoxes(amount) {
  destroyBoxes();

  let size = 30;
  let markup = '';

  for (let i = 0; i < amount; i++) {
    const color = getRandomHexColor();
    markup += `<div class="box" style="
          width: ${size}px;
          height: ${size}px;
          background-color: ${color};
        "></div>`;
    size += 10;
  }

  boxes.insertAdjacentHTML('beforeend', markup);
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
