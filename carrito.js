
let shopContent = document.getElementById("cr_caja_producto");
let productos = cargarDelLocalStorage();
pintarCarrito()
let inputs= document.getElementsByTagName("input")

for(let inp=0; inp<inputs.length;inp++){
    inputs[inp].addEventListener("change",(event)=>{
        debugger
        limpiarContenedor()
        let foundP= productos.find((element) => element.id==event.target.id);
        //inputs[inp].setAttribute("value", foundP.cantidad)
        foundP.cantidad = parseFloat(inputs[inp].value)
        productos.map
        productos.map ((prod) => {                        
            if (prod.id === foundP.id) {
                prod.cantidad = foundP.cantidad
            }
        });
        pintarCarrito()
    })
}

function cargarDelLocalStorage(){

    let aux;
    let productos =[];
    for(let i=0; i<36;i++){
        
        aux= localStorage.getItem(i)
        aux = JSON.parse(aux)
        productos.push(aux)
    }

    return productos;

}


function limpiarContenedor(){
    while (shopContent.firstChild) {
        shopContent.removeChild(shopContent.firstChild);
    }
}
function pintarCarrito(){

    productos.forEach((product)=> {

        
        let content = document.createElement ("div");
        content.className = "card row g-0 d-flex flex-row col-12 mt-0";

        if(product.cantidad>0){
            content.innerHTML = `
            <img class="cr_imagen_producto" src="${product.src}">

            <div id="cr_caja_contenedora_text_producto" class="col p-3">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">${product.description}</p>
                
                <div class="d-flex flex-row justify-content-around">
                    <p  class="card-text cr_precio_producto">precio del producto: <small id="" class="text-muted">${product.precio}</small></p>

                    <input  type="number" id=${product.id} class="aumentar" value=${product.cantidad} name="aumentar" min="1" max="10">
                    <p class="card-text px-2"> precio por cantidad: <small  id="cr_precio_cantidad"  class="text-muted">${product.cantidad * product.precio}</small></p>
                </div>
                <div class="d-flex gap-0 column-gap-3">
                    <i class="cr_basura fa-solid fa-trash"></i>
                    <i class="cr_corazon fa-regular fa-heart"></i>
                </div>
            </div>
   
        `;
   
   
        shopContent.append(content);
        }
        

    });


}





