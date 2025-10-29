function Book(title, author, pages, read){
    if(!new.target){
        throw Error("Use the 'new' operator to call this constructor");
    }

    this.title   = title;
    this.author  = author;
    this.pages   = pages;
    this.read    = read;
}
