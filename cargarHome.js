debugger


//let productos = cargarDelLocalStorage();

let novedades_caja= document.getElementById("novedades_caja")
//cargarNovedades(novedades_caja, prod)


function cargarNovedades(CajaContent, prod){

    while (CajaContent.firstChild) {
        CajaContent.removeChild(CajaContent.firstChild);
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
  
      CajaContent.append(content);
      })




}

const result = productos.filter(prod => prod.novedad=="true");

alert(result)




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