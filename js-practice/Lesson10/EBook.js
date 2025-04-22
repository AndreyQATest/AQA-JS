import Book from './Book.js';

class EBook extends Book {
  constructor(name, author, yearPublication, fileFormat) {
    super(name, author, yearPublication);
    this._fileFormat = fileFormat;
  }

  // Геттер для властивості fileFormat
  get fileFormat() {
    return this._fileFormat;
  }

  // Сеттер для властивості fileFormat з валідацією
  set fileFormat(newFormat) {
    const validFormats = ['PDF', 'EPUB', 'MOBI'];
    if (validFormats.includes(newFormat)) {
      this._fileFormat = newFormat;
    } else {
      console.log("Невірний формат файлу. Дозволені формати: PDF, EPUB, MOBI.");
    }
  }

  // Перевизначений метод для друку інформації про eBook
  printInfo() {
    console.log(`Назва: "${this.name}", Автор: ${this.author}, Рік: ${this.yearPublication}, Формат: ${this._fileFormat}`);
  }
}

export default EBook;
