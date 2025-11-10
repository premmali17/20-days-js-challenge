// input= document.getElementById('inputbox');
// // addbtn= document.getElementById('add-btn');
// list= document.getElementById('tasks');

// function addtask(){
//     if( input.value===''){
//         alert('You must write something');
//     }else{
//         let li=document.createElement('li');
//         li.innerHTML=input.value;
//         list.appendChild(li);

//     }

//     input.value='';
       
    
// }



const input = document.getElementById("inputbox");
const list = document.getElementById("tasks");
const addBtn = document.getElementById("add-btn");

// Load existing tasks from local storage
window.addEventListener("DOMContentLoaded", loadTasks);

// Add new task
addBtn.addEventListener("click", addTask);
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTask();
});

function addTask() {
  const taskText = input.value.trim();
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const li = createTaskElement(taskText);
  list.appendChild(li);
  saveTask(taskText);
  input.value = "";
}

// Create task element
function createTaskElement(text, isCompleted = false) {
  const li = document.createElement("li");
  if (isCompleted) li.classList.add("checked");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = isCompleted;
  checkbox.addEventListener("change", () => toggleTask(li, text));

  const span = document.createElement("span");
  span.classList.add("task-text");
  span.textContent = text;

  const delBtn = document.createElement("button");
  delBtn.classList.add("delete-btn");
  delBtn.innerHTML = "✖";
  delBtn.addEventListener("click", () => deleteTask(li, text));

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(delBtn);

  return li;
}

// Toggle task completion
function toggleTask(li, text) {
  li.classList.toggle("checked");
  updateStorage();
}

// Delete task
function deleteTask(li, text) {
  li.remove();
  updateStorage();
}

// Save to local storage
function saveTask(task) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push({ text: task, completed: false });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load tasks on start
function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => {
    const li = createTaskElement(task.text, task.completed);
    list.appendChild(li);
  });
}

// Update storage after delete or toggle
function updateStorage() {
  const allTasks = [];
  document.querySelectorAll("li").forEach((li) => {
    const text = li.querySelector(".task-text").textContent;
    const completed = li.classList.contains("checked");
    allTasks.push({ text, completed });
  });
  localStorage.setItem("tasks", JSON.stringify(allTasks));
}
1