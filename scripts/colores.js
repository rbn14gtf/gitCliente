function rojo(){
    document.body.style.backgroundColor = "red";
    document.getElementById("redButton").style.backgroundColor = "red";
    console.log("Color de fondo cambiado a rojo")
    document.getElementById("color").innerHTML="Rojo"


}
function amarillo(){
    document.body.style.backgroundColor = "yellow";
    document.getElementById("yellowButton").style.backgroundColor = "yellow";
    console.log("Color de fondo cambiado a amarillo")
    document.getElementById("color").innerHTML="Amarillo"


    
}
function verde(){
    document.body.style.backgroundColor = "green";
    document.getElementById("greenButton").style.backgroundColor = "green";
    console.log("Color de fondo cambiado a verde")
    document.getElementById("color").innerHTML="Verde"


}
function limpiar(){
    location.reload();
    console.log("Pantalla refrescada")

}