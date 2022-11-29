
function generarTablero(){
    let numFilas=10;
    let numBombas= document.getElementById("numBombas").value;
    document.open()
    document.write("<div class='tablero'><table><tbody>")
    let cont=0;
    for(let i=0;i<numFilas;i++){
        document.write("<tr class='td' style='border: 1px solid black width: 1.5em height: 1.5em;'>")
        for(let j=0;j<numFilas;j++){
            document.write("<td class='td' style='border: 1px solid black; width: 1.5em; height: 1.5em;' id="+cont+"></td>")
            cont++;
        }
        document.write("</tr>")
    }
    document.write("</tbody></table></div>")
    document.close()
}   