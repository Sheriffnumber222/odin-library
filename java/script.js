function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        let readStatus = "";
        if (read) {
            readStatus = "read"    
        } else {
            readStatus = "not read"
        };``
        console.log(title + " by " + author + ", " + pages + " pages, " + readStatus);
    }
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
theHobbit.info();