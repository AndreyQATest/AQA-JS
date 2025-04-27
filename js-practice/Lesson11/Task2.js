// Функція для отримання todo
function fetchTodo() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .catch(error => console.error('Помилка при завантаженні todo:', error));
  }
  
  // Функція для отримання user
  function fetchUser() {
    return fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(response => response.json())
      .catch(error => console.error('Помилка при завантаженні user:', error));
  }
  
  // Використання Promise.all
  Promise.all([fetchTodo(), fetchUser()])
    .then(results => {
      const [todo, user] = results;
      console.log('Результат Promise.all:');
      console.log('Todo:', todo);
      console.log('User:', user);
    })
    .catch(error => console.error('Помилка в Promise.all:', error));
  
  // Використання Promise.race
  Promise.race([fetchTodo(), fetchUser()])
    .then(result => {
      console.log('Результат Promise.race:', result);
    })
    .catch(error => console.error('Помилка в Promise.race:', error));