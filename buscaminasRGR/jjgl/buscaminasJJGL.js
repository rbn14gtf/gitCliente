window.onload=inicio
let arrayMinas=[]
function inicio(){
    mostrarTablero()
    escribirMinas()
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
    casilla.setAttribute("oncontextmenu","ponerBandera(id)")
    casilla.addEventListener('contextmenu', event => event.preventDefault())
    // casilla.innerHTML=10*i+j
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
function ponerBandera(id){
    if(clickSobreBandera(id)){
        quitarBandera(id)
    }else if(document.getElementById(id).getAttribute("class")=="destapado"){
        
    }
    else{
        document.getElementById(id).innerHTML="🚩"
        document.getElementById("numeroBanderas").innerHTML=getNumberOfFlags()
    }
}
function quitarBandera(id){
    document.getElementById(id).innerHTML=""
    document.getElementById("numeroBanderas").innerHTML=getNumberOfFlags()

    /*
    //solo valido si se ven las minas
    if(document.getElementById(id).getAttribute("class")=="minaOculta"){
        document.getElementById(id).innerHTML="💣"
    }else{
        document.getElementById(id).innerHTML=""
        document.getElementById("numeroBanderas").innerHTML=getNumberOfFlags()
    }

}
    */

}
function pulsarBandera(id){
    document.getElementById(id).innerHTML=""
    document.getElementById("numeroBanderas").innerHTML=getNumberOfFlags()
    tdClick(id)
}
function getNumberOfFlags(){
    let num=0
    for(let i=0;i<100;i++){
        if(document.getElementById(i).innerHTML=="🚩"){
            num++
        }
    }
    return num
}
function getMinasAleatorias(){
    let array=[]
    for(let i=0;i<100;i+=10){
        posBomba=i+Math.round(Math.random() * 10);
        if(posBomba==100){
            posBomba--
        }
        array.push(posBomba)
    }
    return array;
}
function escribirMinas(){ 
    arrayMinas=getMinasAleatorias()
    console.log(arrayMinas)
    for(let i=0;i<arrayMinas.length;i++){
        document.getElementById(arrayMinas[i]).setAttribute("class","minaOculta")
        //muestra las minas una vez generadas
        document.getElementById(arrayMinas[i]).innerHTML="💣"
    }
    document.getElementById("numeroBombas").innerHTML=arrayMinas.length
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
    document.getElementById("numeroBanderas").innerHTML=getNumberOfFlags()
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
        else if(clickSobreBandera(id)){
            pulsarBandera(id)
        }
        else{
            document.getElementById(id).setAttribute("class","destapado")
            // console.log(getCasillasLimpiasPorDesmarcar())
            cleanCasillas(Number(id))
            if(getCasillasLimpiasPorDesmarcar()==0){
                finDelJuego()
            }
        }
    }
};  
function clickSobreBandera(id){
    if(document.getElementById(id).innerHTML=="🚩"){
        return true
    }else{
        return false
    }

}
function cleanCasillas(id){
    if(getNumMinas(id)==0){
        document.getElementById(id).innerHTML=""
    }else{
        document.getElementById(id).innerHTML=getNumMinas(id)

    }
    /*
    for(let i=0;i<100;i++){
        if(document.getElementById(id+1).getAttribute("class")=="minaOculta"){
            document.getElementById(id).innerHTML=getNumMinas(id)
            
        }else{
            
        }

    }*/
}
function getNumMinas(id){
    let numMinasCasilla=0
    /*if((id-1>=0)&&(!estaEnOtraLinea(Number(id-1)))){//izquierda
        if(document.getElementById(id-1).getAttribute("class")=="minaOculta"){//izquierda
            console.log("id-1")
            console.log(id-1)
            numMinasCasilla++
        }
    }   
    if((id+1<100)&&(!estaEnOtraLinea(Number(id+1)))){//derecha
        if(document.getElementById(id+1).getAttribute("class")=="minaOculta"){//derecha
            numMinasCasilla++
            console.log("id+1")
            console.log(id+1)

        }
    }*/
    if(id-1>=0){//izquierda
        if(document.getElementById(id-1).getAttribute("class")=="minaOculta"){//izquierda
            numMinasCasilla++
        }
    }   
    if(id+1<100){//derecha
        if(document.getElementById(id+1).getAttribute("class")=="minaOculta"){//derecha
            numMinasCasilla++
        }
    }
    if(id+10<100){//abajo
        if(document.getElementById(id+10).getAttribute("class")=="minaOculta"){
            numMinasCasilla++
            console.log("id+10")
            console.log(id+10)

        }
    }
    if(id-10>=0){//arriba
        if(document.getElementById(id-10).getAttribute("class")=="minaOculta"){
            numMinasCasilla++
            console.log("id-10")
            console.log(id-10)

        }
    }
    if(id+9<100){//abajo izquierda
        if(document.getElementById(id+9).getAttribute("class")=="minaOculta"){
            numMinasCasilla++
            console.log("id+9")
            console.log(id+9)

        }
    }
    if(id+11<100){//abajo derecha
        if(document.getElementById(id+11).getAttribute("class")=="minaOculta"){
            numMinasCasilla++
            console.log("id+11")
            console.log(id+11)

        }
    }
    if(id-9>=0){//arriba derecha
        if(document.getElementById(id-9).getAttribute("class")=="minaOculta"){
            numMinasCasilla++
            console.log("id-9")
            console.log(id-9)

        }
    }
    if(id-11>=0){//arriba izquierda
        if(document.getElementById(id-11).getAttribute("class")=="minaOculta"){
            numMinasCasilla++
            console.log("id-11")
            console.log(id-11)

        }
    }
    switch(numMinasCasilla){
        case 0:
            document.getElementById(id).style.color="black"
            return numMinasCasilla
        case 1:
            document.getElementById(id).style.color="blue"
            return numMinasCasilla
        case 2:
            document.getElementById(id).style.color="green"
            return numMinasCasilla
        case 3:
            document.getElementById(id).style.color="brown"
            return numMinasCasilla
        default:
            return numMinasCasilla
    }
}
function estaEnOtraLinea(id){
    if(id+1>100||id-1<0){
        return true
    }
    if((Math.floor(id/10))!=(Math.floor((id+1)/10))){
        return true
    }else{
        return false
    }
}
function finDelJuego(){
    destaparTodas()
    for(let i=0;i<arrayMinas.length;i++){
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
