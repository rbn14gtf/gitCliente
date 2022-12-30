window.onload=inicio
let letrasDNI=["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];


function inicio(){
    document.getElementById("validar").addEventListener("click",validarDni)

    function soloNumero(dni){
        let dniArray=dni.split("");
        dniArray.pop();
        dni="";
        for(let i=0;i<dniArray.length;i++){
            dni+=dniArray[i];
        }
        return dni;
    }

    function validarDni(){
        let dni=document.getElementById("dni").value
        if(!isNaN(dni.charAt(dni.length-1))){
            alert("El dni debe contener una letra");
        }
        else if(dni.charAt(dni.length-1)==letrasDNI[Number(dni.substr(0, dni.length - 1))%23]){
            alert("El dni "+dni+" es valido");
        }
        else{
            alert("El dni "+dni+" no es valido\nA este dni le corresponderia la letra "+letrasDNI[soloNumero(dni)%23]);
        }
    }
}