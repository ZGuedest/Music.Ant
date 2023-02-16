
const ctlgEsp = ["Cuerda","Guitarra","Violín","Bajo","Viento","Trompeta","Flauta","Trompa","Percusión","Batería","Bongó","Miscelanea","Electrónico","Mezcladora","Amplificador", "Microfono"]
const ctlgEng = ["Strings","Guitar","Violin","Bass","Wind","Trumpet","Flute","Horn","Percussion","Drums","Bongo","Miscellaneous"," Electronic","Mixer","Amplifier", "Microphone"]
const ctlgEus = ["Hariak","Gitarra","Biolina","Baxua","Haizea","Tronpeta","Flauta","Tronpa","Perkusioa","Bateria","Bongo","Denetariko"," Elektronika","Nahastailea","Anplifikadorea","Mikrofonoa"]


let arrayCata=[];

arrayCata=cambiarIdioma(idiomaSelect, ctlgEsp, ctlgEng, ctlgEus)
cargarMenuCatalogo(arrayCata)

function cargarMenuCatalogo(arrayCata){

    let cajaCatalogo = document.getElementById("cont-radio-check");

    cajaCatalogo.innerHTML = ` 

    <div id="radiocatalogo" class="d-flex justify-content-around" >

        <div id="cuerda" class="form-check form-check-inline">

            <div id="caja-radio-cuerda" class="d-flex flex-row align-items-center justify-content-around">
                <input id="radio-cuerda" class="form-check-input p-1 m-2" type="radio" name="inlineRadioOptions" value="cuerda" checked>
                <label class="form-check-label" for="radio-cuerda">${arrayCata[arrayM.length-1][0]}</label>
                <div id="ico-cuerda"></div>
            </div>


            <div id="checks-cuerda">
                <div class="form-check form-check-inline">
                    <input class="form-check-input ck " data-bs-c="cuerda" type="checkbox" id="check-guitarra" value="guitarra">
                    <label class="form-check-label" for="check-guitarra">${arrayCata[arrayM.length-1][1]}</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input ck " type="checkbox" id="check-violin" value="violin">
                    <label   label class="form-check-label" for="check-violin">${arrayCata[arrayM.length-1][2]}</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input ck" type="checkbox" id="check-bajo" value="bajo">
                    <label class="form-check-label" for="check-bajo">${arrayCata[arrayM.length-1][3]}</label>
                </div>

            </div>

        </div>

        <div id="viento"class="form-check form-check-inline ">
            <div id="caja-radio-viento" class="d-flex flex-row align-items-center justify-content-around">
                <input id="radio-viento" class="form-check-input p-1 m-2" type="radio" name="inlineRadioOptions" value="viento">
                <label class="form-check-label" for="radio-viento">${arrayCata[arrayM.length-1][4]}</label>
                <div id="ico-viento"></div>
            </div>


            <div id="checks-viento" >
                <div class="form-check form-check-inline">
                    <input class="form-check-input ck" type="checkbox" id="check-trompeta" value="trompeta">
                    <label class="form-check-label" for="check-trompeta">${arrayCata[arrayM.length-1][5]}</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input ck" type="checkbox" id="check-flauta" value="flauta">
                    <label   label class="form-check-label" for="check-flauta">${arrayCata[arrayM.length-1][6]}</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input ck" type="checkbox" id="check-trompa" value="trompa">
                    <label class="form-check-label" for="check-trompa">${arrayCata[arrayM.length-1][7]}</label>
                </div>

            </div>
        </div>

        <div id="percusion"class="form-check form-check-inline ">
            <div id="caja-radio-percusion" class="d-flex flex-row align-items-center justify-content-between">
                <input id="radio-percusion" class="form-check-input p-1 m-2" type="radio" name="inlineRadioOptions"  value="percusion">
                <label class="form-check-label" for="radio-percusion">${arrayCata[arrayM.length-1][8]}</label>
                <div id="ico-percusion"></div>
            </div>


            <div id="checks-percusion">
                <div class="form-check form-check-inline">
                    <input class="form-check-input ck" type="checkbox" id="check-bateria" value="bateria">
                    <label class="form-check-label" for="check-bateria">${arrayCata[arrayM.length-1][9]}</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input ck" type="checkbox" id="check-bongo" value="bongo">
                    <label   label class="form-check-label" for="check-bongo">${arrayCata[arrayM.length-1][10]}</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input ck" type="checkbox" id="check-miscelanea" value="miscelanea">
                    <label class="form-check-label" for="check-miscelanea">${arrayCata[arrayM.length-1][11]}</label>
                </div>

            </div>
        </div>

        <div id="electronico"class="form-check form-check-inline ">
            <div id="caja-radio-electronico" class="d-flex flex-row align-items-center justify-content-between">
                <input  id="radio-electronico" class="form-check-input p-1 m-2" type="radio" name="inlineRadioOptions" value="electronico">
                <label class="form-check-label" for="radio-electronico">${arrayCata[arrayM.length-1][12]}</label>
                <div id="ico-electronico"></div>
            </div>


            <div id="checks-electronico">
                <div class="form-check form-check-inline">
                    <input class="form-check-input ck" type="checkbox" id="check-mezcladora" value="mezcladora">
                    <label class="form-check-label" for="check-mezcladora">${arrayCata[arrayM.length-1][13]}</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input ck" type="checkbox" id="check-Amplificador" value="amplificador">
                    <label   label class="form-check-label" for="check-Amplificador">${arrayCata[arrayM.length-1][14]}</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input ck" type="checkbox" id="check-microfono" value="microfono">
                    <label class="form-check-label" for="check-microfono">${arrayCata[arrayM.length-1][15]}</label>
                </div>

            </div>
        </div>
    </div>
    `
    //eventoCambiarIdioma()
}






/////////////////////////////////////////////////////////////////////////////
const radioCatalogo = document.getElementById("radiocatalogo");

const radioCuerda = document.getElementById("radio-cuerda");
const checksCuerda = document.getElementById("checks-cuerda");

const radioViento = document.getElementById("radio-viento");
const checksViento = document.getElementById("checks-viento");

const radioPercusion = document.getElementById("radio-percusion");
const checksPercusion = document.getElementById("checks-percusion");

const radioElectronico = document.getElementById("radio-electronico");
const checksElectronico = document.getElementById("checks-electronico");

let arraycheckout = document.getElementsByClassName("ck");


let productos = cargarDelLocalStorage();

yesnoCheck();


radioCuerda.addEventListener("change", yesnoCheck)
radioPercusion.addEventListener("change", yesnoCheck)
radioViento.addEventListener("change", yesnoCheck);
radioElectronico.addEventListener("change", yesnoCheck);


function activarClickComprar(){
  let botonesComprar = document.getElementsByClassName("btn-primary");
  for(let i=0; i<botonesComprar.length;i++){
    botonesComprar[i].addEventListener("click",(event)=>{
      debugger
        event.preventDefault()
        cantidadDelIconoCarrito()
        let idBtn= event.target.id;
        añadirAlCarrito(idBtn)
        cargarLocalStorage();
    })
  }
}




function yesnoCheck() {
    
  if (radioCuerda.checked == true) {
    cambiarDisplayRadioButton(checksCuerda,checksViento,checksPercusion,checksElectronico)
    
    pintarCatalogoCategoria("cuerda")
    descheckearProductos("cuerda")

  } else if (radioViento.checked == true) {
  
    cambiarDisplayRadioButton(checksViento,checksCuerda,checksPercusion,checksElectronico)
    pintarCatalogoCategoria("viento")
    descheckearProductos("viento")


  } else if (radioPercusion.checked == true) {
    cambiarDisplayRadioButton(checksPercusion,checksCuerda,checksViento,checksElectronico)
    pintarCatalogoCategoria("percusion")
    descheckearProductos("percusion")


  } else if (radioElectronico.checked == true) {
    cambiarDisplayRadioButton(checksElectronico,checksCuerda,checksViento,checksPercusion)
    pintarCatalogoCategoria("electronico")
    descheckearProductos("electronico")


  }

  activarClickComprar()
}

///////////////////////////////////////
function cambiarDisplayRadioButton(ck1,ck2,ck3,ck4){

    ck1.style.display = "block";
    ck2.style.display = "none";
    ck3.style.display = "none";
    ck4.style.display = "none";

}

///DESCHECKEAR
function descheckearProductos(categoria){

    let arrayAux = cargarCheckoutPorCategoria(categoria)

    

    for (let i = 0; i< arraycheckout.length; i++) {
        if( (i !=arrayAux[0] && i!= arrayAux[1] && i != arrayAux[2])){
            arraycheckout[i].checked=false;
        }
    }
}

function cargarCheckoutPorCategoria(categoria){

    let arrayAux = []
    if(categoria=="cuerda"){
        arrayAux = [0, 1, 2]
    }
    else if( categoria=="viento"){
        arrayAux = [3, 4, 5]
    }
    else if( categoria=="percusion"){
        arrayAux = [6, 7, 8]
    }
    else{
        arrayAux = [9, 10, 11]
    }

    return arrayAux;
}


// ------cargar del localStorage------

function cargarDelLocalStorage(){

  let aux;
  let prtos =[];
  for(let i=0; i<36;i++){
      
      aux= localStorage.getItem(i)
      aux = JSON.parse(aux)
      prtos.push(aux)
  }

  return prtos;

}

function cargarLocalStorage(){

  //localStorage.clear()
  let aux;
  for(let i=0; i<productos.length;i++){
      
      aux = JSON.stringify(productos[i])
      localStorage.setItem( i, aux)


  }

}



//PINTAR CATALOGO POR CATEGORIAS
 function pintarCatalogoCategoria(categoria){
  let prodCat=[];

   productos.forEach((product)=> {

     if(categoria=="cuerda"){
      
       if((product.id>-1) && (product.id<10)){
         prodCat.push(product);
       }
     }
     else if(categoria=="viento"){
       if(product.id>9 && product.id<19){
         prodCat.push(product)
       }
     }
     else if(categoria=="percusion"){
       if(product.id>18 && product.id<28){
         prodCat.push(product)
       }

     }
     else{
       if(product.id>27){
         prodCat.push(product)
       }
     }
     
   });
   let shopContent= document.getElementById("shopContent")

   pintarCatalogo(shopContent,prodCat)
  

 }


 function pintarCatalogo(shopContent , prod){
    while (shopContent.firstChild) {
      shopContent.removeChild(shopContent.firstChild);
    }

    prod.forEach((p)=>{
    let content = document.createElement ("div");
    content.className = "col-2 card cardH";
    content.innerHTML = `
        <img class="" src="${p.src}">
        <div class="d-flex flex-row align-items-center">
            <h5 class="card-title">${p.name}  ${p.precio}€</h5>
        </div>
        <p class="card-text description">${p.description}</p>
        <div class="d-flex flex-row align-items-center">
            <a  id =${p.id} data-producto =${p.id}  href="#" class="btn btn-primary" >  <i class="fa-solid fa-cart-shopping"></i> Añadir</a>
            <i class="fa-regular fa-heart corazon-vacio" style="cursor: pointer"></i>
        </div>

    `;

    shopContent.append(content);
    })
 }



//SUMAR NUMERO DEL ICONO CARRITO
function cantidadDelIconoCarrito(){
  let span= document.getElementById("cantidadCarrito");
  let num= parseInt(span.getAttribute("value"))+1;
  span.setAttribute("value",String(num))
  span.innerHTML=num;
}

function añadirAlCarrito(idBtn){
  productos[idBtn-1].cantidad++
      
}

  



// // --------cargar producto por checkout-----

eventoCargarProductoPorCheckout()
function eventoCargarProductoPorCheckout(){
  for(let i = 0; i<arraycheckout.length; i++){
      arraycheckout[i].addEventListener ("change", ()=>{
        let categoria= arraycheckout[i].getAttribute("data-bs-c")
        cargarProductoPorCheckout(categoria)
      })
  }
     

}
  
function cargarProductoPorCheckout (categoria){
    let prodchecked = [];
    let arrayckCat = cargarCheckoutPorCategoria(categoria);
    let g=arraycheckout.length
    for(let ck=0; ck<g; ck++){
        if(ck == arrayckCat[0] || ck == arrayckCat[1] || ck == arrayckCat[2]) {
            if(arraycheckout[ck].checked == true){
                debugger
                let aux=elegirProdPorCheck(arraycheckout[ck]);
                prodchecked.push(aux);
            }
            
        }
        
    }

    let shopContent= document.getElementById("shopContent")

    pintarCatalogo(shopContent,prodchecked[0])
    
 
}
// -------------elegin categoría----


 

 function elegirProdPorCheck(check){
    let valueCk= check.value
    let prodsCk=[]
    for( let i=0; i<15;i++){
        let aux=productos[i].varname.slice(0, -1)
        if( productos[i].varname.slice(0, -1)==valueCk) {
            prodsCk.push(productos[i])
        }

    }

    return prodsCk;

 }
 




