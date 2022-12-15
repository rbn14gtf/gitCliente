window.onload=inicio
let arrayMinas=[]
function inicio(){
    mostrarTablero()
    generarMinas()
    // soloMinasMenosUna()
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
    casilla.setAttribute("id",10*i+j)
    casilla.setAttribute("onclick","tdClick(id)")
    // casilla.innerHTML=10*i+j
    // casilla.style.backgroundColor="grey"
    fila.appendChild(casilla)
}
function soloMinasMenosUna(){
    for(let i=0;i<100;i++){
        if(document.getElementById(i).getAttribute("class")=="minaOculta"){

        }else{
            document.getElementById(i).setAttribute("class","destapado")
            // document.getElementById(i).innerHTML=i

        }
    }
    document.getElementById(99).removeAttribute("class")
}
function generarMinas(){ 
    arrayMinas=[]
    for(let i=0;i<100;i+=10){
        posBomba=i+Math.round(Math.random() * 10);
        if(posBomba==100){
            posBomba--
        }
        
        arrayMinas.push(posBomba)
        //console.log(posBomba)
        document.getElementById(posBomba).setAttribute("class","minaOculta")
        
        //muestra las minas una vez generadas
        document.getElementById(posBomba).innerHTML="💣"
    }
}
function getCasillasLimpiasPorDesmarcar(){
    number=100-arrayMinas.length
    for(let i=0;i<100;i++){
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
            cleanCasilla(Number(id))
            if(getCasillasLimpiasPorDesmarcar()==0){
                finDelJuego()
            }
        }
    }
};  

function cleanCasilla(id){
    let numMinasCasilla=0
    if(id-1>=0){
        if(document.getElementById(id-1).getAttribute("class")=="minaOculta"){//izquierda
            numMinasCasilla++
        }
    }
    if(id+1<100){
        if(document.getElementById(id+1).getAttribute("class")=="minaOculta"){//derecha
            numMinasCasilla++
        }
    }
    if(id+10<100){//abajo
        if(document.getElementById(id+10).getAttribute("class")=="minaOculta"){
            numMinasCasilla++
        }
    }
    if(id-10>=0){//arriba
        if(document.getElementById(id-10).getAttribute("class")=="minaOculta"){
            numMinasCasilla++
        }
    }
    if(id+9<100){//abajo izquierda
        if(document.getElementById(id+9).getAttribute("class")=="minaOculta"){
            numMinasCasilla++
        }
    }
    if(id+11<100){//abajo derecha
        if(document.getElementById(id+11).getAttribute("class")=="minaOculta"){
            numMinasCasilla++
        }
    }
    if(id-9>=0){//arriba derecha
        if(document.getElementById(id-9).getAttribute("class")=="minaOculta"){
            numMinasCasilla++
        }
    }
    if(id-11>=0){//arriba izquierda
        if(document.getElementById(id-11).getAttribute("class")=="minaOculta"){
            numMinasCasilla++
        }
    }
    document.getElementById(id).innerHTML=numMinasCasilla
}
function finDelJuego(){
    destaparTodas()
    for(let i=0;i<arrayMinas.length;i++){
        //document.getElementById(arrayMinas[i]).removeAttribute("class")
        document.getElementById(arrayMinas[i]).innerHTML="💣"
        document.getElementById(arrayMinas[i]).setAttribute("class","mina")
    }
    generatePopUp(1)
}   
function finDelJuegoPerdiste(id){
    destaparTodas()
    for(let i=0;i<arrayMinas.length;i++){
        //document.getElementById(arrayMinas[i]).removeAttribute("class")
        document.getElementById(arrayMinas[i]).innerHTML="💣"
        document.getElementById(arrayMinas[i]).setAttribute("class","mina")
        document.getElementById(id).setAttribute("class","minaEncontrada")

    }
    generatePopUp(0)
}   
function generatePopUp(result) {
    let popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
    if(result==0){
        document.getElementById("myPopup").innerHTML="Has Perdido"
    }else{
        document.getElementById("myPopup").innerHTML="Has Ganado"

    }
}

function destaparTodas(){
    for(let i=0;i<100;i++){
        document.getElementById(i).setAttribute("class","destapado")
    }
}