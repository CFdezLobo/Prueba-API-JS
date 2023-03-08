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
document.querySelector(`#formularioRegistro`).addEventListener('submit',function(e){
    const EXPRREGULARMAIL = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    const EXPREGULARPASS = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,}$/;
    const EXPRECP = /^(?:0[1-9]\d{3}|[1-4]\d{4}|5[0-2]\d{3})$/;
    const EXPRETELFIJO = /^9[0-9]{8}$/;
    const EXPRETELMOV = /^6[0-9]{8}$/;
    var razonSocial = document.querySelectorAll('input[name=razonSocial]');
    var mail = document.querySelector(`#mail`).value;
    var pass = document.querySelector(`#pass`).value;
    var confirmarPass = document.querySelector(`#repetirPass`).value;
    var nombre = document.querySelector(`#nombre`).value;
    var apellidos = document.querySelector(`#apellidos`).value;
    var ciudad = document.querySelector(`#ciudad`).value;
    var direccion = document.querySelector(`#direccion`).value;
    var cp = document.querySelector(`#cp`).value;
    var localidad = document.querySelector(`#localidad`).value;
    var telefono = document.querySelector(`#telefono`).value;
    var cookies = document.querySelectorAll(`input[name=cookies]`);
    var checkBoxCookies = document.querySelector(`#checkBoxCookies`);
    var cookiesSeleccionadas = [];
    var datosUser = [];
    
    // Razon Social
    if(razonSocial[0].checked || razonSocial[1].checked){
        document.querySelector(`#errorRazonSocial`).style.display = 'none';
    }else{
        document.querySelector(`#errorRazonSocial`).style.display = 'block';
        document.querySelector(`#errorRazonSocial`).innerHTML = `<i class="bi bi-exclamation-triangle"></i> Por favor, seleccione una opción`;
        e.preventDefault();
    }
    for(let elemento of razonSocial){
        if(elemento.checked){
            datosUser.push(elemento.value);
        }
        
    }

    // Email
    if(EXPRREGULARMAIL.test(mail)){
        datosUser.push(mail);
        document.querySelector(`#errorEmail`).style.display = 'none';
    }else if(mail.length == 0){
        document.querySelector(`#errorEmail`).style.display = 'block';
        document.querySelector(`#errorEmail`).innerHTML = `<i class="bi bi-exclamation-triangle"></i> Por favor, rellene este campo`;
        e.preventDefault();
    }else{
        document.querySelector(`#errorEmail`).style.display = 'block';
        document.querySelector(`#errorEmail`).innerHTML = `<i class="bi bi-exclamation-triangle"></i> Por favor, inserte una email valido`;
        e.preventDefault();
    }
    
    // Password
    if(EXPREGULARPASS.test(pass)){
        datosUser.push(pass);
        document.querySelector(`#errorPass`).style.display = 'none';
    }else if(pass.length == 0){
        document.querySelector(`#errorPass`).style.display = 'block';
        document.querySelector(`#errorPass`).innerHTML = `<i class="bi bi-exclamation-triangle"></i> Por favor, rellene este campo`;
        e.preventDefault();
    }else{
        document.querySelector(`#errorPass`).style.display = 'block';
        document.querySelector(`#errorPass`).innerHTML = `<i class="bi bi-exclamation-triangle"></i> Por favor, inserte una contraseña valida`;
        e.preventDefault();
    }
    
    // Confirmar Password
    if(EXPREGULARPASS.test(confirmarPass)){
        if(confirmarPass == pass){
            datosUser.push(confirmarPass);
            document.querySelector(`#errorRepetirPass`).style.display = 'none';
        }else{
            document.querySelector(`#errorRepetirPass`).style.display = 'block';
            document.querySelector(`#errorRepetirPass`).innerHTML = `<i class="bi bi-exclamation-triangle"></i> Las contraseñas no coinciden`;
            e.preventDefault();
        }
    }else if(confirmarPass.length == 0){
        document.querySelector(`#errorRepetirPass`).style.display = 'block';
        document.querySelector(`#errorRepetirPass`).innerHTML = `<i class="bi bi-exclamation-triangle"></i> Por favor, rellene este campo`;
        e.preventDefault();
    }
    
    // Nombre
    if(nombre.length > 2 && nombre.length <=40){
        datosUser.push(nombre);
        document.querySelector(`#errorNombre`).style.display = 'none';
    }else if(nombre.length == 0){
        document.querySelector(`#errorNombre`).style.display = 'block';
        document.querySelector(`#errorNombre`).innerHTML = `<i class="bi bi-exclamation-triangle"></i> Por favor, rellene este campo`;
        e.preventDefault();
    }else{
        document.querySelector(`#errorNombre`).style.display = 'block';
        document.querySelector(`#errorNombre`).innerHTML = `<i class="bi bi-exclamation-triangle"></i> Por favor, inserte un nombre correcto`;
        e.preventDefault();
    }
    
    // Apellidos
    if(apellidos.length > 2 && apellidos.length <=30){
        datosUser.push(nombre);
        document.querySelector(`#errorApellidos`).style.display = 'none';
    }else if(apellidos.length == 0){
        document.querySelector(`#errorApellidos`).style.display = 'block';
        document.querySelector(`#errorApellidos`).innerHTML = `<i class="bi bi-exclamation-triangle"></i> Por favor, rellene este campo`;
        e.preventDefault();
    }else{
        document.querySelector(`#errorApellidos`).style.display = 'block';
        document.querySelector(`#errorApellidos`).innerHTML = `<i class="bi bi-exclamation-triangle"></i> Por favor, inserte apellidos correctos`;
        e.preventDefault();
    }
    
    // Ciudad
    if(ciudad != '0'){
        datosUser.push(ciudad);
    }else{
        document.querySelector(`#errorSelectCiudad`).style.display = 'block';
        document.querySelector(`#errorSelectCiudad`).innerHTML = `<i class="bi bi-exclamation-triangle"></i> Por favor, seleccione una opción`;
        e.preventDefault();
    }
    
    // Direccion
    if(direccion.length >= 6 && direccion.length <=30){
        datosUser.push(nombre);
        document.querySelector(`#errorDireccion`).style.display = 'none';
    }else if(direccion.length == 0){
        document.querySelector(`#errorDireccion`).style.display = 'block';
        document.querySelector(`#errorDireccion`).innerHTML = `<i class="bi bi-exclamation-triangle"></i> Por favor, rellene este campo`;
        e.preventDefault();
    }else{
        document.querySelector(`#errorDireccion`).style.display = 'block';
        document.querySelector(`#errorDireccion`).innerHTML = `<i class="bi bi-exclamation-triangle"></i> Por favor, inserte una dirección correcta`;
        e.preventDefault();
    }
    
    // CP
    if(EXPRECP.test(cp)){
        datosUser.push(nombre);
        document.querySelector(`#errorCP`).style.display = 'none';
    }else if(cp.length == 0){
        document.querySelector(`#errorCP`).style.display = 'block';
        document.querySelector(`#errorCP`).innerHTML = `<i class="bi bi-exclamation-triangle"></i> Por favor, rellene este campo`;
        e.preventDefault();
    }else{
        document.querySelector(`#errorCP`).style.display = 'block';
        document.querySelector(`#errorCP`).innerHTML = `<i class="bi bi-exclamation-triangle"></i> Por favor, inserte un código postal correcto`;
        e.preventDefault();
    }

    // Localidad
    if(localidad.length >= 4 && localidad.length <=25){
        datosUser.push(nombre);
        document.querySelector(`#errorLocalidad`).style.display = 'none';
    }else if(localidad.length == 0){
        document.querySelector(`#errorLocalidad`).style.display = 'block';
        document.querySelector(`#errorLocalidad`).innerHTML = `<i class="bi bi-exclamation-triangle"></i> Por favor, rellene este campo`;
        e.preventDefault();
    }else{
        document.querySelector(`#errorLocalidad`).style.display = 'block';
        document.querySelector(`#errorLocalidad`).innerHTML = `<i class="bi bi-exclamation-triangle"></i> Por favor, inserte una localidad correcta`;
        e.preventDefault();
    }
    
    // Telefono
    if(EXPRETELFIJO.test(telefono) || EXPRETELMOV.test(telefono)){
        datosUser.push(nombre);
        document.querySelector(`#errorTelefono`).style.display = 'none';
    }else if(telefono.length == 0){
        document.querySelector(`#errorTelefono`).style.display = 'block';
        document.querySelector(`#errorTelefono`).innerHTML = `<i class="bi bi-exclamation-triangle"></i> Por favor, rellene este campo`;
        e.preventDefault();
    }else{
        document.querySelector(`#errorTelefono`).style.display = 'block';
        document.querySelector(`#errorTelefono`).innerHTML = `<i class="bi bi-exclamation-triangle"></i> Por favor, inserte un número de teléfono correcto`;
        e.preventDefault();
    }

    // Cookies
    if(checkBoxCookies.checked == false){
        document.querySelector(`#errorCookies`).style.display = 'block';
        document.querySelector(`#errorCookies`).innerHTML = `<i class="bi bi-exclamation-triangle"></i> Por favor, acepte la politica de privacidad y cookies`;
        e.preventDefault();
    }else{
        document.querySelector(`#errorCookies`).style.display = 'none';
    }
    for(let cookie of cookies){
        if(cookie.checked){
            cookiesSeleccionadas.push(cookie.value);
        }
    }
    datosUser.push(cookiesSeleccionadas);

});