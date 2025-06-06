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

// Create a Book prototype function that toggles a books read status
// Button clicked... if book.read === "yes" {book.read = "no"}

Book.prototype.toggleRead = function (i) {
    if (myLibrary[i].read  === "Read") {
        myLibrary[i].read = "Not read";
    } else {
        myLibrary[i].read = "Read";
    };
};


function displayBooks() {
    for (const element of myLibrary) {
        if (document.querySelector(`div[data-id="${element.id}"`) === null) {
            const newDiv = document.createElement("div");
            const removeBtn = document.createElement("button");
            const toggleBtn = document.createElement("button");
            const newContent = document.createTextNode(element.title + " by " + element.author + ` (${element.pages} pages). ` + element.read + ".");
            removeBtn.textContent = "Remove Book";
            toggleBtn.textContent = "Toggle Read Status"
            newDiv.dataset.id = element.id;
            removeBtn.dataset.id = element.id;
            toggleBtn.dataset.id = element.id;
            removeBtn.addEventListener("click", (e) => {
                for (let i = 0; i < myLibrary.length; i++) {
                    if (e.target.dataset.id === myLibrary[i].id) {
                        myLibrary.splice(i, 1);
                        document.querySelector(`div[data-id="${e.target.dataset.id}"]`).remove();
                    }
                }
            });
            toggleBtn.addEventListener("click", (e) => {
                for (let i = 0; i < myLibrary.length; i++) {
                    if (e.target.dataset.id === myLibrary[i].id) {
                        myLibrary[i].toggleRead(i);
                        newContent.textContent = element.title + " by " + element.author + ` (${element.pages} pages). ` + element.read + ".";
                    }
                }
            })
            newDiv.appendChild(newContent);
            document.querySelector("body").appendChild(newDiv);
            document.querySelector(`[data-id="${element.id}"`).appendChild(removeBtn);
            document.querySelector(`[data-id="${element.id}"`).appendChild(toggleBtn);
        };
    };
}

   
// New Book button opens modal dialog
// ADD closing the modal as well.

const dialog = document.querySelector("dialog");
const newBook = document.querySelector("dialog + button");

newBook.addEventListener("click", () => {
    dialog.showModal();
});

// Stop button from submitting form, add book with input values,
// reset form, close dialog.

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
    displayBooks();
});

// Current problem - on first iteration, there's no div to remove. 
// Maybe check output of div on first iteration, and make if statement?


