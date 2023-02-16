debugger

let novedades_caja= document.getElementById("novedades_caja")
let prodNew = filtrarProductos("novedad")
cargarNovedades(novedades_caja, prodNew)


function cargarNovedades(CajaContent, prod){

    // while (CajaContent.firstChild) {
    //     CajaContent.removeChild(CajaContent.firstChild);
    //   }
    let titulo= cargarTitulo("Novedades")
    CajaContent.append(titulo);
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
  
      CajaContent.append(content);
    })
}

function cargarTitulo(titulo){
    let tit = document.createElement ("div");
      tit.className = "caja-h2 d-flex flex-row align-items-center justify-content-center";
      tit.innerHTML = `
        <div class="linea1"></div>
        <h2 id="novedades">${titulo}</h2> 
        <div class="linea2"></div>`

    return tit
}

function filtrarProductos(opcion){
    let prods=[]
    let productos=cargarDelLocalStorage(opcion)
    for(let i=0; i<productos.length;i++){
        if(opcion=="novedad" && productos[i].novedad=="true"){
            prods.push(productos[i])
        }
        else if(opcion=="oferta" && productos[i].oferta=="true"){
            prods.push(productos[i])
        }
        else if(opcion=="favorito" && productos[i].favorito=="true"){
            prods.push(productos[i])

        }
    }

    return prods
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