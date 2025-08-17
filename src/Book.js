import { data } from "autoprefixer";

export class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.id = Date.now()
    }

    getInfo() {
        return `Название: ${this.title}, Автор: ${this.author}, Год: ${this.year}, id: ${this.id}`;
    }
}
/* 
Что нужно сделать:
Класс Book:
Каждая книга должна иметь следующие свойства:
title (название книги),
author (автор книги),
year (год издания).
Метод getInfo(), который возвращает строку с информацией о книге в формате:
"Название: [title], Автор: [author], Год: [year]".*/


