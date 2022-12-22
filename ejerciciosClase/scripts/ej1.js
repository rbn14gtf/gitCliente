window.onload=inicio

function inicio(){
    document.getElementById("google").addEventListener("click",redirigir)
    document.getElementById("enviar").addEventListener("click",validar)
    document.getElementById("reset").addEventListener("click",limpiar)
}
function redirigir(){
    window.location.href = "https://google.com";
}
function validar(e){
    if((isValidName())&&(isValidTa())&&(isValidDias())&&(window.confirm("Deseas enviar el formulario?"))){
        alert("Enviando Datos...")
        
        // window.open('mailto:3a.ruben.garciarivera@gmail.com?subject=Formulario&body=\"'+getMensajeCorreo()+'\"');
        window.location.reload();
        //e.preventDefault();

        return true
    }else{
        //evita que se produzca la redireccion
        e.preventDefault();
        return false
    }
}
function limpiar(e){
    if(window.confirm("Empezamos de nuevo?")){
        window.location.reload();

    }else{
        e.preventDefault();
        return false
    }
}
function getMensajeCorreo(e){
    let text=""
    text+="Nombre: "+document.getElementById("nombre").value+"\n"
    text+=" Mensaje: "+document.getElementById("mensaje").value+"\n"
    
    text+=" Dias seleccionados: "+"\n"
    let dias=document.getElementById("dias").children
    for(let i=0;i<dias.length;i++){
        if(dias[i].tagName=="INPUT"){
            if(dias[i].checked){
                text+=dias[i].id+" \n"
                
            }
            
        }
    }

    text+=" Asignatura: "+document.getElementById("asignaturasSelect").options[document.getElementById("asignaturasSelect").selectedIndex].text+"\n"
    for(let i=0;i<document.getElementById("radios").length;i++){
        
        if(document.getElementById("radios")[i].checked){
            text+=document.getElementById("radios").id+" "
        }
    }
    text+=" Dia Preferido: "+(document.getElementById("diaPref").options[document.getElementById("diaPref").selectedIndex].text+"\n")
    return text;
}
function isValidName(){
    let nombre=document.getElementById("nombre")
    if(!nombre.checkValidity()){
        if(nombre.validity.valueMissing){
            error2(nombre,"Debe introducir un nombre")
        }
        if(nombre.validity.patternMismatch){
            error2(nombre,"El nombre debe tener entre 2 y 15 caracteres")
        }
        return false
    }else{
        limpiarError(nombre)
        return true
    }
}
function isValidTa(){
    let mensaje=document.getElementById("mensaje")
    if(!mensaje.checkValidity()){
        if(nombre.validity.valueMissing){
            error(nombre)
        }
        if(nombre.validity.patternMismatch){
            error(nombre)
        }
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
        alert("Marca como minimo dos dias")
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


function pideNombre(){
    document.getElementById("nombre").value=prompt("Introduce tu nombre","")
}
function pideMensaje(){
    document.getElementById("mensaje").value=prompt("Introduce un mensaje","")
}
function updateDiaPref(){
    let dias=document.getElementById("dias").children
    for(let i=0;i<dias.length;i++){
        if(dias[i].tagName=="INPUT"){
            if(dias[i].checked){
                document.getElementById("diaPref").value=dias[i].id
                
            }
            
        }
    }
}
function marcarTodos(){
    if(document.getElementById("checkAll").checked){
        selectAll(1)
    }else{
        selectAll(0)
    }

}
function selectAll(bool){  
    let ele=document.getElementsByName('dias');  
    if(bool==1){
        for(let i=0; i<ele.length; i++){  
            if(ele[i].type=='checkbox') {
                ele[i].checked=true;  
            } 
        }
    }else{
        for(let i=0; i<ele.length; i++){  
            if(ele[i].type=='checkbox')  {
                ele[i].checked=false;  
            }
        } 
    }
      
}  
function error(elemento){
    elemento.className="error"
    elemento.focus()
}
function error2(elemento,mensaje) {
    alert(mensaje)
    elemento.className = "error";
    elemento.focus();
}//error

function limpiarError(elemento){
    elemento.className=""
}