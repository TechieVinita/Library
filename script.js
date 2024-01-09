let myLibrary = [];

const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const bookPages = document.querySelector('#no_of_pages');
const bookRead = document.querySelector('#hasRead');

const dialogBox = document.querySelector('dialog');
const showBtn = document.querySelector('.showDialogBox >.addBookBtn');
const closeBtn = document.querySelector('#close');

const submitBtn = document.querySelector('#add');
const booksContainer = document.querySelector('.books-container');

submitBtn.addEventListener('click', avoidSubmit, false);

function avoidSubmit(event){
  addBookToLibrary();
  // console.log(myLibrary);
  display();
  dialogBox.close();
  event.preventDefault();
}

showBtn.addEventListener('click', () => {
    dialogBox.showModal();
});

closeBtn.addEventListener('click', () => {
    dialogBox.close();
});

function Book(title, author, no_of_pages, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.no_of_pages = no_of_pages;
  this.read = read;
}

function addBookToLibrary() {
  // do stuff here
  bookTitleValue = bookTitle.value;
  bookAuthorValue = bookAuthor.value;
  bookPagesValue = bookPages.value;
  bookReadValue = Boolean(bookRead.value);

  const newBook = new Book(bookTitleValue, bookAuthorValue, bookPagesValue, bookReadValue );
  myLibrary.push(newBook);
}

function display(){
  const bookCard = document.createElement('div');
  const ul = document.createElement('ul');
  const cancelBtn = document.createElement('button');

  cancelBtn.textContent = 'CANCEL';

  let lastIndex = myLibrary.length - 1;

  const li1 = document.createElement('li');
  li1.textContent = `Book : ${myLibrary[lastIndex].title}`;

  const li2 = document.createElement('li');
  li2.textContent = `Author : ${myLibrary[lastIndex].author}`;

  const li3 = document.createElement('li');
  li3.textContent = `Number of Pages : ${myLibrary[lastIndex].no_of_pages}`;

  const li4 = document.createElement('li');
  li4.textContent = `Has read the book : ${myLibrary[lastIndex].read}`;

  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);
  ul.appendChild(li4);
  ul.appendChild(cancelBtn);

  bookCard.appendChild(ul);
  booksContainer.appendChild(bookCard);

  cancelBtn.addEventListener('click', () => {
    booksContainer.removeChild(bookCard);
  });
}