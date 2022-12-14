let formulario=document.getElementById("miFormulario")
let formulario2=document.forms["miFormulario"]
let formulario3=document.getElementsByTagName("form")[0]
let formulario4=document.forms[0]
document.getElementById("enviar").addEventListener("click",show)

function show(){
    console.log("hola")
    console.table(formulario)
}

//console.table(formulario)