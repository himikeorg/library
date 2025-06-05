const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    newBook.id = crypto.randomUUID();
    myLibrary.push(newBook);
}

// Loop through array, display each book
function displayBooks() {
    for (const element of myLibrary) {
        const newDiv = document.createElement("div");
        const newContent = document.createTextNode(element.title + " by " + element.author);
        newDiv.appendChild(newContent);
        document.querySelector("body").appendChild(newDiv);
    }
}

// New Book button opens modal dialog
// ADD closing the modal as well.

const dialog = document.querySelector("dialog");
const newBook = document.querySelector("dialog + button");

newBook.addEventListener("click", () => {
    dialog.showModal();
});

// Stop submit button from submitting form

const btn = document.querySelector("#btn");
btn.addEventListener("click", (event) => {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.querySelector('input[name="read"]:checked').value;
    addBookToLibrary(title, author, pages, read);
    document.getElementById("book-form").reset();
    dialog.close();
});

// Next problem 
// How do I take the values from the form to create books?


