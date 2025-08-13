import { Book } from "./Book"

export class Liberty {
    protected books: Book[]

    constructor() {
        this.books = [];
    }

    addBook(value: Book) {
        this.books.push(value)
    }


    removeBook(title: string) {
        this.books = this.books.filter(item => item.getInfo() !== title)
    }
    listBooks() {

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