/* eslint-disable no-restricted-syntax */
const myLibrary = [];

function Book(title, author, pages, read) {
  // constructor
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBook(title, author, pages, read) {
  // add a book to the library
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

function displayLibrary() {
  // loop through library and render the books
  document.getElementById('book-shelf').innerHTML = '';
  for (const book of myLibrary) {
    const div = document.createElement('div');
    for (const part in book) {
      div.innerText += `${book[part]}`;
    }
    document.getElementById('book-shelf').appendChild(div);
  }
}

const Launch = document.querySelector('#Launch');
Launch.addEventListener('click', () => { displayLibrary(); });

addBook('harry', 'JRK', 185, 'true');
addBook('Hobit', 'Tolkien', 385, 'true');
addBook('1984', 'George', 125, 'false');
