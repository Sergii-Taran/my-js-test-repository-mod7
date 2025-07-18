const box = document.querySelector('.js-box');

// box.addEventListener('mouseenter', onMouseEnter);
// box.addEventListener('mouseleave', onMouseLeave);

// function onMouseEnter() {
//   console.log('onMouseEnter');
// }
// function onMouseLeave() {
//   console.log('onMouseLeave');
// }

// =============================

// box.addEventListener('mouseover', onMouseOver);
// box.addEventListener('mouseout', onMouseOut);

// function onMouseOver() {
//   console.log('onMouseOver');
// }

// function onMouseOut() {
//   console.log('onMouseOut');
// }

// ===========================

box.addEventListener('mousemove', onMouseMove);

function onMouseMove(event) {
  console.log(event);
}
