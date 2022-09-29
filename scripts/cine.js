function Persona(name,age,peliculaElegida,precioEntrada){
    this.name=name;
    this.age=age;
    this.peliculaElegida=peliculaElegida;
    this.precioEntrada=precioEntrada;
    //this.regalosRecibidos=regalosRecibidos;
}

function esMayorEdad(edad){
    if (edad>=18){
        return true;
    }else{
        return false;
    }

}
