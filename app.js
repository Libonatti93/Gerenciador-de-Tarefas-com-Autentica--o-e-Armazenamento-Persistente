// app.js

function showTaskManager() {
    document.getElementById("auth").style.display = "none";
    document.getElementById("taskManager").style.display = "block";
    displayTasks();
}

// Verifica se o usuário já está logado ao carregar a página
window.onload = function() {
    if (localStorage.getItem("currentUser")) {
        showTaskManager();
    }
};
