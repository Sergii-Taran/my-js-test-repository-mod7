// const formEl = document.querySelector('.login-form');

// formEl.addEventListener('submit', (event) => {
//   event.preventDefault();

//   const email = formEl.elements.email.value.trim();
//   const password = formEl.elements.password.value.trim();

//   if (!email || !password) {
//     alert('All form fields must be filled in');
//     return;
//   }

//   const formData = {
//     email: email,
//     password: password,
//   };

//   console.log(formData);

//   formEl.reset();
// });

// --------------------- //

// const formEl = document.querySelector('.login-form');

// formEl.addEventListener('submit', handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();

//   const email = formEl.elements.email.value.trim();
//   const password = formEl.elements.password.value.trim();

//   if (!email || !password) {
//     alert('All form fields must be filled in!');
//     return;
//   }

//   const formData = {
//     email: email,
//     password: password,
//   };

//   console.log(formData);

//   formEl.reset();
// }

// --------------------- //

const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (!emailValue || !passwordValue) {
    alert('All form fields must be filled in!');
    return;
  }

  console.log({
    email: emailValue,
    password: passwordValue,
  });

  event.currentTarget.reset();
}
