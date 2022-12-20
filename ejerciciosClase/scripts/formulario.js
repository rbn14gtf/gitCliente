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

    if((telefono.value=="")||isNaN(telefono.value)){
        error(telefono)
        return false
    }else{
        limpiarError(telefono)
        return true
    }
}
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
function limpiarError(elemento){
    elemento.className=""
}