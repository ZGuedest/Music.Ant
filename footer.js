let array = ["Síguenos en nuestras redes sociales", "Suscríbete para recibir actualizaciones", "Subscribe", "Política de Cookies", "Política de Privacidad", "Aviso Legal", "Política de Cookies", "Política de Privacidad", "Aviso Legal", "Descárgate Nuestra App", "Contáctanos", "New York, NY 10012, US", "info@example.com ", "+ 01 234 567 88", "© 2023 Copyright:", "MusicAnt.com"] 
let arrayIngles =["Follow us on our social networks", "Subscribe to receive updates", "Subscribete", "Cookies policy", "Legal warning", , "Cookies policy", "Privacy Policy", "Legal warning", "Download Our App", "Contact us", "New York, NY 10012, US", "info@example.com ", "+ 01 234 567 88", "© 2023 Copyright:", "MusicAnt.com"]
let arrayeuskera = ["Jarrai gaitzazu gure sare sozialetan", "Harpidetu eguneraketak jasotzeko",  "harpidetu", "cookien politika", 
"Pribatutasun politika", "Lege abisua", "Deskargatu Gure aplikazioa", "jarri gurekin harremanetan" , "New York, NY 10012, US","© 2023 Copyright:","MusicAnt.com"]

debugger
let html= document.getElementsByTagName("html")[0]
let footer = document.createElement("footer")
footer.className="text-center text-white"
footer.innerHTML=`<h2>${array[0]}</h2>
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
            <strong>${array[1]}</strong>
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
            ${array[2]}
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
                <a class="text-white col-12 text-md-start" href="">${array[3]}</a>
                <a class="text-white col-12 text-md-start" href="">${array[4]}</a>
                <a class="text-white col-12 text-md-start" href="">${array[5]}</a>
                <a class="text-white col-12 text-md-start" href="">${array[6]}</a>
                <a class="text-white col-12 text-md-start" href="">${array[7]}</a>
                <a class="text-white col-12 text-md-start" href="">${array[8]}</a>
            </div>
        </div>
        <!--Grid column-->
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mt-4">${array[9]}</h6>
            <div class="d-flex flex-row flex-wrap justify-content-around" style="width: 100%;">
                <div id="appel-store"></div>
                <div id="play-store"></div>
            </div>
            
        </div>

        <!-- Grid column -->
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mt-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">${array[10]}</h6>
            
            <div class="d-flex flex-colum flex-wrap">
                <p class="col-12 text-md-start"><i class="fas fa-home me-3"></i>${array[11]}</p>
                <p class="col-12 text-md-start"><i class="fas fa-envelope me-3"></i>${array[12]}</p>
                <p class="col-12 text-md-start"><i class="fas fa-phone me-3"></i>+ 01 234 567 88</p>
            </div>
            
        </div>
        
    </div>
    <!--Grid row-->
    </section>
    <!-- Section: Links -->
</div>
<!-- Grid container -->

<!-- Copyright -->
<div id="copyright" class="text-center p-3">
${array[13]}
    <a class="text-white" href="">${array[14]}</a>
</div>
<!-- Copyright -->
`
html.append(footer)
