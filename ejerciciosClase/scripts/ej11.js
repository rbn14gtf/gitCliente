window.onload=inicio

let ciudades={"Andalucia":["Almería","Cádiz","Córdoba","Granada","Huelva","Jaén","Málaga","Sevilla"],"Madrid":["Madrid Capital"],"Galicia":["La Coruña","Lugo","Orense","Pontevedra"]}
let ciudadesSize=Object.keys(ciudades).length
function inicio(){
    document.getElementById("ciudadesSelect").addEventListener('change', (event) => {
        updateOption(event.target.value)
    });
    addOptions()

}

function addOptions(){
    let select = document.getElementById('ciudadesSelect');
    
    for (let i = 0; i<ciudadesSize; i++){
        let opt = document.createElement('option');
        switch(i){
            case 0:
                opt.value = "Andalucia";
                opt.innerHTML = "Andalucia";
                break;
            case 1:
                opt.value = "Madrid";
                opt.innerHTML = "Madrid";
            break;
            case 2:
                opt.value = "Galicia";
                opt.innerHTML = "Galicia";
            break;
        }
        
        select.appendChild(opt);
    }
}
function updateOption(ciudad){
    let select = document.getElementById('provinciasSelect');
    if(ciudad=="Andalucia"){
        for (let i = 0; i<ciudades.Andalucia.length; i++){
            if(!ciudades.Andalucia.includes(select[i])){
                select.remove(i)
            }
        }
        for (let i = 0; i<ciudades.Andalucia.length; i++){
            let opt = document.createElement('option');
            if(ciudades.Andalucia[i]=="Granada"){
                opt.value = ciudades.Andalucia[i];
                opt.innerHTML = ciudades.Andalucia[i];
                opt.selected=true;
            }else{
                opt.value = ciudades.Andalucia[i];
                opt.innerHTML = ciudades.Andalucia[i];
            }
            select.appendChild(opt);
    
        }
    }
    else if(ciudad=="Madrid"){
        for (let i = 0; i<ciudades.Madrid.length; i++){
            if(!ciudades.Madrid.includes(select[i])){
                select.remove(i)
            }
        }
        for (let i = 0; i<ciudades.Madrid.length; i++){
            let opt = document.createElement('option');
            opt.value = ciudades.Madrid[i];
            opt.innerHTML = ciudades.Madrid[i];
            select.appendChild(opt);
    
        }
    }
    else if(ciudad=="Galicia"){
        for (let i = 0; i<ciudades.Galicia.length; i++){
            if(!ciudades.Galicia.includes(select[i])){
                select.remove(i)
            }
        }
        for (let i = 0; i<ciudades.Galicia.length; i++){
            let opt = document.createElement('option');
            opt.value = ciudades.Galicia[i];
            opt.innerHTML = ciudades.Galicia[i];
            select.appendChild(opt);
    
        }
    }
    else{
        location.reload()
    }
    
    
}