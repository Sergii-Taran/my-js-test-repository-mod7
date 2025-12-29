// const categoriesList = document.getElementById('categories');
// const categoriesItem = categoriesList.querySelectorAll('.item');

// console.log(`Number of categories: ${categoriesItem.length}`);

// categoriesItem.forEach((item) => {
//   const categoryTitle = item.querySelector('h2').textContent;
//   const elementsCount = item.querySelectorAll('ul > li').length;

//   console.log(`Category: ${categoryTitle}`);
//   console.log(`Elements: ${elementsCount}`);
// });

// --------------------- //

// const categoriesList = document.querySelector('#categories');
// const categoryItems = categoriesList.querySelectorAll('.item');

// console.log(`Number of categories: ${categoryItems.length}`);

// categoryItems.forEach((item) => {
//   const categoryTitle = item.querySelector('h2').textContent;
//   const itemsCount = item.querySelectorAll('li').length;

//   console.log(`Category: ${categoryTitle}`);
//   console.log(`Elements: ${itemsCount}`);
// });

// --------------------- //

const categoriesList = document.querySelector('#categories');
const categoryItems = categoriesList.querySelectorAll('.item');

console.log(`Number of categories: ${categoryItems.length}`);

for (let i = 0; i < categoryItems.length; i++) {
  const item = categoryItems[i];

  const categoryTitle = item.querySelector('h2').textContent;
  const itemsCount = item.querySelectorAll('li').length;

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${itemsCount}`);
}
