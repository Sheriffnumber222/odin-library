let myLibrary = [new Book("The Hobbit", "J.R.R. Tolkien", 295, false), new Book("The Way of Kings", "Brandon Sanderson", 1001, true), new Book("Bretts Big Book", "Brett Sheriff", 3, false)];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

Book.prototype.info = function() {
    let readStatus = "";
    if (this.read) {
        readStatus = "read"    
    } else {
        readStatus = "not read"
    };
    return this.title + " by " + this.author + ", " + this.pages + " pages, " + readStatus;
}

//Add a new book to my Library based off user inputs
function addBookToLibrary() {
    let newBookTitle = prompt("Title", "The Hobbit");
    let newBookAuthor = prompt("Author", "J.R.R. Tolkien");
    let newBookPages = prompt("Pages", 295);
    let newBookRead = prompt("Read?", false);
    myLibrary.push(new Book(newBookTitle, newBookAuthor, newBookPages, newBookRead));
}

//Cycles through myLibrary array and displays each book on webpage
function displayBooks() {
    const container = document.querySelector(`#container`);
    for(i = myLibrary.length; i > 0; i--) {
        let div = document.createElement("div");
        div.textContent = `${myLibrary[i-1].info()}`;
        container.appendChild(div);
    }
}
displayBooks();