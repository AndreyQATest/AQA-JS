const users = [
    { name: "Анна", email: "anna@example.com", age: 25 },
    { name: "Богдан", email: "bogdan@example.com", age: 30 },
    { name: "Катерина", email: "katya@example.com", age: 22 }
  ];
  
  // Перебір з деструктуризацією
  for (const { name, email, age } of users) {
    console.log(`Ім'я: ${name}, Email: ${email}, Вік: ${age}`);
  }