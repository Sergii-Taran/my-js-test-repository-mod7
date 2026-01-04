const films = [
  {
    title: 'Tetris',
    imgUrl: 'https://static.hdrezka.ac/i/2023/3/20/f509264b419fdmu53x38j.jpg',
    id: 'film_1',
  },
  {
    title: 'Avatar: The Way of Water',
    imgUrl: 'https://static.hdrezka.ac/i/2022/12/22/tc5e6b8212683gn66r84s.jpg',
    id: 'film_2',
  },
  {
    title: 'Operation Fortune: Ruse de guerre',
    imgUrl: 'https://static.hdrezka.ac/i/2022/2/11/s0d53f6cf0ae0tq29m85l.jpg',
    id: 'film_3',
  },
  {
    title: 'Babylon',
    imgUrl: 'https://static.hdrezka.ac/i/2022/12/25/z330b47a82209ww99w55a.jpg',
    id: 'film_4',
  },
  {
    title: 'The Whale',
    imgUrl: 'https://static.hdrezka.ac/i/2023/2/24/h23d8c65d734akd89q94c.jpg',
    id: 'film_5',
  },
];

const watchedFilms = ['film_2', 'film_4', 'film_5'];

// function createMarkup(arr) {
//   return arr
//     .map(
//       (item) =>
//         `<li id="${item.id}">
//       <img src="${item.imgUrl}" alt="${item.title}" />
//       <p>${item.title}</p>
//     </li>`
//     )
//     .join('');
// }

// const filmlistEl = document.querySelector('.film-list');
// filmlistEl.innerHTML = createMarkup(films);

// watchedFilms.forEach((item) => {
//   const film = filmlistEl.querySelector(`#${item}`);
//   film.style.opacity = 0.5;
// });

// ====================================== //

function createMarkup(arr) {
  return arr
    .map(
      ({ title, imgUrl, id }) =>
        `
    <li class="film-item" data-id="${id}">
    <img src="${imgUrl}" alt="${title}">
    <p>${title}</p>
    </li>
    `
    )
    .join('');
}

const filmListEl = document.querySelector('.film-list');
filmListEl.insertAdjacentHTML('beforeend', createMarkup(films));

watchedFilms.forEach((id) => {
  const film = filmListEl.querySelector(`[data-id="${id}"]`);
  if (film) {
    film.style.opacity = '0.5';
  }
});

// ====================================== //

// const watchedFilms = new Set(['film_2', 'film_4']);

// const filmListEl = document.querySelector('.film-list');
