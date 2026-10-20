const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");
const message = document.getElementById("taskMessage");

let tasks = [];

function showTasks() {
    taskList.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {
        const item = document.createElement("li");
        item.className = "todo-item";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = tasks[i].completed;
        checkbox.setAttribute("aria-label", "Mark " + tasks[i].text + " completed");

        const taskText = document.createElement("span");
        taskText.textContent = tasks[i].text;
        if (tasks[i].completed) {
            taskText.classList.add("completed");
        }

        const deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.textContent = "Delete";
        deleteButton.className = "secondary";

        checkbox.addEventListener("change", function() {
            tasks[i].completed = checkbox.checked;
            showTasks();
        });

        deleteButton.addEventListener("click", function() {
            tasks.splice(i, 1);
            showTasks();
        });

        item.appendChild(checkbox);
        item.appendChild(taskText);
        item.appendChild(deleteButton);
        taskList.appendChild(item);
    }
}

addButton.addEventListener("click", function() {
    const text = taskInput.value.trim();

    if (text === "") {
        message.textContent = "Please enter a task.";
        return;
    }

    tasks.push({ text: text, completed: false });
    taskInput.value = "";
    message.textContent = "";
    showTasks();
});
