function persona(nombre,telefono,correo){
    this.nombre=nombre;
    this.telefono=telefono;
    this.correo=correo;
}

let primero=new persona("Maxwell Wright","(0191) 7196495","Curabitur.egestas.nunc@nonummyac.co.uk");
let segundo=new persona("Raja Villareal","0866 398 2895","posuere.vulputate@sed.com");
let tercero=new persona("Helen Richards","0800 1111","libero@convallis.edu");

let contactos=new Array(primero,segundo,tercero);
let contactoNuevo=new persona("Maisie Haley","0913 531 3030","risus.Quisque@urna.ca");
contactos.push(contactoNuevo);

console.log(contactos[0]);
console.log(contactos[contactos.length-1]);
alert(contactos[0].nombre+" | "+contactos[0].telefono+" | "+contactos[0].correo);
alert(contactos[contactos.length-1].nombre+" | "+contactos[contactos.length-1].telefono+" | "+contactos[contactos.length-1].correo);
