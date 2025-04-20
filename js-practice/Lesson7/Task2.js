function countdown(num) {
    console.log(num); // Виводимо поточне значення
  
    if (num <= 0) {
      return; // Зупиняємо рекурсію, якщо num <= 0
    }
  
    countdown(num - 1); // Рекурсивний виклик зі зменшеним значенням
  }
  
  // Запуск з 5
  countdown(5);
  