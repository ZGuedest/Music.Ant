{/* <header>
<nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-xl">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        <div id="logo"></div>
        
        <div id="navbarNav" class="collapse navbar-collapse justify-content-around" >
            <input id="buscador" class="form-control" type="search" placeholder="Buscar" aria-label="Buscar">
            <ul id="menu-interior"class="navbar-nav justify-content-around">
                <li class="nav-item">
                    <a class="nav-link" href="catalogo.html">Catálogo</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#novedades">Novedades</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#ofertas">Ofertas</a>
                </li>
            </ul>
        </div>

        
        <ul id="menu-iconers"class="nav justify-content-around">
            <li ><i class="fa-solid fa-earth-americas"></i></li>
            <li ><a href="login.html"><i class="fa-regular fa-circle-user"></i></a></li>
            <li ><i class="fa-solid fa-heart"></i></li>
            <li ><a href="carrito.html"><i class="fa-solid fa-cart-shopping"></i></a></li>
        </ul>   
    </div>
  </nav>

<!-- <div id="frase_nav" class="container-sm justify-content-center"> -->
    <p id="frase_imaginacion">"Deja tu imaginación volar... siente la música"</p>
<!-- </div> -->
</header> */}



//    --------idiomas navegador----------

let espanol = ["Inicio", "Buscar", "Catálogo", "Novedades", "Ofertas"];
let ingles = [ "Start", "Search", "Catalogue", "News", "Offers"];
let euskera = [ "Hasi", "Bilatu", "Katalogoa", "Berria", "Eskaintzak"];

let array=[];

array=espanol

let nav = document.createElement("nav");

let header= document.getElementsByTagName("header")[0]
header.innerHTML = `
<nav class="navbar navbar-expand-lg navbar-light">

    <div class="container-xl">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div id="logo"></div>

    <div id="navbarNav" class="collapse navbar-collapse justify-content-around" >
        <input id="buscador" class="pt-3 form-control" type="search" placeholder=${array[1]} aria-label="Buscar">
        <ul id="menu-interior"class="navbar-nav justify-content-around">
            <li class="nav-item pt-3">
                <a class="nav-link" href="catalogo.html">${array[2]}</a>
            </li>
            <li class="nav-item pt-3">
                <a class="nav-link" href="#novedades">${array[3]}</a>
            </li>
            <li class="nav-item pt-3">
                <a class="nav-link" href="#ofertas">${array[4]}</a>
            </li>
        </ul>
    </div>


        <ul id="menu-iconers"class="nav pt-3 justify-content-around">
                    
            <li > <div class="dropdown">
                <button class="btn btn-secondary d-flex flex-row text-center align-items-center dropdown-toggle bg-transparent border-0 text-dark" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <p id="idio-select" class=" pt-3 ">Español</p>
                    <i class="fa-solid fa-earth-americas text-dark"></i>
                </button>
                <ul class="dropdown-menu">
                    <li value="espanol"><a class=" idioma px-1 py-1 dropdown-item" href="#">Español</a></li>
                    <li value="ingles"><a class=" idioma px-1 py-1 dropdown-item" href="#">Inglés</a></li>
                    <li value="euskera"><a class=" idioma px-1 py-1 dropdown-item" href="#">Euskera</a></li>
                </ul>
            </li>
                                
            <li ><a href="login.html"><i class="pt-4 fa-regular fa-circle-user"></i></a></li>
            <li ><i class="pt-4 fa-solid fa-heart"></i></li>
            <li ><a href="carrito.html"><i class="pt-4 fa-solid fa-cart-shopping"></i></a></li>
        </ul>     
    </div>
</nav>`



//--------idiomas frase logo----------

let array_p = "Deja tu imaginación volar... siente la música";
let ingles_p = "Let your imagination fly... feel the music";
let euskera_p ="Utzi zure irudimena hegan... sentitu musika" ;

let p= document.createElement("p");
nav.className = "p";
nav.innerHTML =`<p id="frase_imaginacion">"${array_p[5]}"</p>
<!-- </div> -->`


