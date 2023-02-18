
iniciarCarrito(idiomaSelect)
function iniciarCarrito(idiomaSelect){

    let espc = ["Resumen del Pedido", "Comprar", "Aceptamos"];
    let ingc = ["Order Summary", "Buy", "Accept"];
    let eusc = ["Eskaeraren laburpena", "Erosi", "Onartu"];
    let arrayc=cambiarIdioma(idiomaSelect, espc, ingc, eusc)
    let productos = cargarDelLocalStorage();
    cargarcarrito(arrayc,productos);
    cacularTotal()
}


function cargarcarrito(arrayc,productos){
    let main = document.getElementsByTagName("main")[0];
    main.innerHTML = `

    <div  id="cr_contenedor_principal" class="container-sm row justify-content-around">
                
        <div id="cr_caja_producto" class="card m-3 row g-0 d-flex flex-row col mt-0" >
        </div>
        <div id= "cr_comprar_pedido" class="card p-3 col-4">
            <div class="Pedido">
                <h5 class="card-title">${arrayc[arrayc.length-1][0]}</h5>
                <div class="d-flex  flex-column align-items-center gap-0 row-gap-3">
                    <div class="d-flex gap-0 column-gap-3 align-items-center">
                        <i id="cr_carrito"class="fa-solid fa-cart-shopping"></i>
                        <p id="cr_precio_total" class="card-text precios">  0 €</p>
                    </div>
                    
                    <a href="checkout.html" class="btn btn-primary" >${arrayc[arrayc.length-1][1]}</a>
                </div>
                
                <h5 class="card-title pt-4">${arrayc[arrayc.length-1][2]}</h5>
                <div class="d-flex gap-0 column-gap-3">
                    <i id="cr_visa"class="fa-brands fa-cc-visa"></i>
                    <i id="cr_paypal"class="fa-brands fa-cc-paypal"></i>
                    <i id="cr_mastercard"class="fa-brands fa-cc-mastercard"></i>
                    
                </div>
                <a href="checkout.html" class="btn btn-primary" >vaciar</a>
            
            </div>
        </div>
    </div
    `
    
    pintarCarrito(productos)
}

function actualizarPrecioPorCantidad(productos, event, input){
    let foundP= productos.find((element) => element.id==event.target.id);
    foundP.cantidad = parseFloat(input.value)
    productos.map ((prod) => {
        if (prod.id === foundP.id) {
            prod.cantidad = foundP.cantidad
            document.getElementById("S+"+foundP.id).innerHTML = String(`${ prod.cantidad * prod.precio }`)
            cargarLocalStorage(productos)
        }
    });
}

function activarEventoInputNumber(productos){
    let inputs= document.getElementsByClassName("aumentar")
    for(let inp=0; inp<inputs.length;inp++){
        inputs[inp].addEventListener("change",(event)=>{
    
            actualizarPrecioPorCantidad(productos, event, inputs[inp])
            cacularTotal()
    
        })
    }
}

function limpiarContenedor(shopContent){
    while (shopContent.firstChild) {
        shopContent.removeChild(shopContent.firstChild);
    }
}


function pintarCarrito(productos){
    let shopContent = document.getElementById("cr_caja_producto");
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

    activarEventoBasura(productos,shopContent)
    activarEventoInputNumber(productos)
}

function activarEventoBasura(productos, shopContent){
    let bas= document.getElementsByClassName("cr_basura")

    for(let b=0; b<bas.length;b++){
        bas[b].addEventListener("click",(event)=>{
            let fP= productos.find((element) => element.id==(event.target.id).slice(1));
            productos.map ((prod) => {
                if (prod.id === fP.id) {
                    prod.cantidad = 0
                    cargarLocalStorage(productos)
                    limpiarContenedor(shopContent)
                    pintarCarrito(productos)
                    cacularTotal()
                }
            });

        })
    }
}

function cacularTotal(){
    let pc = document.getElementsByClassName("pc");
    let total = document.getElementById("cr_precio_total");
    let suma = 0;
    for(let i = 0; i<pc.length; i++) {
        suma += parseFloat(pc[i].textContent)
    }
    total.innerHTML = suma + " €";
    localStorage.setItem('total', suma)

}








