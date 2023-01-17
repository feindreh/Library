/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
const myLibrary = [];

function Book(title, author, pages, read, id) {
  // constructor
  this.id = id;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function displayLibrary() {
  // loop through library and render the books
  document.getElementById('book-shelf').innerHTML = '';
  for (const book of myLibrary) {
    const div = getDivFromBook(book);
    document.getElementById('book-shelf').appendChild(div);
  }
}

function addBook(title, author, pages, read) {
  // add a book to the library
  const id = myLibrary.length + 1;
  const book = new Book(title, author, pages, read, id);

  myLibrary.push(book);

  displayLibrary();
}

function getDivFromBook(book) {
  // getDivFromBook
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

  const deleteButton = document.createElement('button');
  deleteButton.className = 'deleteButton';
  deleteButton.innerHTML = 'delete Book';
  deleteButton.setAttribute('type', 'button');
  const { id } = book;
  deleteButton.addEventListener('click', () => { deleteBook(id); });

  div.append(pTitle, pAuthor, pPages, pRead, deleteButton);

  return div;
}

function deleteBook(id) {
  console.log(id);
  myLibrary.splice(id - 1, 1);
  displayLibrary();
}

function makeBookFromInputs() {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const read = document.getElementById('read').checked;

  addBook(title, author, pages, read);
}

const Launch = document.querySelector('#Launch');
Launch.addEventListener('click', () => { displayLibrary(); });

const newBookButton = document.querySelector('#Add');
newBookButton.addEventListener('click', () => {
  makeBookFromInputs();
});

addBook('harry', 'JRK', 185, 'true');
addBook('Hobit', 'Tolkien', 385, 'true');
addBook('1984', 'George', 125, 'false');
