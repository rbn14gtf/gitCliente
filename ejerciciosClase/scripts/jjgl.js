window.onload=iniciar

function iniciar(){
    document.getElementById("enviar").addEventListener("click",validar,false)
}
function validar(e){
    if((isValidName())&&(isValidPhone())&&(isValidAge())&&(window.confirm("Deseas enviar el formulario?"))){
        alert("Validado")
        e.preventDefault();

        return true
    }else{
        alert("No Validado")
        //evita que se produzca la redireccion
        e.preventDefault();
        return false
    }
}
/*
function isValidName(){
    if((document.getElementById("nombre").value)==""){
        error(document.getElementById("nombre"))
        return false
    }else{
        limpiarError(document.getElementById("nombre"))
        return true
    }
}*/
function isValidName(){
    let nombre=document.getElementById("nombre")
    if(!nombre.checkValidity()){
        error(nombre)
        return false
    }else{
        limpiarError(nombre)
        return true
    }
}
function isValidPhone(){
    let telefono=document.getElementById("telefono")

    if(!telefono.checkValidity()){
        error(telefono)
        return false
    }else{
        limpiarError(telefono)
        return true
    }
}
function isValidAge(){
    let edad=document.getElementById("edad")

    if(!edad.checkValidity()){
        error(edad)
        return false
    }else{
        limpiarError(edad)
        return true
    }
}

function error(elemento){
    elemento.className="error"
    elemento.focus()
}
function limpiarError(elemento){
    elemento.className=""
}