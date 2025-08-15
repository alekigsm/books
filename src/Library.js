export class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    removeBook(title) {
        this.books = this.books.filter(book => book.title !== title);
    }
    removeBookId(id) {
        this.books = this.books.filter(book => book.id !== id);
    }
    listBooks() {
        return this.books
    }
}
/* 
Класс Library:
Свойство books, которое хранит массив книг.
Метод addBook(book), который добавляет новую книгу в библиотеку.
Метод removeBook(title), который удаляет книгу из библиотеки по её названию.
Метод listBooks(), который обновляет DOM, 
отображая список всех книг с использованием шаблона.
 */