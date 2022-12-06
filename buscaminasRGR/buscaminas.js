const numFilas=10;
let arrayMinas=[]
let generado=false
function tdClick(id){ 
    if(!generado){
        generarMinas()
        tdClick(id);
    }
    else{
        if(arrayMinas.includes(Number(id))){
            document.getElementById(id).innerHTML="💣"
            document.getElementById(id).setAttribute("class","minaEncontrada")
            finDelJuego();
        }else{
            document.getElementById(id).setAttribute("class","destapado")
            cleanCasillas(id)
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
        document.getElementById(posBomba).innerHTML="💣"
    }
    hideInput()
    console.log(arrayMinas)
    document.getElementById("minasRestantes").innerHTML=arrayMinas.length
    generado=true;    
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
    if(document.getElementById(Number(id)+10).getAttribute("class")=="mina"){
        cont++
    }
    if(document.getElementById(Number(id)-1).getAttribute("class")=="mina"){
        cont++
    }
    if(document.getElementById(Number(id)-10).getAttribute("class")=="mina"){
        cont++
    }

    if(cont==0){
        return "";
    }else{
        return cont;
    }

}

function cleanCasillas(id){
    document.getElementById(id).innerHTML=getNumberOfNearBombs(id)
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
    for(let i=0;i<arrayMinas.length;i++){
        document.getElementById(arrayMinas[i]).innerHTML="💣"
    }
    generatePopUp()
}   
function generatePopUp() {
    let popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }
  