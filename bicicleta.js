const chcktEsp = ["Seleccione el Tipo de Envio", "Recogida en tienda","Gratis(Puede recoger su pedido a partir del jueves)","Enviar a domicilio 72h", "10€ (Recibirá su pedido entre las 9:00am y 2:00pm del jueves)","Enviar a domicilio 24h","20€(Recibirá su pedido entre las 9:00am y 2:00 de mañana)","Datos del cliente", "Nombre", "Apellidos", "Teléfono", "Ciudad","Dirección", "C.P.", "Correo", "Contraseña","Métodos de pago","Pago con tarjeta", "Número de tarjeta","Mes caducidad","Año caducidad","CCV","MM","YY","CCV","Nombre en la tarjeta","Guardar detalles para pagos rápidos", "Pagos con Bizum","Introduce el teléfono","Teléfono registrado en Bizum","Pago con Paypal","Correo", "Contraseña","Cupón de Descuento","Código del cupón","Resumen del Pedido:","Precio totalde los productos","Precio de envio","Descuento","Total a Pagar", "Realizar Pedido"]
const chcktEng = ["Select Type of Shipping", "Pick up in store", "Free (You can pick up your order from Thursday)", "72h home delivery", "€10 (You will receive your order between 9:00 and 24: 00 hours). : 00h on Thursday)","24h home delivery","20€(You will receive your order between 9:00 and 02:00 tomorrow)","Customer data", "Name", "Surname", "Telephone", " City","Address", "ZIP", "Email", "Password","Payment methods","Card payment","Card number","Expiration month" ,"Expiration year", "CCV", "MM","YY","CCV","Name on the card","Save data for quick payments", "Payments with Bizum","Enter telephone number","Telephone number registered in Bizum","Payment with Paypal","Email","Password","Discount Coupon","Coupon Code","Order Summary:","Total Product Price","Shipping Price","Discount", "Total to Pay", "Place order"]
const chcktEus = ["Hautatu Bidalketa Mota", "Jaso dendan","Doan (ostegunetik aurrera jaso dezakezu eskaera)","Bidali zure etxeko helbidera 72 orduko epean", "10 € (Eskaria 9 bitartean jasoko duzu). :00:00etan eta 14:00etan 00:00etan ostegunean),","Bidali etxeko helbidera 24 orduetan","20€(Bihar 9:00etatik 02:00etara jasoko duzu zure eskaera),","Bezeroaren datuak", "Izena ", "Abizenak", "Telefonoa", "Hiri", "Helbidea", "ZIP", "E-posta", "Pasahitza","Ordainketa moduak","Txartelaren ordainketa", "Txartel zenbakia","Iraungitze hilabetea", "Iraungitze-urtea", "CCV","MM","YY","CCV","Izena txartelean","Gorde xehetasunak ordainketa azkarrerako", "Ordainketak Bizum-ekin","Idatzi telefono zenbakia"," Bizum-en erregistratutako telefono-zenbakia", "Ordainketa Paypal-ekin","Eposta elektronikoa", "Pasahitza","Deskontu kupoia","Kupoi kodea","Eskaeraren laburpena:","Produktuen prezio osoa","Bidalketa prezioa"," Deskontua", "Ordaintzeko guztira", "Egin eskaera"]
let arrayCk = [""]
let main = document.getElementsByTagName[0]
main.innerHTML = `<div class="col-md-7">
<section id="tipo-envio">
    <h2 class=" p-3 col-md-12 border-bottom border-2">${arrayCk[0]}</h2>
    <ul class="list-group p-3 mb-2   col-md-12">
        <li class="list-group-item border border-0 border-bottom">
            <input id="ck_firstRadio"  class="form-check-input me-1 " type="radio" name="listGroupRadio" value="" checked>
            <label class="form-check-label" for="firstRadio"> 
                <strong> ${arrayCk[1]} </strong><br> ${arrayCk[2]}   
                <xsmall class="text-muted">${arrayCk[3]}</xsmall>
            </label>
        </li>
        <li class="list-group-item border border-0 border-bottom">
            <input id="ck_secondRadio" class="form-check-input me-1" type="radio" name="listGroupRadio" value="" >
            <label class="form-check-label" for="secondRadio"> 
                <strong> Enviar a domicilio 72h </strong><br> 10€ 
                <xsmall class="text-muted">(Recibira su pedido entre las 9.00am y 2:00pm del Jueves) </xsmall>
            </label>
        </li>
        <li class="list-group-item border border-0 border-bottom">
            <input id="ck_thirdRadio" class="form-check-input me-1 " type="radio" name="listGroupRadio" value="" >
            <label class="form-check-label" for="thirdRadio"> 
                <strong> Enviar a domicilio 24h</strong> <br>  20€ 
                <xsmall class="text-muted">(Recibirá su pedido entre las 9.00am y 2.00pm de Mañana) </xsmall>
            </label>
        </li>
    </ul>
</section>

<section id="datos-cliente">
    <h2 class=" p-3 border-bottom border-2 ">Datos del Cliente</h2>
    <form action="" name="formulario" method="get" class="row g-3 p-3 mb-2  text-emphasis-dark">

        <div id="ck_formulario" class="col-md-4 ">
            <label for="inputnombre" class="form-label"></label>
            <input type="text" class="form-control" id="ck_inputnombre" placeholder="Nombre">
        </div>
        <div class="col-md-4">
            <label for="inputapellidos" class="form-label"></label>
            <input type="text" class="form-control" id="ck_inputapellidos" placeholder="Apellidos">
        </div>
        <div class="col-md-4">
            <label for="inputTl" class="form-label"></label>
            <input type="text" class="form-control" id="ck_inputTl" placeholder="Telefono">
        </div>
        <div class="col-md-4">
            <label for="inputCity" class="form-label"></label>
            <input type="text" class="form-control" id="ck_inputCity" placeholder="Ciudad">
        </div>
        <div class="col-md-4">
            <label for="inputdirecion" class="form-label"></label>
            <input type="text" class="form-control" id="ck_inputdireccion" placeholder="Direccion">
        </div>
        <div class="col-md-4">
            <label for="inputCp" class="form-label"></label>
            <input type="text" class="form-control" id="ck_inputCp" placeholder="C.P">
        </div>
        <div class="col-md-6">
            <label for="inputEmail" class="form-label"></label>
            <input type="email" class="form-control" id="ck_inputEmail" placeholder="Email">
        </div>
        <div class="col-md-6">
            <label for="inputPassword" class="form-label"></label>
            <input type="password" class="form-control" id="ck_inputPassword" placeholder="Contraseña">
        </div> 
    </form>
</section>

<section id="metodos-pago">

    <h2 class=" p-3 border-2 border-bottom">Métodos de Pago</h2>

    <div class="accordion accordion-flush p-3 mb-2" id="accordionFlushExample">
        <div class="accordion-item p-3 mb-2 ">
            <h2 class="accordion-header" id="flush-headingOne">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    Pago con Tarjeta <i class="fa-regular fa-credit-card px-3"></i>
                </button>
            </h2>
            <div id="flush-collapseOne" class="accordion-collapse collapse " aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body ">
                    <form action="#" class="credit-card-div ">
                        <div class="panel panel-default" >
                            <div class="row ">
                                <div class="col-md-12">
                                    <input type="text" class="form-control" placeholder="Numero de la tarjeta"/>
                                </div>
                            </div>
                            <div class="row ">
                                <div class="col-md-4 col-sm-4 col-xs-4">
                                    <span class="help-block text-muted small-font " > Mes caducidad</span>
                                    <input type="text" class="form-control" placeholder="MM" />
                                </div>
                                <div class="col-md-4 col-sm-4 col-xs-4">
                                    <span class="help-block text-muted small-font" >  Año caducidad</span>
                                    <input type="text" class="form-control" placeholder="YY" />
                                </div>
                                <div class="col-md-3 col-sm-3 col-xs-3">
                                    <span class="help-block text-muted small-font" >  CCV</span>
                                    <input type="text" class="form-control" placeholder="CCV" />
                                </div> 
                                        
                            </div>
                            <div class="row ">
                                <div class="col-md-12 pad-adjust"><br>
                                    <input type="text" class="form-control" placeholder="Nombre en la tarjeta" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12 pad-adjust">
                                    <div class="checkbox">
                                        <label>
                                            <input id="ck_pagorapido" type="checkbox" checked class="text-muted"> Guardar detalles para pagos rapidos <a href="#"> </a>
                                        </label>
                                    </div>
                                </div>
                                <br>
                                <div class=" mx-auto">
                                   <!--<button id="ck_btn-Tarjeta" type="button" class="btn btn-info text-center ">Realizar el Pago</button><br>-->
                                    <img src="img/tarjetas.png" alt="">
                                </div> 
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="accordion-item p-3 mb-2">
            <h2 class="accordion-header" id="flush-headingTwo">
                <button class="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    Pago con Bizum <img id="ck_imgBizum" class="m-3" src="img/bizum.png"   alt="">
                </button>
            </h2>
            <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                    <div class="col-md-6 ">
                        <label for="inputbizum" class="form-label"></label>
                        <input type="text" class="form-control " id="inputbizum" placeholder="Introduce el Telefono">
            
                    </div><br>
                    <h6 class="">Telefono registrado en Bizum</h6><br>
                   <!-- <button id="ck_btn-Bizum" type="button" class="btn btn-info  ">Continuar la Compra</button>-->
                </div>
            </div>
        </div>
        <div class="accordion-item p-3 mb-2 ">
            <h2 class="accordion-header" id="flush-headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    Pago con Paypal <i class="fa-brands fa-cc-paypal px-3"></i>
                </button>
            </h2>
            <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingTree" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                    <form class="row g-3 p-3 mb-2  col-md-6">
                        <div class="col-12 mx-auto">
                            <label for="inputEmail" class="form-label"></label>
                            <input type="email" class="form-control" id="inputEmail" placeholder="Correo electronico">
                        </div>
                        <div class="col-12 mx-auto text-center">
                            <label for="inputPassword" class="form-label"></label>
                            <input type="password" class="form-control" id="inputPassword" placeholder="Contraseña"> <br>
                            <!--<button id="ck_btn-Paypal" type="button" class="btn btn-info mx-auto ">Continuar la Compra</button>-->
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </div>
</section>
</div>
<div class="col-md-5">
<section id="cupon">
    <div class="accordion-body mx-4">Cupón de Descuento
        <label for="inputcupon" class="form-label m-4"></label>
        <input type="text" class="form-control " id="inputcupon"  placeholder="Código del Cupón">
    </div>
</section>

<section id="resumen-pedido">
    <h5 class="h4 pb-2 mb-4 text-dark border-bottom border-munder m-4">Resumen del Pedido:</h5>
    <ul>
        <li class="list-group-item">Precio total de los productos: <span id="ck_producto" value = 0 class="badge text-bg-secondary m-3 px-4">0</span>€</li>
        <li class="list-group-item">Precio de envio: <span id="ck_ge" class="badge text-bg-secondary m-3 px-4">0</span>€</li>
        <li class="list-group-item">Descuento: <span id="ck_dto" value = 0 class="badge text-bg-secondary m-3 px-4">0</span>€</li>
        <li class="list-group-item"><strong>Total a Pagar: <span id="ck_total" class="badge text-bg-secondary m-3  px-4">0</span>€</li>
    </ul>

</section>
<section id="boton-pedido d-flex justify-content-center" class="m-4">
    <!-- <button id="ck_btnpedido" type="button" class="btn btn-info mx-auto m-4" data-bs-toggle="modal" data-bs-target="#exampleModal">Realizar Pedido</button> -->
    <a id="ck_btnpedido"  href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">  <i class="fa-solid fa-cart-shopping"></i> REALIZAR PEDIDO</a>

    
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">GRACIAS POR CONFIRAR EN NOSOTROS</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    Tu compra ha sido realizada con exito.
                </div>
            </div>
        </div>
    </div>
</section>
</div>`