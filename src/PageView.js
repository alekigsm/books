/* 
1. Создать функцию, которая будет полностью обновлять список книг на странице.
 очищать содержимое booksList и затем рендерить весь массив книг
2. При добавлении книги добавлять ее в myLibrary и обновлять отображение
3. При удалении, удалять книгу из myLibrary и обновлять отображение
4. Когда все получится прислать мне.
5. Создать класс Вью отвечающий за страницу.
 В нем нужно обрабатывать нажатия кнопок и рендерить список. */

import { Book } from "./Book"

export class PageView {

    constructor(container) {
        this.container = container
        this.inputFormTitle = this.container.querySelector('.title-input')
        this.inputFormAuthor = this.container.querySelector('.author-input')
        this.inputFormYear = this.container.querySelector('.year-input')
        this.buttonAddElement = this.container.querySelector('.add-book-btn')
        this.textElement = this.container.querySelector('.books-list')
        this.buttonRemElement = this.container.querySelector('.remove-book-btn')
        this.inputTextElement = this.container.querySelector('.remove-title-input')

        this.buttonAddElement.addEventListener('click', () => {
            // const title = this.inputFormTitle;
            // const author = this.inputFormAuthor;
            // const year = this.inputFormYear;

            // const book = new Book(title, author, year);

            console.log('tyt')
            // myLibrary.addBook(book)
            /*     
            const bookInstant = new BookView(bookTemplate.content.querySelector('.book-item').cloneNode(true))
                bookForName = bookInstant;
            //     booksList.appendChild(bookInstant.setText(book.getInfo())) */
            // renderBookArray()
        })
    }
}

