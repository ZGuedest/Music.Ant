let shopContent = document.getElementById("cr_caja_producto");
let productos = cargarDelLocalStorage();
pintarCarrito()
let inputs= document.getElementsByTagName("input")
cacularTotal()


for(let inp=0; inp<inputs.length;inp++){
    inputs[inp].addEventListener("change",(event)=>{
        let foundP= productos.find((element) => element.id==event.target.id);
        foundP.cantidad = parseFloat(inputs[inp].value)
        productos.map ((prod) => {                        
            if (prod.id === foundP.id) {
                prod.cantidad = foundP.cantidad                
                document.getElementById("S+"+foundP.id).innerHTML = String(`${ prod.cantidad * prod.precio }`)
            }
        });


        cacularTotal()

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
                    <p  class="card-text cr_precio_producto">precio del producto: <small id="" class="text-muted">${product.precio}</small> €</p>

                    <input  type="number" class="aumentar" id=${product.id} value=${product.cantidad} name="aumentar" min="1" max="10">
                    <p class="card-text px-2 cr_precio_cantidad"> precio por cantidad: <small id="S+${product.id}" class=" pc text-muted">${product.cantidad * product.precio}</small> €</p>
                </div>
                <div class="d-flex gap-0 column-gap-3">
                    <i id="B+${product.id}" class="cr_basura fa-solid fa-trash"></i>
                    <i id="C+${product.id}" class="cr_corazon fa-regular fa-heart"></i>
                </div>
            </div>
   
        `;
   
   
        shopContent.append(content);
        }
        

    });

    activarEventoBasura()
}




function activarEventoBasura(){
    let bas= document.getElementsByClassName("cr_basura")

    for(let b=0; b<bas.length;b++){
        bas[b].addEventListener("click",(event)=>{

            let fP= productos.find((element) => element.id==(event.target.id).slice(1));
            productos.map ((prod) => {                        
                if (prod.id === fP.id) {
                    prod.cantidad = 0
                    limpiarContenedor()
                    pintarCarrito()
                    cacularTotal()
        
                    
                }
            });
        
        })
    }
}
function cacularTotal(){
    debugger
    let pc = document.getElementsByClassName("pc");
    let total = document.getElementById("cr_precio_total");
    let suma = 0;
    for(let i = 0; i<pc.length; i++) {
        suma += parseFloat(pc[i].textContent)
    }
    total.innerHTML = suma;


}








