function showContact(contactos,index){
    if(typeof(contactos)=="Array"&&typeof(index)=="Number"){
        alert("Nombre: "+contactos[index-1].nombre+"\nTelefono: "+contactos[index-1].telefono+"\nCorreo: "+contactos[index-1].correo);
    }
    else{
        alert("ERROR")
    }

}
function showAllContacts(contactos){

}
function addNewContact(contactos,nombre,telefono,correo){

}

let contactos=[{nombre:"Maxwell Wright",telefono:"(0191) 7196495",correo:"Curabitur.egestas.nunc@nonummyac.co.uk"},{nombre:"Raja Villareal",telefono:"0866 398 2895",correo:"posuere.vulputate@sed.com"},{nombre:"Helen Richards",telefono:"0800 1111",correo:"libero@convallis.edu"},{nombre:"Maisie Haley",telefono:"0913 531 3030",correo:"risus.Quisque@urna.ca"}];
let opcion=0;
do{
    opcion=Number(prompt("Elige una de estas opciones\n1. Mostrar el primer contacto\n2. Mostrar el ultimo contacto\n3. Mostrar todos los contactos\n4. Añadir un nuevo contacto\n5. Salir del programa ","Escribe el numero de la opcion elegida"));
    switch (opcion){
        case 1:
            showContact(contactos,1);
            break;
    
        case 2:
            console.log(contactos[contactos.length-1]);
            alert("Nombre: "+contactos[contactos.length-1].nombre+"\nTelefono: "+contactos[contactos.length-1].telefono+"\nCorreo: "+contactos[contactos.length-1].correo);   
            break;
    
        case 3:
            for(let i=0;i<contactos.length;i++){
                console.log(contactos[i]);
                alert("Nombre: "+contactos[i].nombre+"\nTelefono: "+contactos[i].telefono+"\nCorreo: "+contactos[i].correo);
    
            }
            break;
        case 4:
            nombreIntroducido=prompt("Introduce el nombre","");
            telefonoIntroducido=prompt("Introduce el telefono","");
            correoIntroducido=prompt("Introduce el correo","");
            if(nombreIntroducido==""||nombreIntroducido==null){
                alert("No se puede guardar un contacto sin nombre");
            }
            else if(telefonoIntroducido==""||telefonoIntroducido==null){
                alert("No se puede guardar un contacto sin telefono");
            }
            else if(correoIntroducido==""||correoIntroducido==null){
                alert("No se puede guardar un contacto sin correo");
            }
            else{
                contactos.push({nombre:nombreIntroducido,telefono:telefonoIntroducido,correo:correoIntroducido});
                alert("El contacto de "+contactos[contactos.length-1].nombre+" con el numero "+contactos[contactos.length-1].telefono+" y el correo "+contactos[contactos.length-1].correo+" ha sido añadido");   
            }
            break;
        case 5:
            alert("Saliendo del programa");
            break;

        default:
            alert("Opcion no valida");
    
        break;
    
    }
}while(opcion!=5);
