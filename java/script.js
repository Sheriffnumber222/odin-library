let myLibrary = [];

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
    console.log(this.title + " by " + this.author + ", " + this.pages + " pages, " + readStatus);
}

//Add a new book to my Library based off user inputs
function addBookToLibrary() {
    let newBookTitle = prompt("Title", "The Hobbit");
    let newBookAuthor = prompt("Author", "J.R.R. Tolkien");
    let newBookPages = prompt("Pages", 295);
    let newBookRead = prompt("Read?", false);
    myLibrary.push(new Book(newBookTitle, newBookAuthor, newBookPages, newBookRead));
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
const theWayOfKings = new Book("The Way of Kings", "Brandon Sanderson", 1001, true);
addBookToLibrary();

