/* Создать класс BookView который отвечает за рендер разметки одно книги. 
В конструктор принимает клон темплейта.
 Содержит метод render() который принимает данные книги и возвращает разметку одной книги */
export class BookView {

  constructor(container) {
    this.container = container;
    this.textElement = this.container.querySelector('.book-info');
    this.buttonElement = this.container.querySelector('.remove-book-button');
    this.buttonElement.addEventListener('click', () => {
      this.container.remove();
      // this.setText('Я буду удален');
    })
  }

  setText(bookData) {
    this.textElement.textContent = bookData;
    return this.container;
  }

  /*  getElement() {
     return this.container;
   }
 
   setRed() {
     this.textElement.style.color = 'red';
   } */
}
