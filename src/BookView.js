/* Создать класс BookView который отвечает за рендер разметки одно книги. 
В конструктор принимает клон темплейта.
 Содержит метод render() который принимает данные книги и возвращает разметку одной книги */
export class BookView {

    constructor(template) {

        this.template = template;

    }

    render(bookData) {
        const bookElement = this.template.content.cloneNode(true);

        const bookInfo = bookElement.querySelector('.book-info');
        bookInfo.textContent = `${bookData.title}, ${bookData.author}, ${bookData.year}`;

        return bookElement;
    }
}