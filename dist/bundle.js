/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Book.js":
/*!*********************!*\
  !*** ./src/Book.js ***!
  \*********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Book: () => (/* binding */ Book)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Book = /*#__PURE__*/function () {
  function Book(title, author, year) {
    _classCallCheck(this, Book);
    this.title = title;
    this.author = author;
    this.year = year;
  }
  return _createClass(Book, [{
    key: "getInfo",
    value: function getInfo() {
      return "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435: ".concat(this.title, ", \u0410\u0432\u0442\u043E\u0440: ").concat(this.author, ", \u0413\u043E\u0434: ").concat(this.year);
    }
  }]);
}();
/* 
Что нужно сделать:
Класс Book:
Каждая книга должна иметь следующие свойства:
title (название книги),
author (автор книги),
year (год издания).
Метод getInfo(), который возвращает строку с информацией о книге в формате:
"Название: [title], Автор: [author], Год: [year]".*/

/***/ }),

/***/ "./src/Library.js":
/*!************************!*\
  !*** ./src/Library.js ***!
  \************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Library: () => (/* binding */ Library)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Library = /*#__PURE__*/function () {
  function Library() {
    _classCallCheck(this, Library);
    this.books = [];
  }
  return _createClass(Library, [{
    key: "addBook",
    value: function addBook(book) {
      this.books.push(book);
    }
  }, {
    key: "removeBook",
    value: function removeBook(title) {
      this.books = this.books.filter(function (book) {
        return book.title !== title;
      });
    }
  }]);
}();
/* 
Класс Library:
Свойство books, которое хранит массив книг.
Метод addBook(book), который добавляет новую книгу в библиотеку.
Метод removeBook(title), который удаляет книгу из библиотеки по её названию.
Метод listBooks(), который обновляет DOM, 
отображая список всех книг с использованием шаблона.
 */

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Book_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Book.js */ "./src/Book.js");
/* harmony import */ var _Library_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Library.js */ "./src/Library.js");



/* Интерфейс пользователя:
Кнопка "Добавить книгу" должна создавать объект класса Book и добавлять его в библиотеку.
Кнопка "Показать все книги" должна вызывать метод listBooks() и отображать список книг на странице.
Кнопка "Удалить книгу" должна запрашивать название книги и удалять её из библиотеки. */

// Создаем экземпляр библиотеки
var myLibrary = new _Library_js__WEBPACK_IMPORTED_MODULE_1__.Library();

// Получаем элементы DOM
var titleInput = document.getElementById('title-input');
var authorInput = document.getElementById('author-input');
var yearInput = document.getElementById('year-input');
var addBookBtn = document.getElementById('add-book-btn');
var removeTitleInput = document.getElementById('remove-title-input');
var removeBookBtn = document.getElementById('remove-book-btn');
var booksList = document.getElementById('books-list');
var bookTemplate = document.getElementById('book-template');
addBookBtn.addEventListener('click', function () {
  var title = titleInput.value;
  console.log("title, ".concat(title));
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO0VBQ3ZDLElBQU0zQixLQUFLLEdBQUdpQixVQUFVLENBQUNYLEtBQUs7RUFDOUJzQixPQUFPLENBQUNDLEdBQUcsV0FBQXJCLE1BQUEsQ0FBV1IsS0FBSyxDQUFFLENBQUM7QUFDbEMsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ib29rcy8uL3NyYy9Cb29rLmpzIiwid2VicGFjazovL2Jvb2tzLy4vc3JjL0xpYnJhcnkuanMiLCJ3ZWJwYWNrOi8vYm9va3Mvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYm9va3Mvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Jvb2tzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYm9va3Mvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9ib29rcy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQm9vayB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgYXV0aG9yLCB5ZWFyKSB7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHRoaXMuYXV0aG9yID0gYXV0aG9yO1xyXG4gICAgICAgIHRoaXMueWVhciA9IHllYXI7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SW5mbygpIHtcclxuICAgICAgICByZXR1cm4gYNCd0LDQt9Cy0LDQvdC40LU6ICR7dGhpcy50aXRsZX0sINCQ0LLRgtC+0YA6ICR7dGhpcy5hdXRob3J9LCDQk9C+0LQ6ICR7dGhpcy55ZWFyfWA7XHJcbiAgICB9XHJcbn1cclxuLyogXHJcbtCn0YLQviDQvdGD0LbQvdC+INGB0LTQtdC70LDRgtGMOlxyXG7QmtC70LDRgdGBIEJvb2s6XHJcbtCa0LDQttC00LDRjyDQutC90LjQs9CwINC00L7Qu9C20L3QsCDQuNC80LXRgtGMINGB0LvQtdC00YPRjtGJ0LjQtSDRgdCy0L7QudGB0YLQstCwOlxyXG50aXRsZSAo0L3QsNC30LLQsNC90LjQtSDQutC90LjQs9C4KSxcclxuYXV0aG9yICjQsNCy0YLQvtGAINC60L3QuNCz0LgpLFxyXG55ZWFyICjQs9C+0LQg0LjQt9C00LDQvdC40Y8pLlxyXG7QnNC10YLQvtC0IGdldEluZm8oKSwg0LrQvtGC0L7RgNGL0Lkg0LLQvtC30LLRgNCw0YnQsNC10YIg0YHRgtGA0L7QutGDINGBINC40L3RhNC+0YDQvNCw0YbQuNC10Lkg0L4g0LrQvdC40LPQtSDQsiDRhNC+0YDQvNCw0YLQtTpcclxuXCLQndCw0LfQstCw0L3QuNC1OiBbdGl0bGVdLCDQkNCy0YLQvtGAOiBbYXV0aG9yXSwg0JPQvtC0OiBbeWVhcl1cIi4qL1xyXG4iLCJleHBvcnQgY2xhc3MgTGlicmFyeSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmJvb2tzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgYWRkQm9vayhib29rKSB7XHJcbiAgICAgICAgdGhpcy5ib29rcy5wdXNoKGJvb2spO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUJvb2sodGl0bGUpIHtcclxuICAgICAgICB0aGlzLmJvb2tzID0gdGhpcy5ib29rcy5maWx0ZXIoYm9vayA9PiBib29rLnRpdGxlICE9PSB0aXRsZSk7XHJcbiAgICB9XHJcbn1cclxuLyogXHJcbtCa0LvQsNGB0YEgTGlicmFyeTpcclxu0KHQstC+0LnRgdGC0LLQviBib29rcywg0LrQvtGC0L7RgNC+0LUg0YXRgNCw0L3QuNGCINC80LDRgdGB0LjQsiDQutC90LjQsy5cclxu0JzQtdGC0L7QtCBhZGRCb29rKGJvb2spLCDQutC+0YLQvtGA0YvQuSDQtNC+0LHQsNCy0LvRj9C10YIg0L3QvtCy0YPRjiDQutC90LjQs9GDINCyINCx0LjQsdC70LjQvtGC0LXQutGDLlxyXG7QnNC10YLQvtC0IHJlbW92ZUJvb2sodGl0bGUpLCDQutC+0YLQvtGA0YvQuSDRg9C00LDQu9GP0LXRgiDQutC90LjQs9GDINC40Lcg0LHQuNCx0LvQuNC+0YLQtdC60Lgg0L/QviDQtdGRINC90LDQt9Cy0LDQvdC40Y4uXHJcbtCc0LXRgtC+0LQgbGlzdEJvb2tzKCksINC60L7RgtC+0YDRi9C5INC+0LHQvdC+0LLQu9GP0LXRgiBET00sIFxyXG7QvtGC0L7QsdGA0LDQttCw0Y8g0YHQv9C40YHQvtC6INCy0YHQtdGFINC60L3QuNCzINGBINC40YHQv9C+0LvRjNC30L7QstCw0L3QuNC10Lwg0YjQsNCx0LvQvtC90LAuXHJcbiAqLyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgQm9vayB9IGZyb20gXCIuL0Jvb2suanNcIjtcclxuaW1wb3J0IHsgTGlicmFyeSB9IGZyb20gJy4vTGlicmFyeS5qcyc7XHJcblxyXG4vKiDQmNC90YLQtdGA0YTQtdC50YEg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPOlxyXG7QmtC90L7Qv9C60LAgXCLQlNC+0LHQsNCy0LjRgtGMINC60L3QuNCz0YNcIiDQtNC+0LvQttC90LAg0YHQvtC30LTQsNCy0LDRgtGMINC+0LHRitC10LrRgiDQutC70LDRgdGB0LAgQm9vayDQuCDQtNC+0LHQsNCy0LvRj9GC0Ywg0LXQs9C+INCyINCx0LjQsdC70LjQvtGC0LXQutGDLlxyXG7QmtC90L7Qv9C60LAgXCLQn9C+0LrQsNC30LDRgtGMINCy0YHQtSDQutC90LjQs9C4XCIg0LTQvtC70LbQvdCwINCy0YvQt9GL0LLQsNGC0Ywg0LzQtdGC0L7QtCBsaXN0Qm9va3MoKSDQuCDQvtGC0L7QsdGA0LDQttCw0YLRjCDRgdC/0LjRgdC+0Log0LrQvdC40LMg0L3QsCDRgdGC0YDQsNC90LjRhtC1LlxyXG7QmtC90L7Qv9C60LAgXCLQo9C00LDQu9C40YLRjCDQutC90LjQs9GDXCIg0LTQvtC70LbQvdCwINC30LDQv9GA0LDRiNC40LLQsNGC0Ywg0L3QsNC30LLQsNC90LjQtSDQutC90LjQs9C4INC4INGD0LTQsNC70Y/RgtGMINC10ZEg0LjQtyDQsdC40LHQu9C40L7RgtC10LrQuC4gKi9cclxuXHJcblxyXG5cclxuLy8g0KHQvtC30LTQsNC10Lwg0Y3QutC30LXQvNC/0LvRj9GAINCx0LjQsdC70LjQvtGC0LXQutC4XHJcbmNvbnN0IG15TGlicmFyeSA9IG5ldyBMaWJyYXJ5KCk7XHJcblxyXG4vLyDQn9C+0LvRg9GH0LDQtdC8INGN0LvQtdC80LXQvdGC0YsgRE9NXHJcbmNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUtaW5wdXQnKTtcclxuY29uc3QgYXV0aG9ySW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXV0aG9yLWlucHV0Jyk7XHJcbmNvbnN0IHllYXJJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd5ZWFyLWlucHV0Jyk7XHJcbmNvbnN0IGFkZEJvb2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLWJvb2stYnRuJyk7XHJcbmNvbnN0IHJlbW92ZVRpdGxlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVtb3ZlLXRpdGxlLWlucHV0Jyk7XHJcbmNvbnN0IHJlbW92ZUJvb2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVtb3ZlLWJvb2stYnRuJyk7XHJcbmNvbnN0IGJvb2tzTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib29rcy1saXN0Jyk7XHJcbmNvbnN0IGJvb2tUZW1wbGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib29rLXRlbXBsYXRlJyk7XHJcblxyXG5cclxuYWRkQm9va0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGNvbnN0IHRpdGxlID0gdGl0bGVJbnB1dC52YWx1ZVxyXG4gICAgY29uc29sZS5sb2coYHRpdGxlLCAke3RpdGxlfWApXHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiQm9vayIsInRpdGxlIiwiYXV0aG9yIiwieWVhciIsIl9jbGFzc0NhbGxDaGVjayIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiZ2V0SW5mbyIsImNvbmNhdCIsIkxpYnJhcnkiLCJib29rcyIsImFkZEJvb2siLCJib29rIiwicHVzaCIsInJlbW92ZUJvb2siLCJmaWx0ZXIiLCJteUxpYnJhcnkiLCJ0aXRsZUlucHV0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImF1dGhvcklucHV0IiwieWVhcklucHV0IiwiYWRkQm9va0J0biIsInJlbW92ZVRpdGxlSW5wdXQiLCJyZW1vdmVCb29rQnRuIiwiYm9va3NMaXN0IiwiYm9va1RlbXBsYXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9