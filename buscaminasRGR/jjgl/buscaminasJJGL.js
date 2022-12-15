window.onload=inicio
function inicio(){
    mostrarTablero()
    hideInput()
}
function mostrarTablero(){
    let tabla=document.createElement("table")
    tabla.setAttribute("id","idTabla")
    for(let i=0;i<10;i++){
        let fila=document.createElement("tr");
        for(let j=0;j<10;j++){
            crearCasillero(fila,i,j)
        }
        tabla.appendChild(fila)
    }
    document.getElementById("idTablero").appendChild(tabla)
    generado=true
}
function crearCasillero(fila,i,j){
    let casilla=document.createElement("td")
    casilla.setAttribute("id",10*i+j)
    casilla.setAttribute("onclick","tdClick(id)")
    casilla.innerHTML=10*i+j
    casilla.style.backgroundColor="grey"
    fila.appendChild(casilla)
}
function hideInput(){
    let x = document.getElementById("botonEnviar");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function tdClick(id){
    console.log(id)
}