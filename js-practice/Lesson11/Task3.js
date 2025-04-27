// Функція для отримання todo за допомогою async/await
async function fetchTodo() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const todo = await response.json();
      return todo;
    } catch (error) {
      console.error('Помилка при завантаженні todo:', error);
      throw error; // перекидаємо помилку, щоб обробити її потім
    }
  }
  
  // Функція для отримання user за допомогою async/await
  async function fetchUser() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
      const user = await response.json();
      return user;
    } catch (error) {
      console.error('Помилка при завантаженні user:', error);
      throw error;
    }
  }
  
  // Використання Promise.all
  async function getAllData() {
    try {
      const [todo, user] = await Promise.all([fetchTodo(), fetchUser()]);
      console.log('Результат Promise.all:');
      console.log('Todo:', todo);
      console.log('User:', user);
    } catch (error) {
      console.error('Помилка в Promise.all:', error);
    }
  }
  
  // Використання Promise.race
  async function getFirstData() {
    try {
      const result = await Promise.race([fetchTodo(), fetchUser()]);
      console.log('Результат Promise.race:', result);
    } catch (error) {
      console.error('Помилка в Promise.race:', error);
    }
  }
  
  // Виклик функцій
  getAllData();
  getFirstData();
  