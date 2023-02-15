
//    --------idiomas navegador----------
let idiomaSelect="Español";


let arrayM=cambiarIdioma(idiomaSelect)
cargarMenu(arrayM)
cargarFooter(arrayM)



function eventoCambiarIdioma(){
    let opciones = document.getElementsByClassName("idioma");
    for (let a = 0 ; a<opciones.length; a++){
        opciones[a].addEventListener("click", (event)=>{ 
            idiomaSelect=event.target.textContent

           arrayM=cambiarIdioma(idiomaSelect)
           cargarMenu(arrayM)
           cargarFooter(arrayM)


        })
    }
}


function cargarMenu(arrayM){

    let header= document.getElementsByTagName("header")[0]
    header.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-light">

        <div class="container-xl">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div id="logo"></div>

        <div id="navbarNav" class="collapse navbar-collapse justify-content-around" >
            <input id="buscador" class="mt-3 form-control" type="search" placeholder=${arrayM[1]} aria-label="Buscar">
            <ul id="menu-interior"class="navbar-nav justify-content-around">
                <li id="inicio" class="nav-item pt-3">
                    <a class="nav-link" href="Index.html">${arrayM[0]}</a>
                </li>
                <li id="catalogo" class="nav-item pt-3">
                    <a class="nav-link" href="catalogo.html">${arrayM[2]}</a>
                </li>
                <li id="novedades" class="nav-item pt-3">
                    <a class="nav-link" href="#novedades">${arrayM[3]}</a>
                </li>
                <li id="ofertas" class="nav-item pt-3">
                    <a class="nav-link" href="#ofertas">${arrayM[4]}</a>
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
                <li ><p class="pt-4">23/02/2023</p></li>

            </ul>     
        </div>
    </nav>`


    //--------idiomas frase logo----------
    let p= document.createElement("p")
    p.id="frase_imaginacion"
    p.innerHTML=`"${arrayM[5]}"`
    header.append(p)

    eventoCambiarIdioma()

}

function cargarFooter(arrayM){

    let footer= document.getElementsByTagName("footer")[0]
    footer.innerHTML=`
        <h2>${arrayM[6]}</h2>
        <!-- Grid container -->
        <div class="container p-4">
            <!-- Section: Social media -->
            <section class="mb-4">
            <!-- Facebook -->
            <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                ><i class="fab fa-facebook-f"></i
            ></a>

            <!-- Twitter -->
            <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                ><i class="fab fa-twitter"></i
            ></a>

            <!-- Instagram -->
            <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                ><i class="fab fa-instagram"></i
            ></a>

            <!-- Linkedin -->
            <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                ><i class="fab fa-linkedin-in"></i
            ></a>
            </section>

            <!-- Section: Form -->
            <section class="">
            <form action="">
                <!--Grid row-->
                <div class="row d-flex justify-content-center">
                <!--Grid column-->
                <div class="col-auto">
                    <p class="pt-2">
                    <strong>${arrayM[7]}</strong>
                    </p>
                </div>
                

                <!--Grid column-->
                <div class="col-md-5 col-12">
                    <!-- Email input -->
                    <div class="form-outline form-white mb-4">
                    <input type="email" id="form5Example21" placeholder="Email address" class="form-control" />
                    </div>
                </div>
                

                <!--Grid column-->
                <div class="col-auto">
                    <!-- Submit button -->
                    <button type="submit" class="btn btn-outline-light mb-4">
                    ${arrayM[8]}
                    </button>
                </div>
                <!--Grid column-->
                </div>
                <!--Grid row-->
            </form>
            </section>
            <!-- Section: Form -->

            <!-- Section: Text -->
            <section class="mb-4">

            </section>
            

            <!-- Section: Links -->
            <section class="">
            <!--Grid row-->
            <div class="row">
                

                <!--Grid column-->
                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mt-4">
                    <div class="d-flex flex-colum flex-wrap">
                        <a class="text-white col-12 text-md-start" href="">${arrayM[3+6]}</a>
                        <a class="text-white col-12 text-md-start" href="">${arrayM[4+6]}</a>
                        <a class="text-white col-12 text-md-start" href="">${arrayM[5+6]}</a>
                        <a class="text-white col-12 text-md-start" href="">${arrayM[6+6]}</a>
                        <a class="text-white col-12 text-md-start" href="">${arrayM[7+6]}</a>
                        <a class="text-white col-12 text-md-start" href="">${arrayM[8+6]}</a>
                    </div>
                </div>
                <!--Grid column-->
                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0">
                    <!-- Links -->
                    <h6 class="text-uppercase fw-bold mt-4">${arrayM[9+6]}</h6>
                    <div class="d-flex flex-row flex-wrap justify-content-around" style="width: 100%;">
                        <div id="appel-store"></div>
                        <div id="play-store"></div>
                    </div>
                    
                </div>

                <!-- Grid column -->
                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mt-4">
                    <!-- Links -->
                    <h6 class="text-uppercase fw-bold mb-4">${arrayM[10+6]}</h6>
                    
                    <div class="d-flex flex-colum flex-wrap">
                        <p class="col-12 text-md-start"><i class="fas fa-home me-3"></i>${arrayM[11+6]}</p>
                        <p class="col-12 text-md-start"><i class="fas fa-envelope me-3"></i>${arrayM[12+6]}</p>
                        <p class="col-12 text-md-start"><i class="fas fa-phone me-3"></i>+ 01 234 567 88</p>
                    </div>
                    
                </div>
                
            </div>
            <!--Grid row-->
            </section>
            <!-- Section: Links -->
        </div>

        <div id="copyright" class="text-center p-3">
            <a class="text-white" href="">${arrayM[14+6]}</a>
        </div>
    `
}

//-----cambiar idioma-----
function cambiarIdioma(idioma){

    let espanolM = ["Inicio", "Buscar", "Catálogo", "Novedades", "Ofertas","Deja tu imaginación volar... siente la música","Síguenos en nuestras redes sociales", "Suscríbete para recibir actualizaciones", "Suscribir", "Política de Cookies", "Política de Privacidad", "Aviso Legal", "Condiciones del servicio","Sobre Nosotros", "Nuestro Blog", "Descárgate Nuestra App", "Contáctanos", "New York, NY 10012, US", "info@example.com ", "+ 01 234 567 88","© MusicAnt.com 2023"];
    let inglesM = [ "Home", "Search", "Catalogue", "News", "Offers","Let your imagination fly... feel the music","Follow us on our social networks", "Subscribe to receive updates", "Subscribe ", "Cookies policy" , "Privacy Policy", "Legal warning", "Terms of Service", "About Us", "Our Blog", "Download Our App", "Contact us", "New York, NY 10012, US", "info@example.com ", "+ 01 234 567 88", "© MusicAnt.com 2023"];
    let euskeraM = [ "Hasi", "Bilatu", "Katalogoa", "Berria", "Eskaintzak","Utzi zure irudimena hegan... sentitu musika","Jarrai gaitzazu gure sare sozialetan", "Harpidetu eguneraketak jasotzeko",  "Harpidetu", "Cookien politika", 
    "Pribatutasun politika", "Lege abisua", "Zerbitzuaren baldintzak","Gutaz", "Gure bloga", "Deskargatu Gure aplikazioa", "jarri gurekin harremanetan" , "New York, NY 10012, US","info@example.com ","+ 01 234 567 88","© MusicAnt.com 2023"];
    let arrayM=[]
    if (idioma=="Español"){
        arrayM=espanolM
    }else if (idioma=="Inglés"){
        arrayM=inglesM
    }else{
        arrayM = euskeraM
    }

   
    return arrayM;
}


////////VALIDACION DEL LOGIN/////////
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
////////FIN  VALIDACION DEL LOGIN/////////

