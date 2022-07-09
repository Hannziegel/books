// Books array for the book objects with two methods, add book and remove book

export default class Books {
  constructor() {
    this.books = [];
  }

  addBook = (book) => this.books.push(book);

  removeBook = (bookTitle) => {
    this.books = this.books.filter((book) => book.title !== bookTitle);
  };
}