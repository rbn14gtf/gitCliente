function showContact(contactos,index){
    if((Array.isArray(contactos))&&(!isNaN(index))){
        if(index>contactos.length){
            alert("ERROR ArrayIndexOutOfBounds");
        }else{
            console.log(contactos[index]);
            alert("Nombre: "+contactos[index-1].nombre+"\nTelefono: "+contactos[index-1].telefono+"\nCorreo: "+contactos[index-1].correo);
        }
    }
    else{
        alert("ERROR");
    }

}
function showAllContacts(contactos){
    if(Array.isArray(contactos)){
        for(let i=0;i<contactos.length;i++){
            console.log(contactos[i]);
            alert("Nombre: "+contactos[i].nombre+"\nTelefono: "+contactos[i].telefono+"\nCorreo: "+contactos[i].correo);
        }
    }else{
        alert("ERROR");
    }

}
function addNewContact(contactos,nombre,telefono,correo){
    if(Array.isArray(contactos)){
        if(nombre==""||nombre==null){
            alert("No se puede guardar un contacto sin nombre");
        }
        else if(telefono==""||telefono==null){
            alert("No se puede guardar un contacto sin telefono");
        }
        else if(correo==""||correo==null){
            alert("No se puede guardar un contacto sin correo");
        }
        else{
            contactos.push({nombre:nombre,telefono:telefono,correo:correo});
            console.log(contactos[contactos.length-1])
            alert("El contacto de "+contactos[contactos.length-1].nombre+" con el numero "+contactos[contactos.length-1].telefono+" y el correo "+contactos[contactos.length-1].correo+" ha sido añadido");   
        }
    }
    else{
        alert("ERROR");
    }
    
    

}

let contactos=[{nombre:"Maxwell Wright",telefono:"(0191) 7196495",correo:"Curabitur.egestas.nunc@nonummyac.co.uk"},{nombre:"Raja Villareal",telefono:"0866 398 2895",correo:"posuere.vulputate@sed.com"},{nombre:"Helen Richards",telefono:"0800 1111",correo:"libero@convallis.edu"},{nombre:"Maisie Haley",telefono:"0913 531 3030",correo:"risus.Quisque@urna.ca"}];
let opcion=0;
do{
    opcion=Number(prompt("Elige una de estas opciones\n1. Mostrar contacto\n2. Mostrar todos los contactos\n3. Añadir un nuevo contacto\n4. Salir del programa ","Escribe el numero de la opcion deseada"));
    switch (opcion){
        case 1:
            index=Number(prompt("Introduce el numero del contacto que quires ver",""));
            showContact(contactos,index);
            break;
    
        case 2:
            showAllContacts(contactos);
            break;
    
        case 3:
            nombre=prompt("Introduce el nombre","");
            telefono=prompt("Introduce el telefono","");
            correo=prompt("Introduce el correo","");
            addNewContact(contactos,nombre,telefono,correo);
            break;
        case 4:
            alert("Saliendo del programa");
            break;

        default:
            alert("Opcion no valida");
    
        break;
    
    }
}while(opcion!=4);
