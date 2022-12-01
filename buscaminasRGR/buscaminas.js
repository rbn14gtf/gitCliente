
function tdClick(id){ 
    document.getElementById(id).setAttribute("class","destapado")
};  
function generarBombas(){ 
    let numBombas=document.getElementById("numBombas").value
    for(let i=0;i<numBombas;i++){
        let posBomba=Math.round(Math.random() * 100);
        console.log(posBomba)
        document.getElementById(posBomba).setAttribute("class","bomba")
    }
};  

