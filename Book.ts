export class Book {
    protected title: string;
    protected author: string;
    protected year: number
    constructor(author: string, title: string, year: number) {
        this.author = author;
        this.title = title;
        this.year = year
    }
    getInfo() {
        return `Название: ${this.title}, Автор: ${this.author}, Год: ${this.year}`
    };
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
