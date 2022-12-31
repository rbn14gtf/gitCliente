window.onload=inicio
const listaServidores=["gmail.es","outlook.com","educamadrid.org"]
function inicio(){
    document.getElementById("validar").addEventListener("click",validarEmail)

}
function validarEmail(){
    
    let email=document.getElementById("email").value
    if(formatoCorrecto(email)){
        if(listaServidores.includes(email.split("@")[1])){
            alert("Email Valido")
        }else{
            alert("Email no Valido")
        }
    }else{
        alert("Formato no Valido")
    }
    

}
function formatoCorrecto(email){
    if(email.indexOf("@")==-1){
        return false
    }
    else if(email.indexOf(".")==-1){
        return false
    }else if(email.indexOf("@")>email.indexOf(".")){
        return false
    }else{
        return true
    }
}