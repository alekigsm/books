import { cloneNode } from "domhandler";
import { Book } from "./Book.js";
import { Library } from './Library.js';
import './style.css';
import { BookView } from "./BookView.js";
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

const elementView = new BookView(bookTemplate)
const book = {
    title: 'JavaScript: The Good Parts',
    author: 'Douglas Crockford',
    year: '2008'
};
const bookEl = elementView.render(book)
booksList.appendChild(bookEl)
/* 
function renderAll(books) {
    booksList.innerHTML = '';
 
    books.forEach(book => {
 
 
        const bookElement = bookTemplate.querySelector('.book-item').cloneNode(true);
        bookElement.querySelector('.book-info').textContent =
            `${book.title}; ${book.author}; ${book.year}; ${book.id}`;
        const removeBookButton = bookElement.querySelector('.remove-book-button');
 
        booksList.append(bookElement);
        removeBookButton.addEventListener('click', () => {
            myLibrary.removeBookId(book.id)
            renderAll(myLibrary.listBooks())
        })
    })
 
} */

addBookBtn.addEventListener('click', () => {
    const title = titleInput.value;
    const author = authorInput.value;
    const year = yearInput.value;
    console.log(`title, ${title}`);
    console.log(`author, ${author}`);
    console.log(`year, ${year}`);
    const book = new Book(title, author, year);
    myLibrary.addBook(book)
    renderAll(myLibrary.listBooks())

});


removeBookBtn.addEventListener('click', () => {
    const remBook = removeTitleInput.value;
    myLibrary.removeBook(remBook)
    const list = myLibrary.listBooks()
    console.log(`список книг ПОСЛЕ ${list.map(book => book.getInfo())}`)
    renderAll(myLibrary.listBooks())
})

