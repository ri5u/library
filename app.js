const bookArray = [];

function Book(title, author, pages, read){
    if(!new.target){
        throw Error("Use the 'new' operator to call this constructor");
    }
    this.id      = crypto.randomUUID();
    this.title   = title;
    this.author  = author;
    this.pages   = pages;
    this.read    = read;
}

function addBookToLibrary(title, author, pages, read){
    let book = new Book(title, author, pages, read);
    bookArray.push(book);
}

function displayBooks(){
    if(bookArray.length == 0){
        console.log("No books in the library.");
    }
    else{
        bookArray.forEach((book, bookIndex) => {
            console.log(`Book No. : ${bookIndex}`);
            console.log(book);
        })

    }
}

// addBookToLibrary("Genki", "Idk", 342, true);
// addBookToLibrary("Genki", "Idk", 342, true);
// addBookToLibrary("Genki", "Idk", 342, true);

// displayBooks();
const addBooks = document.querySelector("#addBooks");
const dialog = document.querySelector("dialog");
const form = document.querySelector("form");
const closeDialog = document.querySelector("#closeDialog");

addBooks.addEventListener("click", ()=>{
    dialog.showModal();
});

dialog.addEventListener("close", () => {
    form.reset()
});

closeDialog.addEventListener("click", () => {
    dialog.close();
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const title = formData.get('title');
    const author = formData.get('author');
    const pages = formData.get('pages');
    const read =  formData.get('read');
    addBookToLibrary(title, author, pages, read);
    displayBooks();
})

















