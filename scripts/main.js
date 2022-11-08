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
}

function addBookToLibrary(title, author, pages, read) {
    const tempBook = new Book(title, author, pages, read);
    myLibrary.push(tempBook);
}

addBookToLibrary("Subtle Art of Not Giving a F*ck", "Mark Manson", 224, true);
addBookToLibrary("Grokking Algorithms", "Aditya", 256, false);
addBookToLibrary("Beautiful World, Where Are You", "Sally Rooney", 250, false);
displayBook();

function displayBook() {
    const libLen = myLibrary.length;
    const libContainer = document.querySelector('.library-display');

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

        card.appendChild(titleText);
        card.appendChild(authorText);
        card.appendChild(pagesText);
        card.appendChild(readBtn);
        card.appendChild(delBtn);

        libContainer.appendChild(card);
    }
}

function showForm() {
    document.getElementById("bookForm").style.display = "block";
}

function hideForm() {
    document.getElementById("bookForm").style.display = "none";
}

const addBtn = document.querySelector(".button-add");

addBtn.addEventListener("click", showForm);