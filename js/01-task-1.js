const categoriesList = document.getElementById('categories');
const categoriesItem = categoriesList.querySelectorAll('.item');

console.log(`Number of categories: ${categoriesItem.length}`);

categoriesItem.forEach((item) => {
  const categoryTitle = item.querySelector('h2').textContent;
  const elementsCount = item.querySelectorAll('ul > li').length;

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${elementsCount}`);
});
