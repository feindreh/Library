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
  const div = document.createElement('div');
  div.innerText = 'it works';
  document.getElementById('book-shelf').appendChild(div);
}

const Launch = document.querySelector('#Launch');
Launch.addEventListener('click', () => { displayLibrary(); });
