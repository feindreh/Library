/* eslint-disable guard-for-in */
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

function getDivFromBook(book) {
  const div = document.createElement('div');
  div.style.cssText = 'color: black; background: grey;';

  const pTitle = document.createElement('p');
  pTitle.innerText = `Title: ${book.title}`;

  const pAuthor = document.createElement('p');
  pAuthor.innerText = `Author: ${book.author}`;

  const pPages = document.createElement('p');
  pPages.innerText = `Pages: ${book.pages}`;

  const pRead = document.createElement('p');
  pRead.innerText = `read: ${book.read}`;

  div.append(pTitle, pAuthor, pPages, pRead);

  return div;
}

function displayLibrary() {
  // loop through library and render the books
  document.getElementById('book-shelf').innerHTML = '';
  for (const book of myLibrary) {
    const div = getDivFromBook(book);
    document.getElementById('book-shelf').appendChild(div);
  }
}

const Launch = document.querySelector('#Launch');
Launch.addEventListener('click', () => { displayLibrary(); });

addBook('harry', 'JRK', 185, 'true');
addBook('Hobit', 'Tolkien', 385, 'true');
addBook('1984', 'George', 125, 'false');
