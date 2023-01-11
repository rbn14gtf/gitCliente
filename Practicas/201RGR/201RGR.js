window.onload=inicio

function inicio(){
    //alert que indica los tres metodos de validacion pedidos
    infoValidaciones()
    //event listeners
    document.getElementById("google").addEventListener("click",redirigir)
    document.getElementById("enviar").addEventListener("click",validar)
    document.getElementById("reset").addEventListener("click",limpiar)
}
//funcion que redirige a google
function redirigir(){
    window.location.href = "https://google.com";
}
//muestra un alert indicando los tres metodos de validacion pedidos
function infoValidaciones(){
    alert("TRES POSIBILIDADES DE VALIDACIÓN DE FORMULARIOS\n\n1 Atributos en la etiqueta input (maxlength,minlength,pattern)\n2 CheckValidity en el js\n3 Métodos de validity en el js (rangeOverflow,patternMismatch,valueMissing)")
}
//funcion que llama al resto de metodos de validacion y que en caso de que todos los input cumplan con los requisitos,
//envia por correo los datos del formulario
function validar(e){
    if((isValidName())&&(isValidMensaje())&&(isValidDias())&&(window.confirm("Deseas enviar el formulario?"))){
        alert("Enviando Datos...")
        
        //recoge los datos introducidos en el formulario y
        // llama a la funcion getMensajeCorreo para generar el texto del mail
        //mailto: destinatario
        //subject: asunto
        //body: texto del mail
        window.open('mailto:3a.ruben.garciarivera@gmail.com?subject=Formulario&body=\"'+getMensajeCorreo()+'\"');
        // window.location.reload();
        //e.preventDefault();

    }else{
        //evita que se produzca la redireccion
        e.preventDefault();
    }
}
//limpia todos los input del formulario preguntando previamente si desea hacerlo
function limpiar(e){
    if(window.confirm("Empezamos de nuevo?")){
        window.location.reload();

    }else{
        e.preventDefault();
        return false
    }
}
//funcion que recoge los datos del formulario y los junta en un string para su envio
function getMensajeCorreo(){
    let text=""
    text+="Nombre: "+document.getElementById("nombre").value+",\n"
    text+=" Mensaje: "+document.getElementById("mensaje").value+",\n"
    
    text+=" Dias seleccionados: "+"\n"
    let dias=document.getElementById("dias").children
    for(let i=0;i<dias.length;i++){
        if(dias[i].tagName=="INPUT"){
            if(dias[i].checked){
                text+=dias[i].id+" \n"
            }
        }
    }

    text+=", Asignatura: "+document.getElementById("asignaturasSelect").options[document.getElementById("asignaturasSelect").selectedIndex].text+",\n"

    for(let i=0;i<document.getElementsByName("color").length;i++){
        
        if(document.getElementsByName("color")[i].checked){
            //coge el texto del label al que pertenece
            text+=" Color Elegido: "+document.getElementsByName("color")[i].nextElementSibling.textContent+", "
        }else{

        }
    }
    text+=" Dia Preferido: "+(document.getElementById("diaPref").options[document.getElementById("diaPref").selectedIndex].text+"\n")
    return text;
}
//comprueba si el input del nombre cumple con los requisitos
function isValidName(){
    let nombre=document.getElementById("nombre")
    //comprueba los requisitos especificados en el input
    if(!nombre.checkValidity()){
        //da un error en caso de que no se haya introducido un nombre
        if(nombre.validity.valueMissing){
            error2(nombre,"Debe introducir un nombre")
        }
        //da un error en caso de que se haya introducido un nombre que no tiene entre 2 y 15 caracteres
        if(nombre.validity.patternMismatch){
            error2(nombre,"El nombre debe tener entre 2 y 15 caracteres")
        }
        return false
    }else{
        limpiarError(nombre)
        return true
    }
}
//comprueba si el input del mensaje cumple con los requisitos
function isValidMensaje(){
    let mensaje=document.getElementById("mensaje")
    //comprueba los requisitos especificados en el input
    if(!mensaje.checkValidity()){
        //da un error en caso de que no se haya introducido un nombre
        if(mensaje.validity.valueMissing){
            error2(mensaje,"Debe introducir un mensaje")
        }
        //da un error en caso de que no se haya introducido un mensaje que no tiene entre 2 y 500 caracteres
        if(mensaje.validity.patternMismatch){
            error2(mensaje,"El mensaje debe tener entre 2 y 500 caracteres")
        }
        return false
    }else{
        limpiarError(mensaje)
        return true
    }
}
//comprueba si se han seleccionado al menos dos dias
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
//funcion extra de los ejercicios de formularios que segun el color elegido, lo pondra de fondo
function cambiarFondo(id){
    let radios=document.getElementById("radios")
    if(id=="rojo"){
        document.getElementById("mainForm").style.backgroundColor = "red";
        document.getElementById("mainForm").style.border = "10px red";
    }else if(id=="verde"){
        document.getElementById("mainForm").style.backgroundColor = "green";
        document.getElementById("mainForm").style.border = "10px green";
    }else if(id=="amarillo"){
        document.getElementById("mainForm").style.backgroundColor = "yellow";
        document.getElementById("mainForm").style.border = "10px yellow";
    }else if(id=="negro"){
        document.getElementById("mainForm").style.backgroundColor = "grey";
        document.getElementById("mainForm").style.border = "10px grey";
    }else{

    }
    document.getElementById("mainForm").style.borderRadius = "5px";
}
//funcion extra de los ejercicios de formularios que al clicar en el input del nombre
//salta un promt para escribirlo y guardarlo en el input
function pideNombre(){
    document.getElementById("nombre").value=prompt("Introduce tu nombre","")
}
//funcion extra de los ejercicios de formularios que al clicar en el input del mensaje
//salta un promt para escribirlo y guardarlo en el input
function pideMensaje(){
    document.getElementById("mensaje").value=prompt("Introduce un mensaje","")
}
//funcion que actualiza el dia preferido al marcar los checkbox de los dias
//se seleccionara el ultimo dia de la semana que esté marcado
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
//funcion que marca o desmarca todos los dias llamando a la funcion selectall pasando 1 si esta marcado para desmarcar todos
//o 0 para marcar todos
function marcarTodos(){
    if(document.getElementById("checkAll").checked){
        selectAll(1)
    }else{
        selectAll(0)
    }
}
//funcion que marca o desmarca todos los checkbox en funcion del valor recibido
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
        ele[0].checked=true
    }
    updateDiaPref()
}  
//funcion que marca el input con color rojo añadiendole la clase 'error' a la clase que recibe por parametros
function error(elemento){
    elemento.className="error"
    elemento.focus()
}
//funcion que marca el input con color rojo añadiendole la clase 'error' a la clase que recibe por parametros
// y muestra un alert con el motivo del error
function error2(elemento,mensaje) {
    alert(mensaje)
    elemento.className = "error";
    elemento.focus();
}//error
//funcion que quita el bordeado rojo que se crea cuano un input no cumple con los requisitos
function limpiarError(elemento){
    elemento.className=""
}