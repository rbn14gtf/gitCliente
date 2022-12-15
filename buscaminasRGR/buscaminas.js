const numFilas=10;
//let casillasLimpiasPorDesmarcar=numFilas*10-arrayMinas.length
let arrayMinas=[]
let generado=false
function tdClick(id){ 
    if(!generado){
        generarMinas();
        tdClick(id);
    }
    else{
        if(arrayMinas.includes(Number(id))){
            document.getElementById(id).innerHTML="💣"
            document.getElementById(id).setAttribute("class","minaEncontrada")
            finDelJuego();
        }else{
            if(casillasLimpiasPorDesmarcar==0){
                finDelJuego()
            }
            else if(document.getElementById(id).getAttribute("class")=="destapado"){
                Event.preventDefault
            }
            else{
                document.getElementById(id).setAttribute("class","destapado")
                //cleanCasillas(id)
                
                casillasLimpiasPorDesmarcar--
                console.log(casillasLimpiasPorDesmarcar)
            }
            
        }
    }
    
};  
function generarMinas(){ 
    arrayMinas=[]
    for(let i=0;i<100;i+=10){
        
        posBomba=i+Math.round(Math.random() * 10);
        if(posBomba>100){
            posBomba--;
        }
        arrayMinas.push(posBomba)
        document.getElementById(posBomba).setAttribute("class","mina")
        
        //muestra las minas una vez generadas
        document.getElementById(posBomba).innerHTML="💣"
    }
    //hideInput()
    console.log(arrayMinas)
    document.getElementById("minasRestantes").innerHTML=arrayMinas.length
    generado=true;    
    casillasLimpiasPorDesmarcar=numFilas*10-arrayMinas.length
    //console.log(casillasLimpiasPorDesmarcar)
    //generarNumeros();
}
function generarNumeros(){ 
    for(let i=0;i<100;i+=10){
        if(arrayMinas[i]-document.getElementById(i)>3){

        }
    }
}
function hideInput(){
    let x = document.getElementById("inputMinas");
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
        //console.log(i)
        
        if(document.getElementById(i+1).getAttribute("class")=="mina"){
            if(document.getElementById(i).innerHTML==""){
                document.getElementById(i).innerHTML="1"
            }else{
                document.getElementById(i).innerHTML=Number(document.getElementById(i).innerHTML)+1
                i--
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
        document.getElementById(arrayMinas[i]).removeAttribute("class")
        document.getElementById(arrayMinas[i]).innerHTML="💣"
    }
    generatePopUp()
}   
function generatePopUp() {
    let popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}
function destaparTodas(){
    for(let i=1;i<=100;i++){
        document.getElementById(i).setAttribute("class","destapado")
    }
}
  