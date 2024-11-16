const todoInput = document.querySelector('.todo-input');
const addButton = document.querySelector('.add-button');
const todoList = document.querySelector('.todo-list');

addButton.addEventListener('click', () => {
    const taskText = todoInput.value.trim();
    if (taskText) {
        addTask(taskText);
        todoInput.value = '';
    }
});

todoList.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-button')) {
        e.target.parentElement.remove();
        updateTaskNumbers();
    }
});

function addTask(taskText) {
    const li = document.createElement('li');
    const taskNumber = todoList.children.length + 1;

    const numberSpan = document.createElement('span');
    numberSpan.textContent = `${taskNumber}.`;

    const textSpan = document.createElement('span');
    textSpan.textContent = `${taskText}`;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '✖';
    deleteButton.classList.add('delete-button');

    li.appendChild(numberSpan);
    li.appendChild(textSpan);
    li.appendChild(deleteButton);

    todoList.appendChild(li);
    updateTaskNumbers();
}

function updateTaskNumbers() {
    const tasks = todoList.querySelectorAll('li');
    tasks.forEach((task, index) => {
        const numberSpan = task.querySelector('span:first-child');
        numberSpan.textContent = `${index + 1}.`;
    });
}