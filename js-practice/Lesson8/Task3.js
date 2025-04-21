
const numbers = [10, 20, 30, 40, 50];
// Використовуємо метод reduce для обчислення суми всіх елементів
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// Виведення результату на консоль
console.log(sum);