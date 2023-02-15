
let espc = ["Resumen del Pedido", "Comprar", "Aceptar"];
let ingc = ["Order Summary", "Buy", "Accept"];
let eusc = ["Eskaeraren laburpena", "Erosi", "Onartu"];
let arrayc = [];
arrayc = espc;
cargarcarrito(arrayc);
function cargarcarrito(arrayc){
    let main = document.getElementsByTagName("main")[0];
    main.innerHTML = `
    <div id= "cr_comprar_pedido" class="card p-3 col-4">
    <div class="Pedido">
        <h5 class="card-title">${arrayc[0]}</h5>
        <div class="d-flex  flex-column align-items-center gap-0 row-gap-3">
            <div class="d-flex gap-0 column-gap-3 align-items-center">
                <i id="cr_carrito"class="fa-solid fa-cart-shopping"></i>
                <p id="cr_precio_total" class="card-text precios">  0 €</p>
            </div>
            
            <a href="checkout.html" class="btn btn-primary" >${arrayc[1]}</a>
        </div>
        
        <h5 class="card-title pt-4">${arrayc[2]}</h5>
        <div class="d-flex gap-0 column-gap-3">
            <i id="cr_visa"class="fa-brands fa-cc-visa"></i>
            <i id="cr_paypal"class="fa-brands fa-cc-paypal"></i>
            <i id="cr_mastercard"class="fa-brands fa-cc-mastercard"></i>
            
        </div>
    
    </div>
    </div>`
}
