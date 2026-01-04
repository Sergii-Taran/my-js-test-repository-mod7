const randomNumber = (number) => Math.floor(Math.random() * number) + 1;

const userContainer = document.querySelector('.input-wrapper');
const inputEl = document.querySelector('.number-input');
const btnEl = document.querySelector('.number-btn');

const container = document.createElement('div');
container.classList.add('number-container');

btnEl.addEventListener('click', (event) => {
  const blocks = Number(inputEl.value.trim());

  container.innerHTML = '';

  for (let i = 0; i < blocks; i++) {
    const divEl = document.createElement('div');
    divEl.classList.add('number');
    divEl.textContent = randomNumber(blocks);
    if (divEl.textContent % 2 === 0) {
      divEl.classList.add('even');
    } else {
      divEl.classList.add('odd');
    }
    container.appendChild(divEl);
  }
});

// bodyEl.insertAdjacentHTML('beforebegin', container); - не працює через createElement

userContainer.after(container);

// ====================================
