const myLibrary = [];

const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const bookPages = document.querySelector('#no_of_pages');
const bookRead = document.querySelector('#hasRead');

const dialogBox = document.querySelector('dialog');
const showBtn = document.querySelector('dialog + .addBookBtn');
const closeBtn = document.querySelector('#close');


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

// function addBookToLibrary() {
function addBookToLibrary( title, author, no_of_pages, read ) {
  // do stuff here
//   const newBook = new Book(bookTitle.value, bookAuthor.value, bookPages.value, bookRead.value );
  const newBook = new Book(title, author, no_of_pages, read);

  myLibrary.push(newBook);
//   displayBookCard();
}

// function displayBookCard(){

// }

// addBookToLibrary("abc", "xyz", 234, false);
// addBookToLibrary("book", "John", 545, true);
// addBookToLibrary("Hey", "Adam", 145, true);

// console.log(myLibrary);

function display(){
    for(let i=0; i<myLibrary.length; i++){
        // console.log(myLibrary[i].title);
        // console.log(myLibrary[i].author);
        // console.log(myLibrary[i].no_of_pages);
        // console.log(myLibrary[i].read);
        // console.log();
    }
}

display();
