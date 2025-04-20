function divide(numerator, denominator) {
    if (typeof numerator !== "number" || typeof denominator !== "number") {
      throw new Error("Обидва аргументи мають бути числами");
    }
  
    if (denominator === 0) {
      throw new Error("Ділення на 0 заборонено");
    }
  
    return numerator / denominator;
  }
  const testCases = [
    [10, 2],      // OK
    [8, 0],       // Ділення на нуль
    ["a", 2],     // numerator не число
    [5, "b"],     // denominator не число
    [15, 3],      // OK
  ];
  
  for (const [num, denom] of testCases) {
    try {
      const result = divide(num, denom);
      console.log(`Результат: ${result}`);
    } catch (error) {
      console.error("Помилка:", error.message);
    } finally {
      console.log("Робота завершена\n");
    }
  }

  
  
  
  
  
  
  
  