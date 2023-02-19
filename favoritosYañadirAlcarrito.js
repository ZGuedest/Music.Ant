
/////// FAVORITOS /////

function eventoCorazon(){
    let corazones= document.getElementsByClassName("corazon-vacio")
    for( let i=0; i< corazones.length; i++){

        corazones[i].addEventListener("click", ()=>{

            cambiar(corazones[i]);
        })
    }
}

function cambiar(corazon) {
    let valor =  corazon.getAttribute("class");
    if (valor == "fa-regular fa-heart corazon-vacio") {
        corazon.setAttribute("class", "fa-solid fa-heart-circle-check corazon-vacio");
    } else {
        corazon.setAttribute("class", "fa-regular fa-heart corazon-vacio");
    }
}


////// CARRITO ///////

function activarClickComprar(productos){
    let botonesComprar = document.getElementsByClassName("btn-primary");
    for(let i=0; i<botonesComprar.length;i++){
      botonesComprar[i].addEventListener("click",(event)=>{
          debugger
          event.preventDefault()
          
          let idBtn= event.target.id;
          añadirAlCarrito(idBtn,productos)
          cantidadDelIconoCarritoCorazon("cantCarrito")

      })
    }
}

function cantidadDelIconoCarritoCorazon(idIco){
    let num
    let span= document.getElementById(idIco);
    if(idIco=="cantCarrito"){
        num= localStorage.getItem("cantCarrito")
    }
    else if(idIco=="cantFav"){
        num= localStorage.getItem("cantFav")

    }
    num =! null ? num= parseInt(JSON.parse(num)+1) : num= parseInt(1)

    
    span.setAttribute("value",String(num))
    span.innerHTML=num;
    localStorage.setItem(idIco,JSON.stringify(num))
    
}

function añadirAlCarrito(idBtn, productos){
    productos[idBtn-1].cantidad++
    cargarLocalStorage(productos);

}


////////// PRODUCTO //////////////
function eventoCargarUnProducto(productos){
    let cajasProd= document.getElementsByClassName("imgP")
    for (let i=0; i<cajasProd.length;i++){
  
      cajasProd[i].addEventListener("click",(event)=>{
        debugger
        cargarUnProducto(productos,event)
    
      })
  
    }
    
  
  
  }
  
function cargarUnProducto(productos,event){

let data_p = event.target.id
productos.forEach((prod)=>{
    if(prod.id==data_p){
    localStorage.setItem("prodctSelect", JSON.stringify(prod))

    }
})
}