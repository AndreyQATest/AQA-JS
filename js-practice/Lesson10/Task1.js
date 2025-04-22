import Book from './Book.js';
import EBook from './EBook.js';

const book1 = new Book("JavaScript", "Misha", 2025);
const book2 = new Book("Java", "Straustroop", 2024);
const ebook1 = new EBook("Node.js Hillele", "Іван", 2025, "PDF");
const ebook2 = new EBook("React Essentials", "Макс", 2019, "EPUB");

// Масив книг
const books = [book1, book2, ebook1, ebook2];

// Викликаємо статичний метод для знаходження найстарішої книги
const oldestBook = Book.findOldestBook(books);
console.log("Найдавніша книга:");
oldestBook.printInfo();