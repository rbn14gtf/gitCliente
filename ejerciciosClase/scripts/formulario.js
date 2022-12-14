//selectionar el formulario
let formulario=document.getElementById("miFormulario")
let formulario2=document.forms["miFormulario"]
let formulario3=document.getElementsByTagName("form")[0]
let formulario4=document.forms[0]
//selectionar elementos
//formulario.elements[]
// formulario.getElementById("idElemento")
// formulario.getElementsByTagName("tag")

window.onload=iniciar

function iniciar(){
    document.getElementById("enviar").addEventListener("click",validar,false)
}
function validar(){
    console.log("hola")
    if(isValidName()&&isValidPhone()&&isMayorChecked()&&isSexoSelected){
        return true
    }else{
        return false
    }

}

function isValidName(){
    if(document.getElementById("nombre").value==""){
        return false
    }else{
        return true
    }
}
function isValidPhone(){
    if(document.getElementById("telefono").value==""){
        return false
    }else{
        return true
    }
}
function isMayorChecked(){
    if(document.getElementById("mayor").checked){
        return true
    }else{
        return false
    }
}
function isSexoSelected(){
    var radios = document.getElementsByName("sexo");

    for (var i = 0, len = radios.length; i < len; i++) {
        if (radios[i].checked) {
            return true;
        }
    }

    return false;
}