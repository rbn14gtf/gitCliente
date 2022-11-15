

function radioFunction(){
    console.log(document.getElementById(this.value).value)
    if(document.getElementById(this.value).checked){
        document.getElementById(this.value).checked=false
    }else{
        document.getElementById(this.value).checked=true
    }
    
}

function limpiaArray(arrayALimpiar){
    for(let i=0;i<arrayALimpiar.length;i++){
        if((arrayALimpiar[i]=="\n")||(arrayALimpiar[i]=="")||(arrayALimpiar[i]==".")||(arrayALimpiar[i]==",")){
            arrayALimpiar.splice(i, 1); 
            i--;
        }
    }
    for(let i=0;i<arrayALimpiar.length;i++){
        for(let j=0;j<arrayALimpiar[i].length;j++){
            if(arrayALimpiar[i].charAt(j)==","){
                arrayALimpiar[i]=arrayALimpiar[i].slice(0, -1);
            }
        }
    }
    return arrayALimpiar;
}
function buscar(){
    let textoABuscar=document.getElementById("textoABuscar").value;
    let text=document.getElementById("texto").innerHTML;
    let completas=document.getElementById("completas").checked;
    let mayusvsminus=document.getElementById("mayusvsminus").checked;
    let textArray=text.split(" ")
    textArray=limpiaArray(textArray)
    document.getElementById("palabrasEncontradas").innerHTML="Palabras encontradas:"

    let numberOfOptions=0
    if(completas&&mayusvsminus){
        numberOfOptions=2
    }
    else if(!completas&&!mayusvsminus){
        numberOfOptions=0
    }
    else{
        numberOfOptions=1
    }

    for(let i=0;i<textArray.length;i++){
        switch(numberOfOptions){
            //no distingue mayusculas y minusculas y palabras no completas
            case 0:
                if((textArray[i].toLowerCase()==textoABuscar.toLowerCase())||(textArray[i].includes(textoABuscar))){
                    console.log(i+" Palabra encontrada")
                    document.getElementById("palabrasEncontradas").innerHTML+="\n"+textArray[i]
                }
                else{
                }
            break;
            //distingue o busca solo palabras completas
            case 1:
                //distingue mayusculas y minusculas
                if(mayusvsminus){
                    if((textArray[i]==textoABuscar)||(textArray[i].includes(textoABuscar))){
                        console.log(i+" Palabra encontrada")
                        document.getElementById("palabrasEncontradas").innerHTML+="\n"+textArray[i]
                    }
                    else{
                    }
                }
                //palabras completas
                else{
                    if(textArray[i].toLowerCase()==textoABuscar.toLowerCase()){
                        console.log(i+" Palabra encontrada")
                        document.getElementById("palabrasEncontradas").innerHTML+="\n"+textArray[i]
                    }
                    else{
                    }
                }
            break;

            //distingue mayusculas y minusculas y busca solo palabras completas
            case 2:
                if(textArray[i]==textoABuscar){
                    console.log(i+" Palabra encontrada")
                    document.getElementById("palabrasEncontradas").innerHTML+="\n"+textArray[i]
                }
                else{
                }
            break;
        }
    }    
    
}