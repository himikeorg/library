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
//Let's try if loop to only create the ones that exist.

// NEXT UP - make the div disapper when it's erased from myLibrary (in the for loop below)

function displayBooks() {
    for (const element of myLibrary) {
        if (document.querySelector(`div[data-id="${element.id}"`) === null) {
            const newDiv = document.createElement("div");
            const newBtn = document.createElement("button");
            const newContent = document.createTextNode(element.title + " by " + element.author);
            newBtn.textContent = "Click me";
            newDiv.dataset.id = element.id;
            newBtn.dataset.id = element.id;
            newBtn.addEventListener("click", (e) => {
                // Loop through array and remove the item whose data.id matches the button data.id.
                for (let i = 0; i < myLibrary.length; i++) {
                    if (e.target.dataset.id === myLibrary[i].id) {
                        myLibrary.splice(i, 1);
                        // document.getElementById(e.target.id)
                        console.log(myLibrary);
                    }
                }
            });
            newDiv.appendChild(newContent);
            document.querySelector("body").appendChild(newDiv);
            document.querySelector(`[data-id="${element.id}"`).appendChild(newBtn);
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


