let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {

}

function showForm() {
    document.getElementById("bookForm").style.display = "block";
}

function hideForm() {
    document.getElementById("bookForm").style.display = "none";
}

const addBtn = document.querySelector(".button-add");

addBtn.addEventListener("click", showForm);