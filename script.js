let library = {}

function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;

}

function addBookToLibrary(name, author, pages, read) {
    let newBook = new Book(name, author, pages, read)
    library[newBook.name] = newBook

}


addBookToLibrary("Divergent", "idk", 214, true)
addBookToLibrary("Hunger Games", "idk", 72, false)
console.log(library)
