window.onload=inicio
let arrayMinas=[]
function inicio(){
    mostrarTablero()
    generarMinas()
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
}
function crearCasillero(fila,i,j){
    let casilla=document.createElement("td")
    casilla.setAttribute("id",10*i+j+1)
    casilla.setAttribute("onclick","tdClick(id)")
    // casilla.innerHTML=10*i+j+1
    casilla.style.backgroundColor="grey"
    fila.appendChild(casilla)
}

function generarMinas(){ 
    arrayMinas=[]
    for(let i=0;i<100;i+=10){
        posBomba=i+Math.round(Math.random() * 10);
        
        arrayMinas.push(posBomba)
        document.getElementById(posBomba).setAttribute("class","minaOculta")
        
        //muestra las minas una vez generadas
        document.getElementById(posBomba).innerHTML="💣"
    }
}
function getCasillasLimpiasPorDesmarcar(){
    number=100-arrayMinas.length
    for(let i=1;i<=100;i++){
        if(document.getElementById(i).getAttribute("class")=="destapado"){
            number--
        }

    }
    return number
}

function tdClick(id){ 
    if(arrayMinas.includes(Number(id))){
        document.getElementById(id).innerHTML="💣"
        document.getElementById(id).setAttribute("class","minaEncontrada")
        finDelJuegoPerdiste(id)
    }else{
        if(getCasillasLimpiasPorDesmarcar()==0){
            finDelJuego()
        }
        else if(document.getElementById(id).getAttribute("class")=="destapado"){
            Event.preventDefault
        }
        else{
            document.getElementById(id).setAttribute("class","destapado")
            console.log(getCasillasLimpiasPorDesmarcar())
            if(getCasillasLimpiasPorDesmarcar()==0){
                finDelJuego()
            }
        }
    }
};  