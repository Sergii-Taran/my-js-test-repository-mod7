const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', () => {
  const inputName = inputEl.value.trim();
  outputEl.textContent = inputName === '' ? 'Anonymous' : inputName;
});

// --------------------- //
