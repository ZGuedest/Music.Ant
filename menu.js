
//    --------idiomas navegador----------
let array=cambiarIdioma("Español")
let idiomaSelect="Español";
cargarMenu()
function eventoCambiarIdioma(){
    let opciones = document.getElementsByClassName("idioma");
    for (let a = 0 ; a<opciones.length; a++){
        opciones[a].addEventListener("click", (event)=>{ 
           array=cambiarIdioma(event.target.textContent)
           idiomaSelect=event.target.textContent
           cargarMenu()

        })
    }
}


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
                        <p id="idio-select" value="espanol" class="pt-3">${idiomaSelect}</p>
                        <i class="fa-solid fa-earth-americas text-dark"></i>
                    </button>
                    <ul class="dropdown-menu">
                        <li value="espanol"><a value="espanol" class=" idioma px-1 py-1 dropdown-item" href="#">Español</a></li>
                        <li value="ingles"><a value="ingles" class=" idioma px-1 py-1 dropdown-item" href="#">Inglés</a></li>
                        <li value="euskera"><a value="euskera" class=" idioma px-1 py-1 dropdown-item" href="#">Euskera</a></li>
                    </ul>
                </li>
                <div class="d-flex flex-column aling-items-center">
                    <li ><a id="login" href="login.html"><i class="pt-4 fa-regular fa-circle-user"></i></a></li>

                    <div class="ventana" id="ven" style="background-color: white; width: 4rem;height: 1.5rem; color: black; display: none;">
                        <span id="cerrar">Cerrar<span> 

                    </div>
                </div>                  



                <li ><i class="pt-4 fa-solid fa-heart"></i></li>
                <li ><a href="carrito.html"><i class="pt-4 fa-solid fa-cart-shopping"></i></a><span id="cantidadCarrito" class="cantidad-carrito" value="0"></span></li>
            </ul>     
        </div>
    </nav>`


    //--------idiomas frase logo----------
    let p= document.createElement("p")
    p.id="frase_imaginacion"
    p.innerHTML=`"${array[5]}"`
    header.append(p)

    eventoCambiarIdioma()

}





//-----cambiar idioma-----

function cambiarIdioma(idioma){

    let espanolM = ["Inicio", "Buscar", "Catálogo", "Novedades", "Ofertas","Deja tu imaginación volar... siente la música"];
    let inglesM = [ "Start", "Search", "Catalogue", "News", "Offers","Let your imagination fly... feel the music"];
    let euskeraM = [ "Hasi", "Bilatu", "Katalogoa", "Berria", "Eskaintzak","Utzi zure irudimena hegan... sentitu musika"];
    let array=[]
    if (idioma=="Español"){
        array=espanolM
    }else if (idioma=="Inglés"){
        array=inglesM
    }else{
        array = euskeraM
    }
    return array;
}

let black=document.getElementById("login");

black.addEventListener('click',(event)=>{
    debugger
    event.preventDefault()

    if(localStorage.getItem('gmail') ===" "){
        window.location.href="login.html"
    }else{
        abrir();
    }
    
    
 });

let cerrar= document.getElementById("cerrar")

cerrar.addEventListener("click",()=>{

    localStorage.clear()
    localStorage.setItem('gmail'," ");

    window.location.href="Index.html"
})


function abrir(){
    document.getElementById("ven").style.display="block";
}


