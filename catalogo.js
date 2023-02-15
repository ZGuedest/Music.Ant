

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

  } else if (radioViento.checked == true) {
  
    cambiarDisplayRadioButton(checksViento,checksCuerda,checksPercusion,checksElectronico)
    pintarCatalogoCategoria("viento")

  } else if (radioPercusion.checked == true) {
    cambiarDisplayRadioButton(checksPercusion,checksCuerda,checksViento,checksElectronico)
    pintarCatalogoCategoria("percusion")

  } else if (radioElectronico.checked == true) {
    cambiarDisplayRadioButton(checksElectronico,checksCuerda,checksViento,checksPercusion)
    pintarCatalogoCategoria("electronico")

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

  


