function showContact(contactos,index){
    if((Array.isArray(contactos))&&(!isNaN(index))){
        if(index>contactos.length){
            alert("ERROR ArrayIndexOutOfBounds");
            console.log("ERROR ArrayIndexOutOfBounds");
        }else{
            console.log("Mostrando el contacto numero "+index+"\nNombre: "+contactos[index-1].nombre+"\nTeléfono: "+contactos[index-1].telefono+"\nCorreo: "+contactos[index-1].correo);
            alert("Nombre: "+contactos[index-1].nombre+"\nTeléfono: "+contactos[index-1].telefono+"\nCorreo: "+contactos[index-1].correo);
        }
    }
    else{
        alert("ERROR");
        console.log("ERROR");
    }
}
function showAllContacts(contactos){
    if(Array.isArray(contactos)){
        let contacts="";
        for(let i=0;i<contactos.length;i++){
            contacts+=i+1+" Nombre: "+contactos[i].nombre+"\nTeléfono: "+contactos[i].telefono+"\nCorreo: "+contactos[i].correo+"\n\n";
        }
        alert(contacts);
        console.log("Mostrando todos los contactos\n\n"+contacts);
    }else{
        alert("ERROR");
        console.log("ERROR");
    }
}
function addNewContact(contactos,nombre,telefono,correo){
    if(Array.isArray(contactos)){
        if(nombre==""||nombre==null){
            alert("No se puede guardar un contacto sin nombre");
            console.log("No se puede guardar un contacto sin nombre");
        }
        else if(telefono==""||telefono==null){
            alert("No se puede guardar un contacto sin teléfono");
            console.log("No se puede guardar un contacto sin teléfono");
        }
        //comprueba si no es un numero 
        else if(isNaN(telefono)){
            alert("Formato del teléfono no válido");
            console.log("Formato del teléfono no válido"); 
        }
        else if(correo==""||correo==null){
            alert("No se puede guardar un contacto sin correo");
            console.log("No se puede guardar un contacto sin correo");
        }
        //comprueba si ya existe un contacto con ese nombre
        else if(contactos.find(contactos=>contactos.nombre===nombre)){
            alert("Ya existe un contacto con el nombre "+nombre);
            console.log("Ya existe un contacto con el nombre "+nombre);
        }
        //comprueba si ya existe un contacto con ese telefono
        else if(contactos.find(contactos=>contactos.telefono===telefono)){
            alert("Ya existe un contacto con el teléfono "+telefono);
            console.log("Ya existe un contacto con el teléfono "+telefono);
        }
        else{
            contactos.push({nombre:nombre,telefono:telefono,correo:correo});
            console.log("El contacto de "+contactos[contactos.length-1].nombre+" con el teléfono "+contactos[contactos.length-1].telefono+" y el correo "+contactos[contactos.length-1].correo+" ha sido añadido");   
            alert("El contacto de "+contactos[contactos.length-1].nombre+" con el teléfono "+contactos[contactos.length-1].telefono+" y el correo "+contactos[contactos.length-1].correo+" ha sido añadido");   
        }
    }
    else{
        alert("ERROR");
        console.log("ERROR");
    }
}
console.log("Programa Iniciado");
let contactos=[{nombre:"Maxwell Wright",telefono:"(0191) 7196495",correo:"Curabitur.egestas.nunc@nonummyac.co.uk"},{nombre:"Raja Villareal",telefono:"0866 398 2895",correo:"posuere.vulputate@sed.com"},{nombre:"Helen Richards",telefono:"0800 1111",correo:"libero@convallis.edu"},{nombre:"Maisie Haley",telefono:"0913 531 3030",correo:"risus.Quisque@urna.ca"}];
let opcion=0;
do{
    opcion=Number(prompt("Elige una de estas opciones\n1. Mostrar contacto\n2. Mostrar todos los contactos\n3. Añadir un nuevo contacto\n4. Ordenar Contactos\n5. Salir del programa ","Escribe el teléfono de la opcion deseada"));
    switch (opcion){
        case 1:
            index=Number(prompt("Introduce el numero del contacto que quires ver\n",showAllContacts(contactos),""));
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
            let op=0;
            op=Number(prompt("Como desea ordenarlos:\n1. Por Nombre\n2. Por Telefono\n3. Por Correo",""));
            switch(op){
                case 1:
                    contactos.sort(function(a, b){
                        if(a.nombre < b.nombre) { 
                            return -1; 
                        }
                        if(a.nombre > b.nombre) { 
                            return 1; 
                        }
                        return 0;
                    });
                    alert("Contactos ordenados por nombre");
                    console.log("Contactos ordenados por nombre");
                    break;
                case 2:
                    contactos.sort(function(a, b){
                        if(a.telefono < b.telefono) { 
                            return -1; 
                        }
                        if(a.telefono > b.telefono) { 
                            return 1; 
                        }
                        return 0;
                    });
                    alert("Contactos ordenados por telefono");
                    console.log("Contactos ordenados por telefono");
                    break;
                case 3:
                    contactos.sort(function(a, b){
                        if(a.correo < b.correo) { 
                            return -1;
                        }
                        if(a.correo > b.correo) { 
                            return 1; 
                        }
                        return 0;
                    });
                    alert("Contactos ordenados por correo");
                    console.log("Contactos ordenados por correo");
                    break;
                default:
                    alert("ERROR Valor no valido");
                    console.log("ERROR Valor no valido");
                    break;
            }
            break;
        case 5:
            alert("Saliendo del programa");
            console.log("Saliendo del programa");
        break;

        default:
            alert("Opción no valida");
            console.log("Saliendo del programa");
        break;
    }
}while(opcion!=5);