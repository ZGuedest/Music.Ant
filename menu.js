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

let array = ["Inicio", "Buscar", "Catálogo", "Novedades", "Ofertas"];
let ingles = [ "Start", "Search", "Catalogue", "News", "Offers"];
let euskera = [ "Hasi", "Bilatu", "Katalogoa", "Berria", "Eskaintzak"];

let nav = document.createElement("nav");
nav.className = "collapse navbar-collapse justify-content-around";
nav.innerHTML = `

<div class="container-xl">
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
<div id="logo"></div>

<div id="navbarNav" class="collapse navbar-collapse justify-content-around" >
    <input id="buscador" class="form-control" type="search" placeholder=${array[1]} aria-label="Buscar">
    <ul id="menu-interior"class="navbar-nav justify-content-around">
        <li class="nav-item">
            <a class="nav-link" href="catalogo.html">${array[2]}</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#novedades">${array[3]}</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#ofertas">${array[4]}</a>
        </li>
    </ul>
</div>


<ul id="menu-iconers"class="nav justify-content-around">
    <li ><i class="fa-solid fa-earth-americas"></i></li>
    <li ><a href="login.html"><i class="fa-regular fa-circle-user"></i></a></li>
    <li ><i class="fa-solid fa-heart"></i></li>
    <li ><a href="carrito.html"><i class="fa-solid fa-cart-shopping"></i></a></li>
</ul>   
</div>`