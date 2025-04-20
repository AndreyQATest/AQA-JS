const numbersList = [1, 10, 14, 2, 4, 5, 43, 34];

// Створення копії масиву за допомогою методу slice або spread operator
const sortedList = [...numbersList];
// Сортуємо новий масив від меншого до більшого
sortedList.sort((a, b) => a - b);
// Виведення обох масивів на консоль
console.log("Вихідний масив:", numbersList);
console.log("Відсортований масив:", sortedList);