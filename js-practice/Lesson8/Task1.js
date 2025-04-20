const numbers = [2, -5, 0, 7, -3, 0, 10, -8];

// Ініціалізуємо змінні для підрахунку
let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;

// Пошук по кожному елементу масиву
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    positiveCount++; // Якщо число позитивне
  } else if (numbers[i] < 0) {
    negativeCount++; // Якщо число негативне
  } else {
    zeroCount++; // Якщо число нульове
  }
}
console.log("Кількість позитивних чисел: " + positiveCount);
console.log("Кількість негативних чисел: " + negativeCount);
console.log("Кількість нульових чисел: " + zeroCount);