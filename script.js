//Library Logic
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



function Element(elementName, className, number = null) {
    this.element = document.createElement(elementName)
    this.class = this.element.classList.add(className)
    if (className == "button") {
        this.element.addEventListener("click", () => deleteBook(number))
    }
}

function deleteBook(number) {
    library.forEach(element => {
        if (element.number == number) {
            console.log(number)
            let books = document.getElementsByClassName("book")

            books[number].setAttribute("style", "display: none;")

        }
    });
}

function addBookToLibrary() {

    let name = document.getElementById("booksName")
    let author = document.getElementById("author")
    let pages = document.getElementById("numberOfPages")
    console.log(name.value)


    let newBook = new Book(name.value, author.value, pages.value, false, booksNumber)
    library.push(newBook)

    let fisicalNewBook = new Element("div", "book", booksNumber)





    let booksTextualContent = new Element("div", "booksTextualContent")

    let bookName = new Element("h5", "booksTitle")

    let onScreenAuthor = new Element("h6", "author")

    let onScreenRead = new Element("h5", "read")

    let onScreenPages = new Element("div", "pages")

    let numberOfPages = new Element("h5", "numberOfPages")

    let button = new Element("button", "button", booksNumber)
    booksNumber++

    button.element.innerText = "-"





    bookName.element.innerText = newBook.name
    onScreenAuthor.element.innerText = newBook.author
    onScreenRead.innerText = true
    numberOfPages.element.innerText = `${newBook.pages} pages`

    booksTextualContent.element.appendChild(button.element)
    booksTextualContent.element.appendChild(bookName.element)
    booksTextualContent.element.appendChild(onScreenAuthor.element)
    booksTextualContent.element.appendChild(onScreenRead.element)

    button.element.addEventListener("click", deleteBook())


    onScreenPages.element.appendChild(numberOfPages.element)


    fisicalNewBook.element.appendChild(booksTextualContent.element)
    fisicalNewBook.element.appendChild(onScreenPages.element)





    main.appendChild(fisicalNewBook.element)



    name.value = ""
    author.value = ""
    pages.value = ""


}

//Form Validation
const bookInput = document.querySelector("input[name='booksName']")
const authorInput = document.querySelector("input[name='authorName']")
const pagesInput = document.querySelector("input[name='numberOfPages']")
const form = document.querySelector("form")




function checkForm() {
    if(form.checkValidity()) {
        addBookToLibrary()
    } /* else {
        if(bookInput.validity.valid == false) {
            bookInput.setCustomValidity("Invalid Field")
        } else if(author.validity.valid == false) {
            bookInput.setCustomValidity("Invalid Field")
        } else if(pagesInput.validity.valid == false) {
            bookInput.setCustomValidity("Invalid Field")
        } 
    } */
}