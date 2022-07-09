import Book from './modules/Book.js';
import Books from './modules/Books.js';
import showSection from './modules/Sections.js';
import { DateTime } from './modules/luxon.js';

/* ----------========== DECLARATIONS ==========---------- */
// global declarations
const booksList = new Books();
const booksSection = document.getElementById('booksContainer');
// show hide sections declarations
const listLink = document.getElementById('listLink');
const addLink = document.getElementById('addBookLink');
const contactLink = document.getElementById('contactLink');
const bookListSection = document.getElementById('booksSection');
const addBookSection = document.getElementById('addBookSection');
const contactSection = document.getElementById('contactSection');
// add button declarations
const addButton = document.getElementById('addBookButton');
const titleInput = document.getElementById('titleInput');
const authorInput = document.getElementById('authorInput');
// Date declarations
/* const date = document.getElementById('date'); */

/* ----------========== CREATE HTML ELEMENTS ==========---------- */
// creates individual book
const createBookHtml = (title, author) => {
  // create html elements
  const bookCard = document.createElement('article');
  const bookCardUl = document.createElement('ul');
  const bookCardLine = document.createElement('div');
  const bookInfoContainer = document.createElement('div');
  const bookTitle = document.createElement('li');
  const bookAuthor = document.createElement('li');
  const bookRemoveButton = document.createElement('button');

  // add classes and ids
  bookCard.classList.add('bookCard');
  bookCardLine.classList.add('line');
  bookCardUl.classList.add('book');
  bookInfoContainer.classList.add('bookInfoContainer');
  bookRemoveButton.classList.add('removeButton');

  // remove button functionality
  bookRemoveButton.addEventListener('click', () => {
    bookCard.remove();
    booksList.removeBook(title);
    localStorage.setItem('data', JSON.stringify(booksList.books));
  });

  // add content
  bookTitle.textContent = title;
  bookAuthor.textContent = `by ${author}`;
  bookRemoveButton.textContent = 'remove';

  // append
  booksSection.appendChild(bookCard);
  bookCard.append(bookCardUl, bookCardLine);
  bookCardUl.append(bookInfoContainer, bookRemoveButton);
  bookInfoContainer.append(bookTitle, bookAuthor);
};

// creates all books on html
const createBooksListHtml = () => {
  booksList.books.forEach((element) => {
    createBookHtml(element.title, element.author);
  });
};

// Add date time
document.getElementById('date').textContent = DateTime.now();

/* ----------========== WHEN PAGE IS LOAD PAGE GET LOCALSTORAGE ==========---------- */

if (localStorage.getItem('data') !== null) {
  booksList.books = JSON.parse(localStorage.getItem('data'));
  createBooksListHtml();
} else {
  booksList.books = [];
}

/* ----------========== ADD BOOK ==========---------- */

addButton.addEventListener('click', () => {
  createBookHtml(titleInput.value, authorInput.value);
  booksList.addBook(new Book(titleInput.value, authorInput.value));
  localStorage.setItem('data', JSON.stringify(booksList.books));
});

/* ----------========== SHOW / HIDE SECTIONS ==========---------- */

listLink.addEventListener('click', () => {
  showSection(bookListSection, addBookSection, contactSection);
});

addLink.addEventListener('click', () => {
  showSection(addBookSection, bookListSection, contactSection);
});

contactLink.addEventListener('click', () => {
  showSection(contactSection, bookListSection, addBookSection);
});