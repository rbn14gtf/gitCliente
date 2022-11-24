
let numFilas=10;
let numBombas;
function generar(){
    document.getElementById("tabla").innerHTML+="<table><tbody>"

    for(let i=0;i<document.getElementById("numBombas").value;i++){
        document.getElementById("tabla").innerHTML+="<tr>"
        for(let j=0;j<numFilas;j++){
            document.getElementById("tabla").innerHTML+="<td>"+j+"</td>"
        }
        document.getElementById("tabla").innerHTML+="</tr>"
    }
    document.getElementById("tabla").innerHTML+="</tbody></table>"

}