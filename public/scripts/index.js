// Este archivo contiene el código JavaScript para la página de inicio de sesión
const boton = document.getElementById("btn-login");
const username = document.getElementById("username");
const password = document.getElementById("password");

const login = () => {
    if (username.value === "admin" && password.value === "1234") {
        alert("Bienvenido");
        sessionStorage.name = username.value;
        window.location = "./pages/profile.html";
    }
    else {
        alert("Usuario o contraseña incorrecta");
    }
    
    
};


boton.addEventListener("click", login);