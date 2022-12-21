//selectionar el formulario
/*
let formulario=document.getElementById("miFormulario")
let formulario2=document.forms["miFormulario"]
let formulario3=document.getElementsByTagName("form")[0]
let formulario4=document.forms[0]
*/
//selectionar elementos
//formulario.elements[]
// formulario.getElementById("idElemento")
// formulario.getElementsByTagName("tag")

window.onload=iniciar

function iniciar(){
    document.getElementById("enviar").addEventListener("click",validar,false)
}
function validar(e){
    if((isValidName())&&(isValidPhone())&&(isValidDate())&&(isMayorChecked())&&(isSexoSelected()&&(window.confirm("Deseas enviar el formulario?")))){
        alert("Formulario validado y enviado")
        e.preventDefault();
        return true
    }else{
        alert("Formulario no validado ni enviado")
        //evita que se produzca la redireccion
        e.preventDefault();
        return false
    }
}
function isValidName(){
    let nombre=document.getElementById("nombre")
    if (!nombre.checkValidity()) {
        if(nombre.validity.valueMissing){
            error2(nombre,"Debe introducir un nombre")
        }
        if(nombre.validity.patternMismatch){
            error2(nombre,"El nombre debe tener entre 2 y 15 caracteres")
        }
        return false;
    }
    return true;
}
function isValidPhone() {
    var telefono = document.getElementById("telefono");
    if (!telefono.checkValidity()) {
        if(telefono.validity.valueMissing){
            error2(telefono,"Debe introducir un telefono")
        }
        if(telefono.validity.patternMismatch){
            error2(telefono,"Introduce un telefono de 9 cifras")
        }
        return false;
    }
    return true;
}//validaTelefono
function isValidDate(){
    let dia=document.getElementById("dia").value
    let mes=document.getElementById("mes").value
    let anyo=document.getElementById("anyo").value
    if(isNaN(dia)||(isNaN(mes)||(isNaN(anyo)))){
        error(document.getElementById("dia"))
        error(document.getElementById("mes"))
        error(document.getElementById("anyo"))
        return false
    }
    else if((dia=="")||(mes=="")||(anyo=="")){
        error(document.getElementById("dia"))
        error(document.getElementById("mes"))
        error(document.getElementById("anyo"))
        return false
    }else{
        let fecha=new Date(anyo,mes,dia);
        if(isNaN(fecha)){
            error(document.getElementById("dia"))
            error(document.getElementById("mes"))
            error(document.getElementById("anyo"))
            return false
        }else{
            return true
        }
    }
}
function isMayorChecked(){
    if(document.getElementById("mayor").checked){
        return true
    }else{
        document.getElementById("mayor").focus()
        return false
    }
}
function isSexoSelected(){
    let radios = document.getElementsByName("sexo");

    for (let i=0; i<radios.length;i++) {
        if (radios[i].checked) {
            return true;
        }
    }
    return false;
}

function error(elemento){
    elemento.className="error"
    elemento.focus()
}

function error2(elemento,mensaje) {
    document.getElementById("mensajeError").innerHTML=mensaje
    elemento.className = "error";
    elemento.focus();
}//error

function limpiarError(elemento){
    elemento.className=""
}