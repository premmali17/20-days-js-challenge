let draggedTask = null;

const tasks =
document.querySelectorAll(".task");

tasks.forEach(task => {

    task.addEventListener("dragstart", () => {

        draggedTask = task;

    });

});

const columns =
document.querySelectorAll(".task-list");

columns.forEach(column => {

    column.addEventListener("dragover", (e) => {

        e.preventDefault();

    });

    column.addEventListener("drop", () => {

        column.appendChild(draggedTask);

    });

});

function addTask(columnId){

    const text =
    prompt("Enter task");

    if(!text){
        return;
    }

    const task =
    document.createElement("div");

    task.classList.add("task");

    task.innerText = text;

    task.setAttribute("draggable","true");

    task.addEventListener("dragstart", () => {

        draggedTask = task;

    });

    document
    .getElementById(columnId)
    .appendChild(task);
}