import { Book } from "./Book";
import { Liberty } from "./Library";

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