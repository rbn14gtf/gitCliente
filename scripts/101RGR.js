//EJERCICIO 2
let precioRosa =8;
let precioLirio =10;
let precioTulipan =2;

let numeroRosas =70;
let numeroLirios =50;
let numeroTulipanes =120;

let valorRosas=precioRosa*numeroRosas;
let valorLirio=precioLirio*numeroLirios;
let valorTulipanes=precioTulipan*numeroTulipanes;

console.log("Rosa: precio unitario:",precioRosa,"cantidad:",numeroRosas,"valor:",valorRosas);
console.log("Lirio: precio unitario:",precioLirio,"cantidad:",numeroLirios,"valor:",valorLirio);
console.log("Tulipan: precio unitario:",precioTulipan,"cantidad:",numeroTulipanes,"valor:",valorTulipanes);
console.log("Total:",valorRosas+valorLirio+valorTulipanes);

function saludar(){
    var saludo="Hola";
    window.alert(saludo);
}

var despedida="Adiós";
function despedir(){
    window.alert(despedida);
}
var variableAmbito="fuera";
function ambito(){
    var variableAmbito="dentro";
    window.alert(variableAmbito);

}
function muestraVariableGlobal(){
    window.alert(variableGlobal);
}
function muestraVariableAutomaticamenteGlobal(){
    variableAutomaticamenteGlobal="Esto es una variable automaticamente global";
}