export default class Book {
    constructor(name, author, yearPublication) {
        this.name = name;
        this.author = author;
        this.yearPublication = yearPublication;
    }

    // Геттер для властивості name
    get name() {
        return this._name;
    }

    // Сеттер для властивості name з валідацією name is not an empty value
    set name(newName) {
        if (typeof newName === 'string' && newName.trim() !== '') {
            this._name = newName;
        } else {
            console.log("Назва книги повинна бути непорожньою строкою.");
        }
    }
    // Геттер для властивості author
    get author() {
        return this._author;
    }
    // Сеттер для властивості author з валідацією
    set author(newAuthor) {
        if (typeof newAuthor === 'string' && newAuthor.trim() !== '') {
            this._author = newAuthor;
        } else {
            console.log("Ім'я автора повинно бути непорожньою строкою.");
        }
    }
    // Геттер для властивості yearPublication
    get yearPublication() {
        return this._yearPublication;
    }

    // Сеттер для властивості yearPublication з валідацією
    set yearPublication(newYear) {
        if (Number.isInteger(newYear) && newYear > 0) {
            this._yearPublication = newYear;
        } else {
            console.log("Рік публікації повинен бути додатнім числом.");
        }
    }



    printInfo() {
        console.log(`Hello, print info of this book name: ${this.name} author: ${this.author} years ${this.yearPublication}.`);
    }

    static findOldestBook(booksArray) {
        return booksArray.reduce((oldest, currentBook) => {
            if (currentBook.yearPublication < oldest.yearPublication) {
                return currentBook;
            }
            return oldest;
        });
    }

}

// const book1 = new Book("JavaScript", "Misha", "2025");
// const book2 = new Book("Java", "Straustroop", "2024");

// book1.printInfo();
// book2.printInfo();


