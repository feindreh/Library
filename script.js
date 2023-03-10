/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */
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
    if (book === '') { continue; }
    const div = getDivFromBook(book);
    document.getElementById('book-shelf').appendChild(div);
  }
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

  const { id } = book;

  const deleteButton = document.createElement('button');
  deleteButton.className = 'deleteButton';
  deleteButton.innerHTML = 'delete Book';
  deleteButton.setAttribute('type', 'button');
  deleteButton.addEventListener('click', () => { deleteBook(id); });

  const readButton = document.createElement('button');
  readButton.className = 'readButton';
  readButton.innerHTML = 'change read status';
  readButton.setAttribute('type', 'button');
  readButton.addEventListener('click', () => { changeRead(id); });

  div.append(pTitle, pAuthor, pPages, pRead, readButton, deleteButton);

  return div;
}

function addBook(title, author, pages, read) {
  // add a book to the library
  let id = myLibrary.length + 1;
  for (let i = 0; i < myLibrary.length; i++) {
    if (myLibrary[i] === '') { id = i + 1; break; }
  }

  const book = new Book(title, author, pages, read, id);

  myLibrary[id - 1] = book;

  displayLibrary();
}

function deleteBook(id) {
  myLibrary.splice(id - 1, 1, '');
  displayLibrary();
}

function makeBookFromInputs() {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const read = document.getElementById('read').checked;

  addBook(title, author, pages, read);
}

function changeRead(id) {
  for (let i = 0; i < myLibrary.length; i++) {
    if (myLibrary[i].id === id) {
      if (myLibrary[i].read === true) { myLibrary[i].read = false; } else if (myLibrary[i].read === false) { myLibrary[i].read = true; }
    }
  }

  displayLibrary();
}

function openPrompt() {
  const inputs = document.querySelector('#input');
  inputs.style.visibility = 'visible';

  const blackBox = document.querySelector('#blackbox');
  blackBox.style.visibility = 'visible';
}

function closePrompt() {
  const inputs = document.querySelector('#input');
  inputs.style.visibility = 'hidden';

  const blackBox = document.querySelector('#blackbox');
  blackBox.style.visibility = 'hidden';
}

function resetInputs() {
  document.getElementById('title').value = '';
  document.getElementById('title').className = '';
  document.getElementById('author').value = '';
  document.getElementById('author').className = '';
  document.getElementById('pages').value = '';
  document.getElementById('pages').className = '';
  document.getElementById('read').checked = false;
}

function checkInputs() {
  const title = document.querySelector('#title');
  const author = document.querySelector('#author');
  const pages = document.querySelector('#pages');
  if (checkValid(title) === false) { return false; }
  if (checkValid(author) === false) { return false; }
  if (checkValid(pages) === false) { return false; }
  return true;
}

function checkValid(node) {
  if (checkEmpty(node) === false) { return false; }
  return true;
}

function checkEmpty(node) {
  if (node.value === '') {
    node.className = 'error';
    node.previousElementSibling.innerText = 'Is required';
    return false;
  }
  node.className = '';
  node.previousElementSibling.innerText = '';
  return true;
}

const newBookButton = document.querySelector('#Add');
newBookButton.addEventListener('click', () => {
  openPrompt();
});

const makeBookButton = document.querySelector('#makeButton');
makeBookButton.addEventListener('click', () => {
  if (checkInputs()) {
    makeBookFromInputs();
    resetInputs();
    closePrompt();
  }
});

const cancelButton = document.querySelector('#cancelButton');
cancelButton.addEventListener('click', () => {
  closePrompt();
  resetInputs();
});

const inputs = document.querySelectorAll('#input input');
inputs.forEach((input) => input.addEventListener('input', (e) => { checkValid(e.target); }));
