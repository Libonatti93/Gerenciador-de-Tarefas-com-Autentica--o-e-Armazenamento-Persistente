// tasks.js

function addTask() {
    const title = document.getElementById("taskTitle").value;
    const description = document.getElementById("taskDescription").value;

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (!currentUser) {
        alert("Faça login para adicionar tarefas.");
        return;
    }

    const newTask = { 
        id: Date.now(),
        user: currentUser.email, 
        title, 
        description 
    };
    tasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
}

function displayTasks() {
    const taskContainer = document.getElementById("taskContainer");
    taskContainer.innerHTML = "";

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.filter(task => task.user === currentUser.email).forEach(task => {
        const taskElement = document.createElement("div");
        taskElement.innerHTML = `
            <h4>${task.title}</h4>
            <p>${task.description}</p>
            <button onclick="deleteTask(${task.id})">Excluir</button>
        `;
        taskContainer.appendChild(taskElement);
    });
}

function deleteTask(taskId) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(task => task.id !== taskId);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
}
