const boton_profile = document.getElementById("btn-profile");

const onClick = () => {
    alert("Bienvenido a la pagina web");
};
boton_profile.addEventListener("click", onClick);

window.onload = () => {
    if(sessionStorage.name){

        const name = document.getElementById("name");
        name.innerText = "Name: " + sessionStorage.name;
    }else{
        alert("No has iniciado sesión");
        window.location = "./index.html";
    }
};

