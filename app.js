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

//Displaying the books

/* Creating the book card */
function createBookCards(book){
    const bookCard = document.createElement("div"); 
    bookCard.classList.add("book-card");
    bookCard.dataset.id = book.id;
    const deleteIcon = document.createElement("img");
    const title = document.createElement("p");
    const author = document.createElement("p");
    const pages = document.createElement("p");
    deleteIcon.src = "./icons/delete.svg";
    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = book.pages;
    const read = document.createElement("p");
    if(book.read === "Yes"){
        read.textContent = "READ";
        read.classList.add("active");
    }
    else{
        read.textContent = "UNREAD";
    }

    bookCard.append(deleteIcon, title, author, pages, read);
    return bookCard;
}

const gridContainer = document.querySelector(".grid-container");
//Actual display//
function displayBooks(){
    gridContainer.innerHTML = "";
    if(bookArray.length == 0){
        console.log("No books in the library.");
    }
    else{
        bookArray.forEach((book) => {
            gridContainer.append(createBookCards(book));
        })

    }
}


//Taking inputs and adding books.
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

Book.prototype.toggleRead = function(){
    this.read = (this.read == "Yes" ? "No" : "Yes");
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const title = formData.get('title');
    const author = formData.get('author');
    const pages = formData.get('pages');
    const read =  formData.get('read');
    addBookToLibrary(title, author, pages, read);
    displayBooks();
    dialog.close();
})

//Changing the read status and removing the book. 
gridContainer.addEventListener("click", (e) => {
    if(e.target.matches(".book-card p:last-child")){
        e.target.classList.toggle("active");

        e.target.textContent = (e.target.classList.contains("active") ? "READ" : "UNREAD");

        const bookCard = e.target.parentElement;
        const id = bookCard.dataset.id;
        // console.log(id);
        const book = bookArray.find((book) => {return id === book.id});
        if(book){
            book.toggleRead();
        }
    }

    if(e.target.matches(".book-card img")){
        const bookCard = e.target.parentElement;
        const id = bookCard.dataset.id;
        console.log(id);
        let bookIdx;
        bookIdx = bookArray.findIndex((book) => {return id === book.id});
        
        if(bookIdx != -1){
            console.log("Deleted\n");
            console.log(bookIdx);
            bookArray.splice(bookIdx, 1);
        }
        
        bookCard.remove();
    }
})










