let numBombas=document.getElementById("numBombas").value;

function generarBomba(){
    let posiblesResultados=["0","1"]
    if(Math.floor(Math.random()*100)<=10){
        return posiblesResultados[0]

    }else{
        return posiblesResultados[1]
    }

}
function generarMarco(){
    let numColumnas,numFilas;
    if(document.getElementById("facil").checked){
        numFilas=numColumnas=document.getElementById("facil").value;
        dificultad="facil";
    }else if(document.getElementById("medio").checked){
        numFilas=numColumnas=document.getElementById("medio").value;
        dificultad="medio";
    }else if(document.getElementById("dificil").checked){ 
        numFilas=numColumnas=document.getElementById("dificil").value;
        dificultad="dificil";
    }else{
        numFilas=numColumnas=document.getElementById("facil").value;
        dificultad="facil";
    }
    for (let i=0;i<numFilas;i++){
        
        for (let j=0;j<numColumnas;j++){
            //document.getElementById("marco").innerHTML+="[_]"
            let valor=generarBomba();
            if(valor==""){
                document.getElementById("marco").innerHTML+="<input type='button' id="+i+" onClick='this.disabled=true' value="+valor+">"
            }else{
                document.getElementById("marco").innerHTML+="<input type='button' id="+i+" onClick='this.disabled=true' value="+valor+">"
            }

        }
    document.getElementById("marco").innerHTML+="<br/>"
    }
}
