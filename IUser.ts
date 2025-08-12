export interface IUser {
    btnAddBook: HTMLButtonElement;
    btnListBook: HTMLButtonElement
    btnRemoveBook: HTMLButtonElement
}



/* 
Интерфейс пользователя:
Кнопка "Добавить книгу" должна создавать объект класса Book 
и добавлять его в библиотеку.
Кнопка "Показать все книги" должна вызывать метод listBooks() 
и отображать список книг на странице.
Кнопка "Удалить книгу" должна запрашивать название книги 
 удалять её из библиотеки. */ 