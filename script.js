const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: false,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

/*
//DESTRUCTURING

const book = getBook(3);
book;
// const title = book.title;
// const author = book.author;
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;
title;
author;
console.log(author, title, genres);

// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];
// console.log(primaryGenre, secondaryGenre);
genres;

//REST
const [primaryGenre, secondaryGenre, ...otherGenres] = genres;
console.log(primaryGenre, secondaryGenre, otherGenres);

//SPREAD
const newGenres = ["epicFantasy", ...genres];
console.log(newGenres);

const updatedBook = {
  //Spread
  ...book,
  //adding a new property
  moviePublication: "2001-12-19",
  //modifying an existing property
  pages: 1200,
};
updatedBook;

//ARROW FUNCTION

// function getYear(str) {
//   return str.split("-")[0];
// }

const getYear = (str) => str.split("-")[0];
console.log(getYear(publicationDate));

//TEMPLATE LITERALS
const summary = `${title}, a ${pages}-page long book by ${author} and published in ${getYear(
  publicationDate
)}. The book has ${hasMovieAdaptation ? "" : "not"} been adabted as a movie`;
summary;

//TERNARY OPERATOR
const pagesRange =
  pages > 1000 ? "over one thousand" : "less than one thousand";
pagesRange;
console.log(`The book has ${pagesRange} pages`);

//SHORT CIRCUIT

console.log(true && "some string"); // && looks for false to return. && returns the last one if everything is true
console.log("some string" && true);
console.log(false && "some string");

console.log(hasMovieAdaptation && "has movie adaptation");

//falsy values:    0, '', null, undefined
//truety values:    everything else aside falsy value

console.log("jonas" && "some string");
console.log(0 && "some string");

console.log(true || "some string"); // || looks for true to return. here short cuit occurs when the first value is 'true', it does even check the other value(s)
console.log(false || "some string");

console.log(book.translations.spanish);
const spanishTranslation = book.translations.spanish || "NOT TRANSLATED";
spanishTranslation;
//this immediate above example can also go wrong, lets see an example below

console.log(book.reviews?.librarything?.reviewsCount);
const countWrong = book.reviews?.librarything?.reviewsCount || "no data";
countWrong;
//solution is 👇
//nullish coalescing '??'
const count = book.reviews?.librarything?.reviewsCount ?? "no data";
count;
//nullish coalescing '??' will only return the second value when the first is 'null' or 'undefined'

//OPTIONAL CHAINING



console.log(getTotalReviewCount(book));
*/

/*
// THE ARRAY MAP METHOD -
// perform this action on all elements in an
// array then give the results in another array

const books = getBooks();

const x = [1, 2, 3, 4].map((el) => el * 2);
console.log(x);

const title = books.map((book) => book.title);
console.log(title);

const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalReviewCount(book),
}));
console.log(essentialData);

function getTotalReviewCount(book) {
  const goodreads = book.reviews?.goodreads?.reviewsCount ?? 0;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  return goodreads + librarything;
}

//THE ARRAY FILTER METHOD -
// create an array of all the elements
// that meets a certain criterial

const longBooksWithMovie = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
console.log(longBooksWithMovie);

const adventureBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);
console.log(adventureBooks);

//THE REDUCE METHOD

const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0);
console.log(pagesAllBooks);

//THE ARRAY SORT METHOD
const arr = [3, 7, 1, 9, 6];
const sorted = arr.slice().sort((a, b) => a - b);
console.log(sorted);
arr;

const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);
console.log(sortedByPages);

// WORKING WITH IMMUTABLE ARRAY (mostly in React)

// 1) Add book object to array
const newBook = {
  id: 6,
  title: "Harry Potter and The Chamber of Secrets",
  author: "J. K. Rowling",
};

const booksAfterAdd = [...books, newBook];
console.log(booksAfterAdd);

// 2) Delete a book object from array (an array of objects, lets delete an object)
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
console.log(booksAfterDelete);

// 3) Update a book object in the array
const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 1 } : book
);
console.log(booksAfterUpdate);
*/

//ASYNCHRONOUS JAVASCRIPT - PROMISES
//ususally use to fetch data from an external api using the fetch()

fetch("https://jsonplaceholder.typicode.com/todos");
// js fetch the data but needs to wait for http request before
// getting the data, so the fetch returns a Promise
console.log(fetch("https://jsonplaceholder.typicode.com/todos"));

fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
  res.json().then((data) => console.log(data))
);

// then() is use to wait for the data from promise, this initial data needs to the coverted to json()
// .json() is also an asynchrous operation so it returns a Promise
// so another then() is needed to wait for the data
