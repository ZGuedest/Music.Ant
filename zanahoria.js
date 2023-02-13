
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


    let productos = cargarDelLocalStorage();

    //CARGAR PRODUCTOS DEL CATALOGO
    productos.forEach((product)=> {

        let content = document.createElement ("div");
        content.className = "col-2 card cardH";
        content.innerHTML = `
            <img class="" src="${product.src}">
            <div class="d-flex flex-row align-items-center">
                <h5 class="card-title">${product.name}  ${product.precio}€</h5>
            </div>
            <p class="card-text description">${product.description}</p>
            <div class="d-flex flex-row align-items-center">
                <a  id =${product.id} data-producto =${product.id}  href="#" class="btn btn-primary" >  <i class="fa-solid fa-cart-shopping"></i> COMPRAR</a>
                <i class="fa-regular fa-heart corazon-vacio" style="cursor: pointer"></i>
            </div>

        `;

        shopContent.append(content);
    });

    //SUMAR NUMERO DEL ICONO CARRITO

    let botonesComprar = document.getElementsByClassName("btn-primary");

    console.log(botonesComprar)

    for(let i=0; i<botonesComprar.length;i++){
        botonesComprar[i].addEventListener("click",(event)=>{
            event.preventDefault()
            cantidadDelIconoCarrito()
        })
    }


    function cantidadDelIconoCarrito(){
        let span= document.getElementById("cantidadCarrito");
        let num= parseInt(span.getAttribute("value"))+1;
        span.setAttribute("value",String(num))
        span.innerHTML=num;
    }
    

    function añadirAlCarrito(idBtn){
        productos[idBtn-1].cantidad++
            
    }

    /*-----GUARDANDO CARRITO AL LOCAL STORAGE-----*/



    /*-----FUNCIONALIDAD EVENTO CLICK -----------*/
    let carrito = [];
    let botones = document.getElementsByClassName("btn");

    for(let b=0; b<botones.length; b++){

        botones[b].addEventListener("click",  (event)=>{
            let idBtn= event.target.id;
            añadirAlCarrito(idBtn)
            cargarLocalStorage();
        });

    }

        


