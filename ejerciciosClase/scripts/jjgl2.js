window.onload = iniciar;

function iniciar() {
    document.getElementById("enviar").addEventListener('click', validar, false);
}

function validaNombre() {
    var elemento = document.getElementById("nombre");
    if (!elemento.checkValidity()) {
            return false;
    }
    return true;
}

function validaEdad() {
    var elemento = document.getElementById("edad");
    if (!elemento.checkValidity()) {
       
        return false;
    }
    return true;
}

function validaTelefono() {
    var elemento = document.getElementById("telefono");
    if (!elemento.checkValidity()) {
      
        return false;
    }
    return true;
}

function validar(e) {
    borrarError();
    if (validaNombre() && validaEdad() && validaTelefono() && confirm("Pulsa aceptar si deseas enviar el formulario")) {
        return true
    } else {
        e.preventDefault();
        return false;
    }
}

function error(elemento) {
    document.getElementById("mensajeError").innerHTML = elemento.validationMessage;
    elemento.className = "error";
    elemento.focus();
}



function borrarError() {
    var formulario = document.forms[0];
    for (var i = 0; i < formulario.elements.length; i++) {
        formulario.elements[i].className = "";
    }
}