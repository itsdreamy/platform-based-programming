// Create a book object with title, author, and year. Create a function getProperty(object, key) that returns the value of the requested property using bracket notation.

const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
}

function getProperty(book, property) {
    return book[property];
}

console.log(getProperty(book, "title"));
console.log(getProperty(book, "author"));
console.log(getProperty(book, "year"));