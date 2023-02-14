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
    checksCuerda.style.display = "block";
    checksViento.style.display = "none";
    checksPercusion.style.display = "none";
    checksElectronico.style.display = "none";
    pintarCatalogo("cuerda")

  } else if (radioViento.checked == true) {
    checksCuerda.style.display = "none";
    checksViento.style.display = "block";
    checksPercusion.style.display = "none";
    checksElectronico.style.display = "none";
    pintarCatalogo("viento")

  } else if (radioPercusion.checked == true) {
    checksCuerda.style.display = "none";
    checksViento.style.display = "none";
    checksPercusion.style.display = "block";
    checksElectronico.style.display = "none";
    pintarCatalogo("percusion")

  } else if (radioElectronico.checked == true) {
    checksCuerda.style.display = "none";
    checksViento.style.display = "none";
    checksPercusion.style.display = "none";
    checksElectronico.style.display = "block";
    pintarCatalogo("electronico")

  }

  activarClickComprar()
}

///////////////////////////////////////

 
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



//PINTAR CATALOGO 

 function pintarCatalogo(categoria){
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
  while (shopContent.firstChild) {
    shopContent.removeChild(shopContent.firstChild);
  }

  prodCat.forEach((p)=>{
  let content = document.createElement ("div");
  content.className = "col-2 card cardH";
  content.innerHTML = `
      <img class="" src="${p.src}">
      <div class="d-flex flex-row align-items-center">
          <h5 class="card-title">${p.name}  ${p.precio}€</h5>
      </div>
      <p class="card-text description">${p.description}</p>
      <div class="d-flex flex-row align-items-center">
          <a  id =${p.id} data-producto =${p.id}  href="#" class="btn btn-primary" >  <i class="fa-solid fa-cart-shopping"></i> COMPRAR</a>
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


/*-----FUNCIONALIDAD EVENTO CLICK -----------*/
// let carrito = [];
// let botones = document.getElementsByClassName("btn");

// for(let b=0; b<botones.length; b++){

//   botones[b].addEventListener("click",  (event)=>{
//       let idBtn= event.target.id;
//       añadirAlCarrito(idBtn)
//       cargarLocalStorage();
//   });

// }

  


