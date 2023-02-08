let ck_primerradio = document.getElementById("ck_firstRadio");
let ck_segundoradio = document.getElementById("ck_secondRadio");
let ck_tercerradio = document.getElementById("ck_thirdRadio");
let gastosE = document.getElementById("ck_ge");
let totatP = document.getElementById("ck_producto").value;
let descuento = document.getElementById("ck_dto").value;
let total = document.getElementById("ck_total");
total = gastosE + totalP - descuento;



ck_primerradio.addEventListener("change",()=>{
    gastosDeEnvio()
})

ck_segundoradio.addEventListener("change",()=>{
    gastosDeEnvio()
})

ck_tercerradio.addEventListener("change",()=>{
    gastosDeEnvio()

})

function gastosDeEnvio(){

        if (document.getElementById('ck_firstRadio').checked)
        {
            gastosE.innerHTML="0€"
            gastosE.value= parseFloat(0)
        }
        else if (document.getElementById('ck_secondRadio').checked)
        {
            gastosE.innerHTML="10€"
            gastosE.value= parseFloat(10)
            
        }
        else
        {
            gastosE.innerHTML="20€"
            gastosE.value= parseFloat(20)

        }


}
//function totalGastos(){
    //total.innerHTML = "gastorE" + "totalP.value" - "descuento"
     
//}




