document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    const savedTodos = []

    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const todoText = todoInput.value.trim();
        if (todoText) {
            const todoItem = document.createElement('li');
            todoItem.innerHTML = `
                <span>${todoText}</span>
                <button class="delete-btn">Delete</button>
            `;
            todoList.appendChild(todoItem);
            todoInput.value = '';
            savedTodos.push(todoText);
        }
    });

    todoList.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-btn')) {
            const todoItem = e.target.parentElement;
            todoList.removeChild(todoItem);
        }

        if (e.target.tagName === 'SPAN') {
            e.target.classList.toggle('completed');
        }

    });
});