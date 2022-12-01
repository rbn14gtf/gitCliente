const numFilas=10;
function tdClick(id){ 
    document.getElementById(id).setAttribute("class","destapado")
};  
function generarBombas(){ 
    //let numBombas=document.getElementById("numBombas").value
    for(let i=0;i<100;i+=10){
        posBomba=i+Math.round(Math.random() * 10);
        document.getElementById(posBomba).setAttribute("class","bomba")
        console.log(posBomba)
    }

    hideInput()
}
function hideInput(){
    var x = document.getElementById("inputBombas");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
