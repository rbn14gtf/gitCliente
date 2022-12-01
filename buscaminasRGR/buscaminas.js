const numFilas=10;
let arrayMinas=[]
let generado=false
function tdClick(id){ 
    if(!generado){
        generarMinas()
    }
    else{
        if(arrayMinas.includes(Number(id))){
            document.getElementById(id).innerHTML="💣"
            finDelJuego();
            document.getElementById(id).setAttribute("class","minaEncontrada")
        }else{
            document.getElementById(id).setAttribute("class","destapado")
    
        }
    }
    
};  
function generarMinas(){ 
    arrayMinas=[]
    for(let i=0;i<100;i+=10){
        posBomba=i+Math.round(Math.random() * 10);
        arrayMinas.push(posBomba)
        document.getElementById(posBomba).setAttribute("class","mina")
    }
    //hideInput()
    console.log(arrayMinas)
    document.getElementById("minasRestantes").innerHTML=arrayMinas.length
    generado=true;    
    generarNumeros();
}
function generarNumeros(){ 
    for(let i=0;i<100;i+=10){
        if(arrayMinas[i]-document.getElementById(i)>3){
            
        }
    }
}
function hideInput(){
    var x = document.getElementById("inputMinas");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
function finDelJuego(){
    for(let i=0;i<arrayMinas.length;i++){
        document.getElementById(arrayMinas[i]).innerHTML="💣"
    }
    generatePopUp()
}   
function generatePopUp() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }
  