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

function displayBook() {

}

function showForm() {
    document.getElementById("bookForm").style.display = "block";
}

function hideForm() {
    document.getElementById("bookForm").style.display = "none";
}

const addBtn = document.querySelector(".button-add");

addBtn.addEventListener("click", showForm);