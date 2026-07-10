const form = document.querySelector('form');
const todoInput = document.getElementById('todo-item');
const todoList = document.getElementById('todo-list');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const todoText = todoInput.value.trim();
    if (todoText === '') return;

    addTodo(todoText);
    todoInput.value = '';
});

function addTodo(text) {
    const li = document.createElement('li');
    li.innerHTML = `
        <input type="checkbox" class="todo-checkbox">
        <span class="todo-text">${text}</span>
        <button class="delete-btn">Delete</button>
    `;
    todoList.appendChild(li);

    const checkbox = li.querySelector('.todo-checkbox');
    const todoTextSpan = li.querySelector('.todo-text');
    const deleteBtn = li.querySelector('.delete-btn');

    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            todoTextSpan.style.textDecoration = 'line-through';
        } else {
            todoTextSpan.style.textDecoration = 'none';
        }
    });

    deleteBtn.addEventListener('click', function() {
        li.remove();
    });
}
