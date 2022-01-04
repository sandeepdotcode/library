let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    const tempBook = new Book(title, author, pages, read);
    myLibrary.push(tempBook);
}

addBookToLibrary("Subtle Art of Not Giving a Fuck", "Mark Manson", 224, "yes");
addBookToLibrary("Grokking Algorithms", "Aditya", 256, "no");
addBookToLibrary("Beautiful World, Where Are You", "Sally Rooney", 250, "no");
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

        titleText.textContent = myLibrary[i].title;
        authorText.textContent = myLibrary[i].author;
        pagesText.textContent = myLibrary[i].pages;
        readBtn.textContent = (myLibrary[i].read == 'yes') ? 'Read' : 'Not Read';
        delBtn.textContent = 'Remove';

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