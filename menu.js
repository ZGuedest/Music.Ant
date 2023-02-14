{/* 

<!-- <div id="frase_nav" class="container-sm justify-content-center"> -->
    <p id="frase_imaginacion">"Deja tu imaginación volar... siente la música"</p>
<!-- </div> -->
</header> */}



//    --------idiomas navegador----------

let array=cambiarIdioma("espanol")
cargarMenu()
let opciones = document.getElementsByClassName("idioma");
 for (let a = 0 ; a<opciones.length; a++){
     opciones[a].addEventListener("click", (event)=>{
        debugger
        //let aux=opciones[i]
        //let idio=aux.getAttribute("value")
        console-log(a)
        let idi=opciones[a].textContent
        console.log(idi)
         //cambiarIdioma(idio)
         cargarMenu()
     })
   
 }


//let nav = document.createElement("nav");
function cargarMenu(){

    let header= document.getElementsByTagName("header")[0]
    header.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-light">

        <div class="container-xl">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div id="logo"></div>

        <div id="navbarNav" class="collapse navbar-collapse justify-content-around" >
            <input id="buscador" class="mt-3 form-control" type="search" placeholder=${array[1]} aria-label="Buscar">
            <ul id="menu-interior"class="navbar-nav justify-content-around">
                <li id="inicio" class="nav-item pt-3">
                    <a class="nav-link" href="Index.html">${array[0]}</a>
                </li>
                <li id="catalogo" class="nav-item pt-3">
                    <a class="nav-link" href="catalogo.html">${array[2]}</a>
                </li>
                <li id="novedades" class="nav-item pt-3">
                    <a class="nav-link" href="#novedades">${array[3]}</a>
                </li>
                <li id="ofertas" class="nav-item pt-3">
                    <a class="nav-link" href="#ofertas">${array[4]}</a>
                </li>
            </ul>
        </div>


            <ul id="menu-iconers"class="nav pt-3 justify-content-around">
                        
                <li > <div class="dropdown">
                    <button class="btn btn-secondary d-flex flex-row text-center align-items-center dropdown-toggle bg-transparent border-0 text-dark" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <p id="idio-select" value="espanol" class="pt-3">Español</p>
                        <i class="fa-solid fa-earth-americas text-dark"></i>
                    </button>
                    <ul class="dropdown-menu">
                        <li value="espanol"><a value="espanol class=" idioma px-1 py-1 dropdown-item" href="#">Español</a></li>
                        <li value="ingles"><a value="ingles" class=" idioma px-1 py-1 dropdown-item" href="#">Inglés</a></li>
                        <li value="euskera"><a value="euskera" class=" idioma px-1 py-1 dropdown-item" href="#">Euskera</a></li>
                    </ul>
                </li>
                                    
                <li ><a href="login.html"><i class="pt-4 fa-regular fa-circle-user"></i></a></li>
                <li ><i class="pt-4 fa-solid fa-heart"></i></li>
                <li ><a href="carrito.html"><i class="pt-4 fa-solid fa-cart-shopping"></i></a></li>
            </ul>     
        </div>
    </nav>`


    //--------idiomas frase logo----------
    let p= document.createElement("p")
    p.id="frase_imaginacion"
    p.innerHTML=`"${array[5]}"`
    header.append(p)


}





//-----cambiar idioma-----

function cambiarIdioma(idioma){

    let espanolM = ["Inicio", "Buscar", "Catálogo", "Novedades", "Ofertas","Deja tu imaginación volar... siente la música"];
    let inglesM = [ "Start", "Search", "Catalogue", "News", "Offers","Let your imagination fly... feel the music"];
    let euskeraM = [ "Hasi", "Bilatu", "Katalogoa", "Berria", "Eskaintzak","Utzi zure irudimena hegan... sentitu musika"];
    let array=[]
    debugger
    if (idioma=="espanol"){
        //idio_select.innerHTML = "Español";
        //idio_select.value="espanol"
        array=espanolM
    }else if (idioma=="ingles"){
        //idio_select.innerHTML= "Ingles";
        //idio_select.value="ingles"
        array=inglesM
    }else{
            //idio_select.innerHTML = "Euskera";
            //idio_select.value="euskera"
            array = euskeraM
    }
    return array;
}

//-----capturar parrafo-----

