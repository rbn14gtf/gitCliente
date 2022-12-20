window.onload=inicio

function inicio(){
    document.getElementById("google").addEventListener("click",redirigir)
    document.getElementById("enviar").addEventListener("click",validar)
}
function redirigir(){
    window.location.href = "https://google.com";
}
function validar(e){
    if((isValidName())&&(isValidTa())&&(isValidDias())&&(window.confirm("Deseas enviar el formulario?"))){
        alert("Validado")
        window.location.reload();
        //e.preventDefault();

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
function isValidTa(){
    let mensaje=document.getElementById("mensaje")
    if(!mensaje.checkValidity()){
        error(mensaje)
        return false
    }else{
        limpiarError(mensaje)
        return true
    }
}
function isValidDias(){
    let dias=document.getElementsByName("dias")
    let cont=0
    for (let i=0;i<dias.length;i++){
        if(dias[i].checked){
            cont++
        }
    }
    if(cont>=2){
        return true
    }else{
        return false
    }
}

function cambiarFondo(id){
    let radios=document.getElementById("radios")
    if(id=="rojo"){
        radios.style.backgroundColor = "red";
        radios.style.border = "10px red";
        radios.style.borderRadius = "5px";

    }else if(id=="verde"){
        radios.style.backgroundColor = "green";
        radios.style.border = "10px green";
        radios.style.borderRadius = "5px";

    }else if(id=="amarillo"){
        radios.style.backgroundColor = "yellow";
        radios.style.border = "10px yellow";
        radios.style.borderRadius = "5px";

    }else if(id=="negro"){
        radios.style.backgroundColor = "grey";
        radios.style.border = "10px grey";
        radios.style.borderRadius = "5px";

    }else{

    }
}


function error(elemento){
    elemento.className="error"
    elemento.focus()
}
function limpiarError(elemento){
    elemento.className=""
}