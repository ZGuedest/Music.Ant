const ctlgEsp = ["Cuerda","Guitarra","Violín","Bajo","Viento","Trompeta","Flauta","Trompa","Percusión","Batería","Bongó","Miscelanea","Electrónico","Mezcladora","Amplificador", "Microfono"]
const ctlgEng = ["Strings","Guitar","Violin","Bass","Wind","Trumpet","Flute","Horn","Percussion","Drums","Bongo","Miscellaneous"," Electronic","Mixer","Amplifier", "Microphone"]
const ctlgEus = ["Hariak","Gitarra","Biolina","Baxua","Haizea","Tronpeta","Flauta","Tronpa","Perkusioa","Bateria","Bongo","Denetariko"," Elektronika","Nahastailea","Anplifikadorea","Mikrofonoa"]

let arrayCata=[];
arrayCata=ctlgEsp;
cargarCatalogo(arrayCata)


function cargarCatalogo(arrayCata){
debugger;
let cajaCatalogo = document.getElementById("cont-radio-check");

cajaCatalogo.innerHTML = ` 

  <div id="radiocatalogo" class="d-flex justify-content-around" >

     <div id="cuerda" class="form-check form-check-inline">

        <div id="caja-radio-cuerda" class="d-flex flex-row align-items-center justify-content-around">
            <input id="radio-cuerda" class="form-check-input p-1 m-2" type="radio" name="inlineRadioOptions" value="cuerda" checked>
            <label class="form-check-label" for="radio-cuerda">${arrayCata[0]}</label>
            <div id="ico-cuerda"></div>
        </div>


        <div id="checks-cuerda">
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="check-guitarra" value="guitarra">
                <label class="form-check-label" for="check-guitarra">${arrayCata[1]}</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="check-violin" value="violin">
                <label   label class="form-check-label" for="check-violin">${arrayCata[2]}</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="check-bajo" value="bajo">
                <label class="form-check-label" for="check-bajo">${arrayCata[3]}</label>
            </div>

        </div>

    </div>

    <div id="viento"class="form-check form-check-inline ">
         <div id="caja-radio-viento" class="d-flex flex-row align-items-center justify-content-around">
            <input id="radio-viento" class="form-check-input p-1 m-2" type="radio" name="inlineRadioOptions" value="viento">
            <label class="form-check-label" for="radio-viento">${arrayCata[4]}</label>
            <div id="ico-viento"></div>
        </div>


        <div id="checks-viento" >
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="check-trompeta" value="trompeta">
                <label class="form-check-label" for="check-trompeta">${arrayCata[5]}</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="check-flauta" value="flauta">
                <label   label class="form-check-label" for="check-flauta">${arrayCata[6]}</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="check-trompa" value="trompa">
                <label class="form-check-label" for="check-trompa">${arrayCata[7]}</label>
            </div>

        </div>
    </div>

    <div id="percusion"class="form-check form-check-inline ">
        <div id="caja-radio-percusion" class="d-flex flex-row align-items-center justify-content-between">
            <input id="radio-percusion" class="form-check-input p-1 m-2" type="radio" name="inlineRadioOptions"  value="percusion">
            <label class="form-check-label" for="radio-percusion">${arrayCata[8]}</label>
            <div id="ico-percusion"></div>
        </div>


        <div id="checks-percusion">
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="check-bateria" value="bateria">
                <label class="form-check-label" for="check-bateria">${arrayCata[9]}</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="check-bongo" value="bongo">
                <label   label class="form-check-label" for="check-bongo">${arrayCata[10]}</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="check-miscelanea" value="miscelanea">
                <label class="form-check-label" for="check-miscelanea">${arrayCata[11]}</label>
            </div>

        </div>
    </div>

    <div id="electronico"class="form-check form-check-inline ">
        <div id="caja-radio-electronico" class="d-flex flex-row align-items-center justify-content-between">
            <input  id="radio-electronico" class="form-check-input p-1 m-2" type="radio" name="inlineRadioOptions" value="electronico">
            <label class="form-check-label" for="radio-electronico">${arrayCata[12]}</label>
            <div id="ico-electronico"></div>
        </div>


        <div id="checks-electronico">
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="check-mezcladora" value="mezcladora">
                <label class="form-check-label" for="check-mezcladora">${arrayCata[13]}</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="check-Amplificador" value="amplificador">
                <label   label class="form-check-label" for="check-Amplificador">${arrayCata[14]}</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="check-microfono" value="microfono">
                <label class="form-check-label" for="check-microfono">${arrayCata[15]}</label>
            </div>

        </div>
    </div>
</div>
`

}






