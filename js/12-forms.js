const form = document.querySelector('.js-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const elements = event.currentTarget.elements;

  console.log(elements.email.value);
  //   console.log(elements.password);
  //   console.log(elements.comment);
}
