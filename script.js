let library = []
let booksNumber = 0
const main = document.querySelector(".books")





console.log(main)


function Book(name, author, pages, read = false, number) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.number = number

}



function Element(elementName, className) {
    this.element = document.createElement(elementName)
    this.class = this.element.classList.add(className)
}

function addBookToLibrary() {

    let name = document.getElementById("booksName")
    let author = document.getElementById("author")
    let pages = document.getElementById("numberOfPages")
    console.log(name.value)


    let newBook = new Book(name.value, author.value, pages.value, false, booksNumber)
    library.push(newBook)

    let fisicalNewBook = document.createElement("div");
    fisicalNewBook.classList.add("book")
    fisicalNewBook.setAttribute("id", newBook.number)

    booksNumber++

    let booksTextualContent = new Element("div", "booksTextualContent")

    let bookName = new Element("h5", "booksTitle")

    let onScreenAuthor = new Element("h5", "author")

    let onScreenRead = new Element("h5", "read")

    let onScreenPages = new Element("div", "pages")

    let numberOfPages = new Element("h5", "numberOfPages")





    bookName.element.innerText = newBook.name
    onScreenAuthor.element.innerText = newBook.author
    onScreenRead.innerText = true
    numberOfPages.element.innerText = newBook.pages


    booksTextualContent.element.appendChild(bookName.element)
    booksTextualContent.element.appendChild(onScreenAuthor.element)
    booksTextualContent.element.appendChild(onScreenRead.element)

    onScreenPages.element.appendChild(numberOfPages.element)

    fisicalNewBook.appendChild(booksTextualContent.element)
    fisicalNewBook.appendChild(onScreenPages.element)
    main.appendChild(fisicalNewBook)


    name.value = ""
    author.value = ""
    pages.value = ""






    console.log(library)

}

function deleteBook() {

}



console.log(library)





