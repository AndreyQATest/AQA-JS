let person = {
    firstName: "Test",
    lastName: "User",
    age: 29
  };
  

  person.email = "taras.shevchenko@gmail.com";

  delete person.age;

  console.log(person);