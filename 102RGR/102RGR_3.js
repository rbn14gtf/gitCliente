function persona(nombre,telefono,correo){
    this.nombre=nombre;
    this.telefono=telefono;
    this.correo=correo;
}

let primero=new persona("Maxwell Wright","(0191) 7196495","Curabitur.egestas.nunc@nonummyac.co.uk");
let segundo=new persona("Raja Villareal","0866 398 2895","posuere.vulputate@sed.com");
let tercero=new persona("Helen Richards","0800 1111","libero@convallis.edu");
let cuarto=new persona("Maisie Haley","0913 531 3030","risus.Quisque@urna.ca");
let contactos=new Array(primero,segundo,tercero,cuarto);


nombreIntroducido=prompt("Introduce el nombre","");
telefonoIntroducido=prompt("Introduce el telefono","");
correoIntroducido=prompt("Introduce el correo","");
let contactoIntroducido=new persona(nombreIntroducido,telefonoIntroducido,correoIntroducido);
contactos.push(contactoIntroducido);
console.log(contactos[0]);
console.log(contactos[contactos.length-1]);
alert(contactos[0]);
alert(contactos[contactos.length-1]);

