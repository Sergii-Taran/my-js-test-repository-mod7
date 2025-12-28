// const checkbox = document.querySelector('.js-checkbox');

// checkbox.addEventListener('change', () => {
//   console.log('ok');
// });

// ===============================

// Вивести в консоль все, що користувач вводить в input

// const userName = document.querySelector('.js-user-name');

// userName.addEventListener('input', handleInput);

// function handleInput(event) {
//   console.log(userName.value);
// }

// ==========================

// Користувач вводить в input своє ім'я, після втрати фокусу отримує alert з повідомленням-привітанням

const userName = document.querySelector('.js-user-name');

userName.addEventListener('blur', handleBlur);

// function handleBlur(event) {
//   const name = event.target.value;
//   alert(`Hello, ${name}!`);
// }

// -------------------- //

function handleBlur(event) {
  if (event.target.value.trim() === '') {
    alert('Missing chars');
    return;
  }

  alert(`Welcome onboard, ${event.target.value}`);

  event.target.value = '';
}
