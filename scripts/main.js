let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;                               // true or false
}

Book.prototype.changeStatus = function() {
    this.read = !this.read;
    // function to be implemented
    // function changes the class name on read button in the DOM node
    // after checking title and author
    // toggleReadBtn(this);
    // displayBook();
}

function createBook(title, author, pages, read) {
    return new Book(title, author, pages, read);
}

function addBookToLibrary(book) {
    if (!checkBookInLibrary(book)) {
        myLibrary.push(book);
    }
    else {
        console.log("Book is already in Library");
    }
}

addBookToLibrary(createBook("Subtle Art of Not Giving a F*ck", "Mark Manson", 224, true));
addBookToLibrary(createBook("Grokking Algorithms", "Aditya", 256, false));
addBookToLibrary(createBook("Beautiful World, Where Are You", "Sally Rooney", 250, false));
displayBook();

function displayBook() {
    const libLen = myLibrary.length;
    const libContainer = document.querySelector('.library-display');
    libContainer.innerHTML = "";

    for (let i = 0; i < libLen; i++) {
        const card = document.createElement('div');
        const titleText = document.createElement('h3');
        const authorText = document.createElement('span');
        const pagesText = document.createElement('span');
        const readBtn = document.createElement('button');
        const delBtn = document.createElement('button');

        const currBook = myLibrary[i];

        titleText.textContent = currBook.title;
        authorText.textContent = currBook.author;
        pagesText.textContent = currBook.pages;
        readBtn.textContent = (currBook.read == true) ? 'Read' : 'Not Read';
        // myLibrary[i].read == 'yes' ? readBtn.classList.add('read-btn') : readBtn.classList.add('not-read-btn');
        readBtn.classList.add((currBook.read == true) ? 'read-btn' : 'not-read-btn');
        delBtn.textContent = 'Remove';
        delBtn.classList.add('del-btn');

        readBtn.addEventListener('click',currBook.changeStatus.bind(currBook));
        // delBtn.addEventListener('click', )

        card.appendChild(titleText);
        card.appendChild(authorText);
        card.appendChild(pagesText);
        card.appendChild(readBtn);
        card.appendChild(delBtn);

        libContainer.appendChild(card);
    }
}

function showForm() {
    document.getElementById("add-form").reset();
    document.getElementById("bookForm").style.display = "block";
}

function hideForm() {
    document.getElementById("bookForm").style.display = "none";
}

function checkBookInLibrary(book) {
    if (myLibrary.length == 0) return false;
    const isInLibrary = myLibrary.some(someBook => (someBook.title === book.title) && (someBook.author === book.author));
    return isInLibrary;
}

function getBookDetails() {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = Number(document.getElementById("pages").value);
    const isRead = document.getElementById("read").checked;

    const book = createBook(title, author, pages, isRead);
    return book;
}

function submitForm(event) {
    event.preventDefault();

    const tempBook = getBookDetails();
    addBookToLibrary(tempBook);

    displayBook();

    hideForm();
}

const addBtn = document.querySelector(".button-add");
const addBookForm = document.querySelector("#add-form");

addBtn.addEventListener("click", showForm);
addBookForm.addEventListener("submit", submitForm);
