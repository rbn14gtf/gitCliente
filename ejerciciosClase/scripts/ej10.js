window.onload=inicio
const extensiones=["gmail.es","outlook.com","educamadrid.org"]
function inicio(){
    document.getElementById("validar").addEventListener("click",validarEmail)

}
function validarEmail(){
    let email=document.getElementById("email").value

    if(extensiones.includes(email.split("@")[1])){
        alert("Email Valido")
    }else{
        alert("Email no Valido")
    }

}