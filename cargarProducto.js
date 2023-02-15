const prdtEsp = ["AÑADIR", "Envio gratuito","Devoluciones o cambios permitidos"]
const prdtEng = ["ADD", "Free shipping","Returns or changes allowed"]
const prdtEus = ["GEHITU", "Doako bidalketa", "Itzulketak edo aldaketak onartzen dira"]
let arrayPr = []
arrayPr=prdtEsp;

cargarProducto(arrayPr)

function cargarProducto(arrayPr){
    debugger
    let main = document.getElementsByTagName("main")[0]
    main.innerHTML = `<div class="container-sm pt-5 pb-5 d-flex justify-content-center">
    <div class="card row g-0 d-flex flex-row col-8 mt-5 mb-5">
        <img class="cr_imagen_producto" src="./img/guitarra1.jpg" style="width: 40%; height: 30rem;">

        <div id="cr_caja_contenedora_text_producto" class="col p-3">
            <h5 class="card-title ">Guitarra Clasica con cuerdas de acero</h5>
            <p class="card-text ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae cum ipsam consectetur itaque eveniet accusantium..</p>
            <p class="fs-3 fw-bold">20€</p>

            <div class="d-flex flex-row align-items-center">
                <a href="#" class="btn btn-primary" >  <i class="fa-solid fa-cart-shopping"></i> ${arrayPr[0]}</a>
                <i class="fa-regular fa-heart corazon-vacio"></i>
            </div>

            <div class="cajaenvio-devol mt-5">
                <div><p><i class="fa-sharp fa-solid fa-truck"></i></i></i>${arrayPr[1]}</p></div>
                <div><i class="fa-regular fa-square-check"></i>${arrayPr[2]}</div>
            </div>
        </div>
    </div>
</div>`
}