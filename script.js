let list = document.querySelector('input');
let clear = document.querySelector(".x-button");

document.querySelector('.x-button').addEventListener('click',()=>{
    list.value = "";
})
document.querySelector(".clear-icon").addEventListener("mouseover", ()=> {
    document.querySelector(".clear-icon").src = "./Frame(2).svg";
});

document.querySelector(".clear-icon").addEventListener("mouseout",() =>{
    document.querySelector(".clear-icon").src = "./Frame(1).svg"; 
});
document.querySelector(".clear-icon").addEventListener("mouseover", ()=> {
    document.querySelector(".clear-icon").src = "./Frame(2).svg";
});


document.querySelector(".arrow-icon").addEventListener("mouseover", ()=> {
    document.querySelector(".arrow-icon").src = "./Frame(4).svg";
});

document.querySelector(".arrow-icon").addEventListener("mouseout",() =>{
    document.querySelector(".arrow-icon").src = "./Frame.svg"; 
});
function addTask() {
    const inputField = document.querySelector(".input");
    const inputText = inputField.value.trim();
    const todoContainer = document.querySelector(".todo-container");
    const taskList = document.querySelector(".dataList");

    if (inputText) {
        const newItem = document.createElement("li");
        newItem.classList.add("task-item");

        const taskContent = document.createElement("div");
        taskContent.classList.add("task-content");

        const taskText = document.createElement("span");
        taskText.textContent = inputText;
        taskContent.appendChild(taskText);

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("x-button");
        const deleteIcon = document.createElement("img");
        deleteIcon.src = "./Frame(1).svg";
        deleteIcon.classList.add("clear-icon");

        deleteIcon.addEventListener("mouseover", () => {
            deleteIcon.src = "./Frame(2).svg";
        });
        deleteIcon.addEventListener("mouseout", () => {
            deleteIcon.src = "./Frame(1).svg";
        });

        deleteButton.appendChild(deleteIcon);
        deleteButton.addEventListener("click", () => {
            newItem.remove();
            checkListVisibility(); 
        });
        taskContent.appendChild(deleteButton);

        newItem.appendChild(taskContent);
        taskList.appendChild(newItem);

        inputField.value = "";
    } else {
        if (taskList.innerHTML === "") {
            const noTaskMessage = document.createElement("li");
            noTaskMessage.textContent = "Heç nə yoxdur!";
            noTaskMessage.classList.add("no-task");
            taskList.appendChild(noTaskMessage);
        }
    }

    checkListVisibility(); 
    
}

function checkListVisibility() {
    const taskList = document.querySelector(".dataList");

    if (taskList.children.length === 0) {
        const noTaskMessage = document.createElement("li");
        noTaskMessage.textContent = "Heç nə yoxdur!";
        noTaskMessage.classList.add("no-task");
        taskList.appendChild(noTaskMessage);
    } else {
        const noTaskMessage = document.querySelector(".no-task");
        if (noTaskMessage) noTaskMessage.remove();
    }
    
}

document.querySelector(".add-button").addEventListener("click",()=> {

    const hoverPlus = document.querySelector(".plus-button");
    const mainInput = document.querySelector(".input");
    hoverPlus.addEventListener("click", () => {
        mainInput.classList.remove("dis-none");
    });

    const inputField = document.querySelector(".input");
    const xButton = document.querySelector('.x-button');
    const dataList = document.querySelector(".todo-container");
    const headerText = document.querySelector('.header-text');
    const arrowIcon = document.querySelector('.arrow-icon');
    const deleteButton = document.querySelector('.delete-button');
    inputField.style.display = "none"; 
    xButton.style.display = "none"; 
    dataList.style.display = "block"; 
    dataList.style.marginTop = "10px";
    xButton.style.marginTop = "-20px";
    document.querySelector('.selection').style.marginTop = "-10px";
    arrowIcon.style.marginTop = "0px";
    arrowIcon.style.marginBottom = "5px";
    deleteButton.style.marginTop = "0px";
    headerText.style.marginTop = "54px";
    
});

document.querySelector(".plus-button").addEventListener("click", function () {
    document.querySelector(".input").style.display = "block";     
    document.querySelector(".clear-icon").style.margin = "0px";
    document.querySelector(".arrow-icon").style.marginTop = "25px";
    document.querySelector(".delete-button").style.marginTop="-20px";
    document.querySelector(".arrow-icon").style.marginBottom = "2px";
    document.querySelector('.x-button').style.marginTop = "-10px";
    document.querySelector(".x-button").style.display = "block";
    document.querySelector(".x-button").style.marginRight = "-200px";
    document.querySelector(".clear-icon").style.marginRight = "9px";
});

document.querySelector(".x-button").addEventListener("click", function () {
    document.querySelector(".input").value = ""; 
});

let isAscending = true; 


document.querySelector(".arrow-icon").addEventListener("click", () => {
    const taskList = document.querySelector(".dataList");
    let tasks = Array.from(taskList.children);

    
    for (let i = 0; i < tasks.length; i++) {
        for (let j = 0; j < tasks.length - i - 1; j++) {
            if (
                (isAscending && tasks[j].textContent > tasks[j + 1].textContent) || 
                (!isAscending && tasks[j].textContent < tasks[j + 1].textContent)
            ) {
                let temp = tasks[j];
                tasks[j] = tasks[j + 1];
                tasks[j + 1] = temp;
            }
        }
    }
    taskList.innerHTML = ''; 
    tasks.forEach(task => taskList.appendChild(task)); 
    isAscending = !isAscending;
    const arrowIcon = document.querySelector(".arrow-icon");
    arrowIcon.addEventListener("mouseover", () => {
        arrowIcon.src = isAscending ? "./Frame(5).svg" : "./Frame(4).svg";
    });
    arrowIcon.addEventListener("mouseout", () => {
        arrowIcon.src = isAscending ? "./Frame(6).svg" : "./Frame.svg";
    });
});



// const taskItems = document.querySelectorAll(".task-item"); 
// taskItems.forEach(el => el.classList.add("task-item"));


// taskItems.forEach(item => {
//     item.setAttribute("draggable", "true");
// });

// const taskList = document.querySelector(".dataList");
// let draggedItem = null;


// taskList.addEventListener("dragstart", (e) => {
//     console.log("Drag start target:", e.target); 
//     if (e.target && e.target.classList && e.target.classList.contains("task-item")) {
//         draggedItem = e.target;
//         e.target.classList.add("dragging");
//     }
// });



// taskList.addEventListener("dragend", (e) => {
//     if (draggedItem) {
//         draggedItem.classList.remove("dragging");
//         draggedItem = null;
//     }
// });


// taskList.addEventListener("dragover", (e) => {
//     e.preventDefault();
//     const afterElement = getDragAfterElement(taskList, e.clientY);
//     if (afterElement === null) {
        
//         if (draggedItem) {
//             taskList.appendChild(draggedItem);
//         }
//     } else {
        
//         if (draggedItem && afterElement) {
//             taskList.insertBefore(draggedItem, afterElement);
//         }
//     }
// });


// function getDragAfterElement(container, y) {
//     const draggableElements = [...container.querySelectorAll(".task-item:not(.dragging)")];
//     return draggableElements.reduce(
//         (closest, child) => {
//             const box = child.getBoundingClientRect();
//             const offset = y - box.top - box.height / 2;
//             if (offset < 0 && offset > closest.offset) {
//                 return { offset: offset, element: child };
//             } else {
//                 return closest;
//             }
//         },
//         { offset: Number.NEGATIVE_INFINITY }
//     ).element;
// }
