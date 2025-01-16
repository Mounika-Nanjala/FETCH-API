function fetchTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => displayTodos(data))
        .catch(error => console.error('Error fetching todos:', error));
  }
  
  function displayTodos(todos) {
    const todoList = document.getElementById('todoList');
    todos.forEach(todo => {
        const li = document.createElement('li');
        li.className = `p-2 rounded ${todo.completed ? 'bg-green-100' : 'bg-red-100'}`;
        li.innerHTML = `
            <span class="font-bold">${todo.title}</span>
            <span class="font-bold">${todo.id}</span>
            
            <span class="ml-2">(${todo.completed ? 'Completed' : 'Pending'})</span>
        `;
        todoList.appendChild(li);
    });
  }
  
  fetchTodos();