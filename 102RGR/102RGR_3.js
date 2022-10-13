let contactos=[{nombre:"Maxwell Wright",telefono:"(0191) 7196495",correo:"Curabitur.egestas.nunc@nonummyac.co.uk"},{nombre:"Raja Villareal",telefono:"0866 398 2895",correo:"posuere.vulputate@sed.com"},{nombre:"Helen Richards",telefono:"0800 1111",correo:"libero@convallis.edu"},{nombre:"Maisie Haley",telefono:"0913 531 3030",correo:"risus.Quisque@urna.ca"}];

nombreIntroducido=prompt("Introduce el nombre","");
telefonoIntroducido=prompt("Introduce el telefono","");
correoIntroducido=prompt("Introduce el correo","");
contactos.push({nombre:nombreIntroducido,telefono:telefonoIntroducido,correo:correoIntroducido});

console.log(contactos[0]);
console.log(contactos[contactos.length-1]);

alert("Nombre: "+contactos[0].nombre+"\nTelefono: "+contactos[0].telefono+"\nCorreo: "+contactos[0].correo);   
alert("Nombre: "+contactos[contactos.length-1].nombre+"\nTelefono: "+contactos[contactos.length-1].telefono+"\nCorreo: "+contactos[contactos.length-1].correo);   

