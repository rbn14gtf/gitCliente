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

varTexto="ABCD";
varTexto+="EFG"
console.log(varTexto);


function saludar(){
    var saludo="Hola";
    alert(saludo);
}

var despedida="Adiós";
function despedir(){
    alert(despedida);
}