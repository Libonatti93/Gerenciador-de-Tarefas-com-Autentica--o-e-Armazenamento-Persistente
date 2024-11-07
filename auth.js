// auth.js

function register() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    let users = JSON.parse(localStorage.getItem("users")) || [];
    
    if (users.find(user => user.email === email)) {
        alert("Usuário já registrado!");
        return;
    }
    
    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registro bem-sucedido! Agora faça login.");
}

function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    let users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
        localStorage.setItem("currentUser", JSON.stringify(user));
        alert("Login bem-sucedido!");
        showTaskManager();
    } else {
        alert("Email ou senha incorretos!");
    }
}

function logout() {
    localStorage.removeItem("currentUser");
    document.getElementById("taskManager").style.display = "none";
    document.getElementById("auth").style.display = "block";
    alert("Logout realizado com sucesso!");
}
