window.onload = iniciar;

function iniciar() {
    document.getElementById("enviar").addEventListener('click', validar, false);
}

function validar(e) {
    borrarError();
    if (validaNombre() && validaEdad() && validaTelefono() && window.confirm("Pulsa aceptar si deseas enviar el formulario")) {
        window.location.reload();
        return true
    } else {
        error(elemento)
        e.preventDefault();
        return false;
    }
}//validar
function validaNombre() {
    var elemento = document.getElementById("nombre");
    if (!elemento.checkValidity()) {
        if(elemento.validity.valueMissing){
            error2(elemento,"Debe introducir un nombre")
        }
        if(elemento.validity.patternMismatch){
            error2(elemento,"El nombre debe tener entre 2 y 15 caracteres")
        }
        return false;
    }
    return true;
}//validaNombre

function validaEdad() {
    var elemento = document.getElementById("edad");
    if (!elemento.checkValidity()) {
        if(elemento.validity.valueMissing){
            error2(elemento,"Debe introducir una edad")
        }
        if(elemento.validity.rangeOverflow){
            error2(elemento,"La edad debe ser menor 99")
        }
        else if(elemento.validity.rangeUnderflow){
            error2(elemento,"La edad debe ser mayor 18")
        }

        return false;
    }
    return true;
}//validaEdad

function validaTelefono() {
    var elemento = document.getElementById("telefono");
    if (!elemento.checkValidity()) {
        if(elemento.validity.valueMissing){
            error2(elemento,"Debe introducir un telefono")
        }
        if(elemento.validity.patternMismatch){
            error2(elemento,"Introduce un telefono de 9 cifras")
        }
        return false;
    }
    return true;
}//validaTelefono


function error(elemento) {
    document.getElementById("mensajeError").innerHTML = elemento.validationMessage;
    elemento.className = "error";
    elemento.focus();
}//error
function error2(elemento,mensaje) {
    document.getElementById("mensajeError").innerHTML=mensaje
    elemento.className = "error";
    elemento.focus();
}//error



function borrarError() {
    var formulario = document.forms[0];
    for (var i = 0; i < formulario.elements.length; i++) {
        formulario.elements[i].className = "";
    }
}//borrarError