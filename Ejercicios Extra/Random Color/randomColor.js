
//Numero aleatorio, minimo y maximo incluidos
function numeroAleatorio(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
// Funcion manejadora que cambia de color el fondo
function cambiarColor(evt){
    console.log(evt.target.type)
    if (evt.target.type == "submit"){
        document.body.style.backgroundColor=`rgb(${numeroAleatorio(0,255)},${numeroAleatorio(0,255)},${numeroAleatorio(0,255)})`		
        console.log("color aleatorio")
    } else {	
        
        document.body.style.backgroundColor="white"
    }

    evt.preventDefault()	
    evt.stopPropagation()
}
document.addEventListener("click", cambiarColor);
document.getElementById("idBoton").addEventListener("click",cambiarColor)