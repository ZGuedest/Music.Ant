function eventoCambiarIdioma(){

    const ctlgEsp = ["Cuerda","Guitarra","Violín","Bajo","Viento","Trompeta","Flauta","Trompa","Percusión","Batería","Bongó","Miscelanea","Electrónico","Mezcladora","Amplificador", "Microfono"]
    const ctlgEng = ["Strings","Guitar","Violin","Bass","Wind","Trumpet","Flute","Horn","Percussion","Drums","Bongo","Miscellaneous"," Electronic","Mixer","Amplifier", "Microphone"]
    const ctlgEus = ["Hariak","Gitarra","Biolina","Baxua","Haizea","Tronpeta","Flauta","Tronpa","Perkusioa","Bateria","Bongo","Denetariko"," Elektronika","Nahastailea","Anplifikadorea","Mikrofonoa"]

    let opciones = document.getElementsByClassName("idioma");
    for (let a = 0 ; a<opciones.length; a++){
        opciones[a].addEventListener("click", (event)=>{ 
            debugger
            idiomaSelect=event.target.textContent

           arrayM=cambiarIdioma(idiomaSelect, ctlgEsp, ctlgEng, ctlgEus)

           cargarMenu(arrayM)
           cargarFooter(arrayM)
           cargarMenuCatalogo(arrayM)
        })
    }
}