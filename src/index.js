import { Book } from "./Book.js";
import { Library } from './Library.js';

/* Интерфейс пользователя:
Кнопка "Добавить книгу" должна создавать объект класса Book и добавлять его в библиотеку.
Кнопка "Показать все книги" должна вызывать метод listBooks() и отображать список книг на странице.
Кнопка "Удалить книгу" должна запрашивать название книги и удалять её из библиотеки. */



// Создаем экземпляр библиотеки
const myLibrary = new Library();

// Получаем элементы DOM
const titleInput = document.getElementById('title-input');
const authorInput = document.getElementById('author-input');
const yearInput = document.getElementById('year-input');
const addBookBtn = document.getElementById('add-book-btn');
const removeTitleInput = document.getElementById('remove-title-input');
const removeBookBtn = document.getElementById('remove-book-btn');
const booksList = document.getElementById('books-list');
const bookTemplate = document.getElementById('book-template');

let book = new Book()
addBookBtn.addEventListener('click', () => {

    const title = titleInput.value;
    const author = authorInput.value;
    const year = yearInput.value;
    console.log(`title, ${title}`);
    console.log(`author, ${author}`);
    console.log(`year, ${year}`);
    book = (title, author, year);
    console.log(`book, ${book.title, book.author, book.year}`);

    myLibrary.addBook(book)
});

removeBookBtn.addEventListener('click', () => {
    myLibrary.array.forEach(element => {
        console.log(`список до ${myLibrary[element]}`)
    });
    const remBook = removeTitleInput.value;
    myLibrary.removeBook(remBook);
    myLibrary.array.forEach(element => {
        console.log(`список после ${myLibrary[element]}`)
    });
})