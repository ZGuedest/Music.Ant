const prdtEsp = ["AÑADIR", "Envio gratuito","Devoluciones o cambios permitidos"]
const prdtEng = ["ADD", "Free shipping","Returns or changes allowed"]
const prdtEus = ["GEHITU", "Doako bidalketa", "Itzulketak edo aldaketak onartzen dira"]
let arrayPr = []
arrayPr=prdtEsp;

let p= JSON.parse(localStorage.getItem("prodctSelect"))



cargarProducto(arrayPr,p)

function cargarProducto(arrayPr, p){
    let main = document.getElementsByTagName("main")[0]
    main.innerHTML = `
    <div class="container-sm pt-5 pb-5 d-flex justify-content-center">
        <div class="card row g-0 d-flex flex-row col-8 mt-5 mb-5">
            <div id=${p.id} class="img imgP" style="background-image:url(${p.src})"></div>

            <div id="cr_caja_contenedora_text_producto" class="col p-3">
                <h5 class="card-title ">${p.name}</h5>
                <p class="card-text ">${p.description}</p>
                <p class="fs-3 fw-bold">${p.precio} €</p>

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