let corazones= document.getElementsByClassName("corazon-vacio")
console.log(corazones)
for( let i=0; i< corazones.length; i++){

    corazones[i].addEventListener("click", ()=>{

        cambiar(corazones[i]);
    })
}


function cambiar(corazon) {
    let valor =  corazon.getAttribute("class");
    if (valor == "fa-regular fa-heart corazon-vacio") {
        corazon.setAttribute("class", "fa-solid fa-heart-circle-check corazon-vacio");
    } else {
        corazon.setAttribute("class", "fa-regular fa-heart corazon-vacio");
    }
}


