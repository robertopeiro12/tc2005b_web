// Este archivo contiene el código JavaScript para la página de inicio de sesión
const login = () => {
    if (username.value === "admin" && password.value === "1234") {
        alert("Bienvenido");
        window.location = "./pages/tags.html";
    }
    else {
        alert("Usuario o contraseña incorrecta");
    }
    
    
};

const boton = document.getElementById("btn-login");
const username = document.getElementById("username");
const password = document.getElementById("password");
boton.addEventListener("click", login);