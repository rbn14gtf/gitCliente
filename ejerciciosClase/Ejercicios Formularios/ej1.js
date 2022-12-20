window.onload=inicio

function inicio(){
    document.getElementById("google").addEventListener("click",redirigir)
    document.getElementById("enviar").addEventListener("click",validar)
}
function redirigir(){
    window.location.href = "https://google.com";
}
function validar(e){
    if((isValidName())&&(isValidPhone())&&(isValidDate())&&(isMayorChecked())&&(isSexoSelected()&&(window.confirm("Deseas enviar el formulario?")))){
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



function error(elemento){
    elemento.className="error"
    elemento.focus()
}
function limpiarError(elemento){
    elemento.className=""
}