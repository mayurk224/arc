const form = document.querySelector('form');
const input = document.querySelector('input[type="text"]');
const todoList = document.getElementById('todo-list');

let todos = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (text) {
        const todo = {
            id: Date.now(),
            text: text,
            completed: false
        };
        todos.push(todo);
        input.value = '';
        renderTodos();
    }
});

function renderTodos() {
    todoList.innerHTML = '';
    todos.forEach(todo => {
        const li = document.createElement('li');
        li.className = todo.completed ? 'completed' : '';
        li.innerHTML = `
            <input type="checkbox" class="todo-checkbox">
        <span class="todo-text">${todo.text}</span>
        <button class="delete-btn">Delete</button>
        `;
        li.addEventListener('click', (e) => {
            if (e.target !== li.querySelector('.delete-btn')) {
                toggleTodo(todo.id);
            }
        });
        li.querySelector('.delete-btn').addEventListener('click', () => {
            deleteTodo(todo.id);
        });
        todoList.appendChild(li);
    });
}

function toggleTodo(id) {
    todos = todos.map(todo => {
        if (todo.id === id) {
            return { ...todo, completed: !todo.completed };
        }
        return todo;
    });
    renderTodos();
}

function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    renderTodos();
}
