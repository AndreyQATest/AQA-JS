let number = 5;

console.log("Таблиця множення для числа " + number + " (цикл for):");

// Цикл for
for (let i = 1; i <= 10; i++) {
  console.log(`${number} x ${i} = ${number * i}`);
}

console.log("\nТаблиця множення для числа " + number + " (цикл while):");

// Цикл while
let j = 1;
while (j <= 10) {
  console.log(`${number} x ${j} = ${number * j}`);
  j++;
}