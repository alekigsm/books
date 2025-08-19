/* 
1. Создать функцию, которая будет полностью обновлять список книг на странице.
 очищать содержимое booksList и затем рендерить весь массив книг
2. При добавлении книги добавлять ее в myLibrary и обновлять отображение
3. При удалении, удалять книгу из myLibrary и обновлять отображение
4. Когда все получится прислать мне.
5. Создать класс Вью отвечающий за страницу.
 В нем нужно обрабатывать нажатия кнопок и рендерить список. */

export class PageView {

    constructor(container, action) {
        this.container = container
        this.inputFormTitle = this.container.querySelector('#title-input')
        this.inputFormAuthor = this.container.querySelector('#author-input')
        this.inputFormYear = this.container.querySelector('#year-input')
        this.buttonAddElement = this.container.querySelector('#add-book-btn')
        this.booksList = this.container.querySelector('#books-list')
        this.buttonRemElement = this.container.querySelector('#remove-book-btn')
        this.inputTextElement = this.container.querySelector('#remove-title-input')

        this.buttonAddElement.addEventListener('click', () => {
            const title = this.inputFormTitle.value;
            const author = this.inputFormAuthor.value;
            const year = this.inputFormYear.value;

            action.onAddBook(title, author, year);
        })

        this.buttonRemElement.addEventListener('click', () => {
            const title = this.inputTextElement.value;
            action.onDelBook(title)
        })
    }

    setBooks(booksHTMLArray) {
        this.booksList.innerHTML = '';
        this.booksList.append(...booksHTMLArray)

    }
}

