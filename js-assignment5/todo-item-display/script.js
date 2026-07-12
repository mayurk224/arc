let todoListData = [{ 
        text: "Learn HTML" 
    }, 
    { 
        text: "Learn CSS" 
    }, 
    { 
        text: "Learn JavaScript" 
    } 
];

const todoListEl = document.getElementById('todo-list');

function addTodo(text) {
    const li = document.createElement('li');
    li.innerHTML = `
        <input type="checkbox" class="todo-checkbox">
        <span class="todo-text">${text}</span>
        <button class="delete-btn">Delete</button>
    `;
    todoListEl.appendChild(li);

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

// Render todos when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    todoListData.forEach(todo => {
        addTodo(todo.text);
    });
});
