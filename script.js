let library = []
const main = document.getElementById("main")




console.log(main)


function Book(name, author, pages, read = false, number) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.number = number

}

function addBookToLibrary(name, author, pages, read) {

    let newBook = new Book(name, author, pages, read, library.length)
    library.push(newBook)

    let fisicalNewBook = document.createElement("div");
    fisicalNewBook.classList.add("book")

    let booksTextualContent = document.createElement("div")
    booksTextualContent.classList.add("booksTextualContent")

    let bookName = document.createElement("h5");
    bookName.classList.add("bookTitle")

    let onScreenAuthor = document.createElement("h5");
    onScreenAuthor.classList.add("author")

    let onScreenRead = document.createElement("h5");
    onScreenRead.classList.add("read")

    let onScreenPages = document.createElement("div")
    onScreenPages.classList.add("pages")

    let numberOfPages = document.createElement("h5");
    numberOfPages.classList.add("numberOfPages")





    bookName.innerText = name
    onScreenAuthor.innerText = author
    onScreenRead.innerText = read
    numberOfPages.innerText = pages


    booksTextualContent.appendChild(bookName)
    booksTextualContent.appendChild(onScreenAuthor)
    booksTextualContent.appendChild(onScreenRead)

    onScreenPages.appendChild(numberOfPages)

    fisicalNewBook.appendChild(booksTextualContent)
    fisicalNewBook.appendChild(onScreenPages)
    main.appendChild(fisicalNewBook)







    console.log(library)

}

addBookToLibrary("hey", "hey", 214, "not read")

console.log(library)





