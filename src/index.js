import { Book } from "./Book.js";
import { Library } from './Library.js';
import './style.css';
import { BookView } from "./BookView.js";
import { PageView } from "./PageView.js";
/* Интерфейс пользователя:
Кнопка "Добавить книгу" должна создавать объект класса Book и добавлять его в библиотеку.
Кнопка "Показать все книги" должна вызывать метод listBooks() и отображать список книг на странице.
Кнопка "Удалить книгу" должна запрашивать название книги и удалять её из библиотеки. 

1. Создать функцию, которая будет полностью обновлять список книг на странице. 
очищать содержимое booksList и затем рендерить весь массив книг
2. При добавлении книги добавлять ее в myLibrary и обновлять отображение
3. При удалении, удалять книгу из myLibrary и обновлять отображение
4. Когда все получится прислать мне.
5. Создать класс Вью отвечающий за страницу. 
В нем нужно обрабатывать нажатия кнопок и рендерить список.
*/



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

const pageTemplate = document.getElementById('library-app');

const body = document.body;
const pageView = new PageView(pageTemplate)
body.classList.add('lol')
body.append(pageView)


//const elementView = new BookView(bookTemplate.content.querySelector('.book-item').cloneNode(true))


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



// addBookBtn.addEventListener('click', () => {
//     const title = titleInput.value;
//     const author = authorInput.value;
//     const year = yearInput.value;

//     const book = new Book(title, author, year);

//     myLibrary.addBook(book)
//     /*     
//     const bookInstant = new BookView(bookTemplate.content.querySelector('.book-item').cloneNode(true))
//         bookForName = bookInstant;
//         booksList.appendChild(bookInstant.setText(book.getInfo())) */
//     renderBookArray()
// });

// removeBookBtn.addEventListener('click', () => {

//     const remBook = removeTitleInput.value;
//     myLibrary.removeBook(remBook)
//     renderBookArray()
//     // const bookElement = elementView.render(myLibrary.listBooks)
//     // const list = myLibrary.listBooks()
//     // console.log(`список книг ПОСЛЕ ${list.map(book => book.getInfo())}`)
// })



// function renderBookArray() {
//     booksList.textContent = '';
//     const booksArray = myLibrary.listBooks();

//     booksArray.forEach(book => {
//         const bookInstant = new BookView(bookTemplate.content.querySelector('.book-item').cloneNode(true))
//         booksList.appendChild(bookInstant.setText(book.getInfo()))
//     })
// }

// function test(a) {
//     const ff = a
//     function newTest(data) {
//         console.log(ff * data)
//     }
//     return newTest
// }

// const bb = test(10)
// bb(5)

