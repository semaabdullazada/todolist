const todoInput = document.querySelector('.todo-input');
const xButton = document.querySelector('.x-button'); 
const pbutton = document.querySelector('.plus-button'); 
const addButton = document.querySelector('.add-button');
const todoList = document.querySelector('.todo-list');
xButton.style.display = "block";
const arrowIcon = document.querySelector(".arrow-icon"); 

xButton.addEventListener('click', () => {
    todoInput.value = '';
});
 
pbutton.addEventListener('click', () => {
    todoInput.style.display = 'block';
    todoInput.focus();
    xButton.style.display = "block";
    xButton.style.marginRight = "18px";

});

addButton.addEventListener('click', () => {
    const taskText = todoInput.value.trim();
    if (taskText) {
        addTask(taskText);
        todoInput.value = '';
        todoInput.style.display = "none";
        xButton.style.display = "none";
    }
});

document.querySelector(".arrow-icon").addEventListener("mouseover", ()=> {
    document.querySelector(".arrow-icon").src = "./Frame(4).svg";
});
document.querySelector(".arrow-icon").addEventListener("mouseout",() =>{
    document.querySelector(".arrow-icon").src = "./Frame.svg"; 
});
 
function addTask(taskText) {
    const li = document.createElement('li');
    const taskNumber = todoList.children.length + 1;

    const numberSpan = document.createElement('span');
    numberSpan.textContent = `${taskNumber}.`;

    const textSpan = document.createElement('span');
    textSpan.textContent = taskText;

    const taskDeleteButton = document.createElement('button');
    taskDeleteButton.innerHTML = `<img src="./Frame(1).svg" class="delete-icon">`;  
    taskDeleteButton.classList.add('delete-button');

    li.appendChild(numberSpan);
    li.appendChild(textSpan);
    li.appendChild(taskDeleteButton);

    todoList.appendChild(li);

    taskDeleteButton.addEventListener('click', () => {
        li.remove();
        updateTaskNumbers();
    });

    updateTaskNumbers();  
}
 
let isAscending = true;   
function updateTaskNumbers() {
    const tasks = todoList.querySelectorAll('li');
    tasks.forEach((task, index) => {
        const numberSpan = task.querySelector('span:first-child'); 
        numberSpan.textContent = `${index + 1}.`;
    });
}

arrowIcon.addEventListener("click", () => {
    const taskList = document.querySelector(".todo-list");
    let tasks = Array.from(taskList.children); 
 
    tasks.sort((a, b) => {
        const aText = a.querySelector('span:nth-child(2)').textContent.toLowerCase();
        const bText = b.querySelector('span:nth-child(2)').textContent.toLowerCase();

        if (isAscending) {
            return aText < bText ? -1 : aText > bText ? 1 : 0;
        } else {
            return aText > bText ? -1 : aText < bText ? 1 : 0;
        }
    });
  
    taskList.innerHTML = '';
    tasks.forEach(task => taskList.appendChild(task));
    updateTaskNumbers();
    isAscending = !isAscending;

    arrowIcon.addEventListener("mouseover", () => {
        arrowIcon.src = isAscending ? "./Frame(5).svg" : "./Frame(4).svg";
    });
    arrowIcon.addEventListener("mouseout", () => {
        arrowIcon.src = isAscending ? "./Frame(6).svg" : "./Frame.svg";
    });
});