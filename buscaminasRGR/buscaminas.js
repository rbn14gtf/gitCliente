let arrayMinas=[]
let generado=false
window.onload=inicio
let number=100-arrayMinas.length
function inicio(){
    soloMinasMenosUna()
    generarMinas()
    hideInput()
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
function soloMinasMenosUna(){
    for(let i=1;i<100;i++){
        if(document.getElementById(i).getAttribute("class")=="minaOculta"){

        }else{
            document.getElementById(i).setAttribute("class","destapado")
            document.getElementById(i).innerHTML=i

        }
    }
    
    document.getElementById(100).innerHTML=100
}

function tdClick(id){ 
    if(!generado){
        generarMinas();
        tdClick(id);
    }
    else{
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
                //cleanCasillas(id)
            }
        }
    }
};  
function generarMinas(){ 
    arrayMinas=[]
    for(let i=1;i<=100;i+=10){
        posBomba=i+Math.round(Math.random() * 10);
        if(posBomba>100){
            posBomba--;
        }
        arrayMinas.push(posBomba)
        document.getElementById(posBomba).setAttribute("class","minaOculta")
        
        //muestra las minas una vez generadas
        document.getElementById(posBomba).innerHTML="💣"
    }
    //hideInput()
    console.log(arrayMinas)
    document.getElementById("minasRestantes").innerHTML=arrayMinas.length
    generado=true;    
}
function hideInput(){
    let x = document.getElementById("botonEnviar");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function getNumberOfNearBombs(id){
    let cont=0
    if(document.getElementById(Number(id)+1).getAttribute("class")=="mina"){
        cont++
    }
    /*
    if(document.getElementById(Number(id)+10).getAttribute("class")=="mina"){
        cont++
    }
    */
    if(document.getElementById(Number(id)-1).getAttribute("class")=="mina"){
        cont++
    }
    /*
    if(document.getElementById(Number(id)-10).getAttribute("class")=="mina"){
        cont++
    }*/

    if(cont==0){
        return "";
    }else{
        return cont;
    }

}

function cleanCasillas(id){
    let fila=1;
    for(let i=1;i<100;i++){
        console.log(i)
        
        if(document.getElementById(i+1).getAttribute("class")=="mina"){
            if(document.getElementById(i).innerHTML==""){
                document.getElementById(i).innerHTML="1"
            }else{
                document.getElementById(i).innerHTML=Number(document.getElementById(i).innerHTML)+1
                i++
            }
            for(let j=i;j<100;j++){
                if(document.getElementById(i+1).getAttribute("class")=="mina"){
                    i++
                }else{
                    break
                }
            }
        }else{
            document.getElementById(i).setAttribute("class","destapado")
        }
    }
    /*
    for(let i=100;i>1;i--){
        console.log(i)
        
        if(document.getElementById(i-1).getAttribute("class")=="mina"){
            if(document.getElementById(i).innerHTML==""){
                document.getElementById(i).innerHTML="1"
            }else{
                document.getElementById(i).innerHTML=Number(document.getElementById(i).innerHTML)+1
                i--
            }
            for(let j=i;j>1;j--){
                if(document.getElementById(i-1).getAttribute("class")=="mina"){
                    i--
                }else{
                    break
                }
            }
        }else{
            document.getElementById(i).setAttribute("class","destapado")
        }
    }*/
    
   // document.getElementById(id).innerHTML=getNumberOfNearBombs(id)
    /*
    if(document.getElementById(Number(id)+1).getAttribute("class")=="mina"){
        console.log(Number(id)+1)
        document.getElementById(id).innerHTML="1"
    }
    
    if(document.getElementById(Number(id)+10).getAttribute("class")=="mina"){
        console.log(Number(id)+10)
        document.getElementById(id).innerHTML="1"
    }
    if(document.getElementById(Number(id)-1).getAttribute("class")=="mina"){
        console.log(Number(id)-1)
        document.getElementById(id).innerHTML="1"
    }
    if(document.getElementById(Number(id)-10).getAttribute("class")=="mina"){
        console.log(Number(id)-10)
        document.getElementById(id).innerHTML="1"
    }*/
    

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
    for(let i=1;i<=100;i++){
        document.getElementById(i).setAttribute("class","destapado")
    }
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