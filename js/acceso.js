// Funcion para cerrar cookies
var cookies = localStorage.getItem('contenedorCookies');
if(cookies == `aceptadas`){
    document.getElementById(`contenedorCookies`).style.visibility = "hidden";
}

document.getElementById(`iconoCerrar`).onclick = cerrarCookies;
document.getElementById(`botonCookies`).onclick = guardarCookies;

function cerrarCookies(contenedorCookies){
    document.getElementById(`contenedorCookies`).style.visibility = "hidden";
}

function guardarCookies(){
    document.getElementById(`contenedorCookies`).style.visibility = "hidden";
    localStorage.setItem(`contenedorCookies`,`aceptadas`);
} 

// Validación formulario acceso
document.querySelector(`#formularioAcceso`).addEventListener('submit',function(e){
    const EXPRREGULARMAIL = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    const EXPREGULARPASS = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,}$/;
    let pass = document.querySelector(`#pass`).value;
    let mail = document.querySelector(`#mail`).value;
    var datosUser = [];
    
    if(EXPRREGULARMAIL.test(mail)){
        datosUser.push(mail);
        document.querySelector(`#errorMail`).style.display = 'none';
    }else{
        document.querySelector(`#errorMail`).style.display = 'block';
        document.querySelector(`#errorMail`).style.color = 'red';
        document.querySelector(`#errorMail`).innerHTML = `<i class="bi bi-exclamation-triangle"></i> Por favor inserte una email valido`;
        e.preventDefault();
    }

    if(EXPREGULARPASS.test(pass)){
        datosUser.push(pass);
        document.querySelector(`#errorPass`).style.display = 'none';
    }else{
        document.querySelector(`#errorPass`).style.display = 'block';
        document.querySelector(`#errorPass`).style.color = 'red';
        document.querySelector(`#errorPass`).innerHTML = `<i class="bi bi-exclamation-triangle"></i> Por favor inserte una contraseña valida`;
        e.preventDefault();
    }
});