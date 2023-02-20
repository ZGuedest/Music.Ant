
function eventoCambiarIdioma(){
    debugger
    let opciones = document.getElementsByClassName("idioma");
    for (let a = 0 ; a<opciones.length; a++){
        opciones[a].addEventListener("click", (event)=>{ 
            debugger
            idiomaSelect=event.target.textContent
            localStorage.setItem("idioma",idiomaSelect)
            iniciarHeaderAndFooter()
            let aux=window.location.href
            if(aux.substring(aux.length-("Index.html").length,aux.length)=="Index.html" ||
            aux.substring(aux.length-("Index.html").length,aux.length)=="ndex.html#"){
                cargarHome(idiomaSelect)
            }
            if(aux.substring(aux.length-("catalogo.html").length,aux.length)=="catalogo.html" ||
             aux.substring(aux.length-("catalogo.html").length,aux.length)=="atalogo.html#"){
                iniciarCatalogo(idiomaSelect)
            }
            if(aux.substring(aux.length-("carrito.html").length,aux.length)=="carrito.html" ||
             aux.substring(aux.length-("carrito.html").length,aux.length)=="arrito.html#"){
                iniciarCarrito(idiomaSelect)
            }
            if(aux.substring(aux.length-("producto.html").length,aux.length)=="producto.html" ||
             aux.substring(aux.length-("producto.html").length,aux.length)=="roducto.html#"){
                iniciarProducto(idiomaSelect)
            }
            if(aux.substring(aux.length-("favoritos.html").length,aux.length)=="favoritos.html" ||
             aux.substring(aux.length-("favoritos.html").length,aux.length)=="avoritos.html#"){
                iniciarFavoritos(idiomaSelect)
            }
            if(aux.substring(aux.length-("checkout.html").length,aux.length)=="checkout.html" ||
             aux.substring(aux.length-("checkout.html").length,aux.length)=="heckout.html#"){
                iniciarCheckout(idiomaSelect)            
            }

            if(aux.substring(aux.length-("login.html").length,aux.length)=="login.html" ||
             aux.substring(aux.length-("login.html").length,aux.length)=="ogin.html#"){
                iniciarLogin(idiomaSelect)            
            }
            
        })
    }
}

function cambiarIdioma(idioma, esp, ing, eusk){

    let espanolM = ["Inicio", "Buscar", "Catálogo", "Novedades", "Ofertas","Deja tu imaginación volar... siente la música","Síguenos en nuestras redes sociales", "Suscríbete para recibir actualizaciones", "Suscribir", "Política de Cookies", "Política de Privacidad", "Aviso Legal", "Condiciones del servicio","Sobre Nosotros", "Nuestro Blog", "Descárgate Nuestra App", "Contáctanos", "New York, NY 10012, US", "info@example.com ", "+ 01 234 567 88","© MusicAnt.com 2023", "Cerrar"];
    let inglesM = [ "Home", "Search", "Catalogue", "News", "Offers","Let your imagination fly... feel the music","Follow us on our social networks", "Subscribe to receive updates", "Subscribe ", "Cookies policy" , "Privacy Policy", "Legal warning", "Terms of Service", "About Us", "Our Blog", "Download Our App", "Contact us", "New York, NY 10012, US", "info@example.com ", "+ 01 234 567 88", "© MusicAnt.com 2023", "Log Out"];
    let euskeraM = [ "Hasi", "Bilatu", "Katalogoa", "Berria", "Eskaintzak","Utzi zure irudimena hegan... sentitu musika","Jarrai gaitzazu gure sare sozialetan", "Harpidetu eguneraketak jasotzeko",  "Harpidetu", "Cookien politika", 
    "Pribatutasun politika", "Lege abisua", "Zerbitzuaren baldintzak","Gutaz", "Gure bloga", "Deskargatu Gure aplikazioa", "jarri gurekin harremanetan" , "New York, NY 10012, US","info@example.com ","+ 01 234 567 88","© MusicAnt.com 2023", "Itxi"];
    espanolM.push(esp)
    inglesM.push(ing)
    euskeraM.push(eusk)

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