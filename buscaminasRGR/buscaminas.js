const numFilas=10;
let arrayMinas=[]
function tdClick(id){ 
    
    if(arrayMinas.includes(Number(id))){
        document.getElementById(id).innerHTML="💣"
        document.getElementById(id).setAttribute("class","destapado")
    }else{
        document.getElementById(id).setAttribute("class","destapado")

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
}
function hideInput(){
    var x = document.getElementById("inputMinas");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
