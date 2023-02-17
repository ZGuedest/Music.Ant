
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
          cantidadDelIconoCarrito()
          let idBtn= event.target.id;
          añadirAlCarrito(idBtn,productos)
      })
    }
  }

  // function cargarLocalStorage(productos){
  //   for(let i=0; i<productos.length;i++){
  //     localStorage.setItem( i,  JSON.stringify(productos[i]))
  //   }
  
  // }


  function cantidadDelIconoCarrito(){
    let span= document.getElementById("cantidadCarrito");
    let num= parseInt(span.getAttribute("value"))+1;
    span.setAttribute("value",String(num))
    span.innerHTML=num;
  }
  
  function añadirAlCarrito(idBtn, productos){
    productos[idBtn-1].cantidad++
    cargarLocalStorage(productos);
  
  }
