function Persona(name,age,peliculaElegida,precioEntrada,regalosRecibidos){
    this.name=name;
    this.age=age;
    this.peliculaElegida=peliculaElegida;
    this.precioEntrada=precioEntrada;
    this.regalosRecibidos=regalosRecibidos;
}

function esMayorEdad(edad){
    if (edad>=18){
        return true;
    }else{
        return false;
    }

}
function getDescuento(edad){
    if (edad<=17){
        return 0.5;
    }else if((edad>=18)&&(edad<=25)){
        return 1;
    }else if((edad>=26)&&(edad<=35)){
        return 0.9;
    }
    else if(edad>=36){
        return 0.8;
    }
    else{
        return 1;
    }

}
//devuelve un array con los regalos que recibe segun la edad
/*
function getRegalos(edad){
    if (edad<=17){
        return new Array[];
    }else if((edad>=18)&&(edad<=25)){
        return 1;
    }else if((edad>=26)&&(edad<=35)){
        return 0.9;
    }
    else if(edad>=36){
        return 0.8;
    }
    else{
        return 1;
    }

}
*/