/* Создать класс BookView который отвечает за рендер разметки одно книги. 
В конструктор принимает клон темплейта.
 Содержит метод render() который принимает данные книги и возвращает разметку одной книги */

export class BookView {
    protected container: HTMLTemplateElement;
    constructor(container: HTMLTemplateElement) {
        this.container = container
    }

    render() {

    }
}