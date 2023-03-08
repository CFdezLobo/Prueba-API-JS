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

// petición API con función fetch the type get.
fetch('https://rickandmortyapi.com/api/character')
.then( (info) =>{
        if(info.ok){
            return info.json();
        }else{
            alert(`NO PUEDO ESTABLECER CONEXIÓN CON API`)
        }
    })
.then(datos => pintaInfo(datos));

function pintaInfo(datos){
    var contenedor = document.querySelector('.contenedorCards');
    for(let item of datos.results){
        contenedor.innerHTML += 
        `<article class="cardPersonaje">
            <div class="contenedorImagen">
                <img src=${item.image} alt="" title="" class="imagenPersonaje">
            </div>
            <div class="contenedorDatos">
                <div class="datosPersonaje">
                    <a href="${item.url}"><h2>${item.name}</h2></a>
                     <span class="estado">
                     <span>${item.status} - ${item.species} - ${item.gender}</span>
                     </span>
                 </div>
                <div class="datosPersonaje">
                    <span class="textoPersonaje">Origen:</span>  
                    <a href="${item.origin.url}">${item.origin.name}</a>            
                </div>
                <div class="datosPersonaje">
                    <span class="textoPersonaje">Última localización conocida:</span>  
                    <a href="${item.location.url}">${item.location.name}</a>        
                </div>
            </div>
        </article>`;
    }
}

// Validación formulario index
document.querySelector(`#formularioMenu`).addEventListener('submit',function(e){
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
        event.preventDefault();
    }

    if(EXPREGULARPASS.test(pass)){
        datosUser.push(pass);
        document.querySelector(`#errorPass`).style.display = 'none';
    }else{
        document.querySelector(`#errorPass`).style.display = 'block';
        document.querySelector(`#errorPass`).style.color = 'red';
        document.querySelector(`#errorPass`).innerHTML = `<i class="bi bi-exclamation-triangle"></i> Por favor inserte una contraseña valido`;
        e.preventDefault();
    }
});
