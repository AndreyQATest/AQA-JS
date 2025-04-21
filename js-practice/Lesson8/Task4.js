
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Використовуємо метод filter для відбору парних чисел
const evenNumbers = numbers.filter(num => num % 2 === 0);
// Виведення масиву парних чисел на консоль
console.log(evenNumbers);