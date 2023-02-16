let ck_primerradio = document.getElementById("ck_firstRadio");
let ck_segundoradio = document.getElementById("ck_secondRadio");
let ck_tercerradio = document.getElementById("ck_thirdRadio");
let gastosE = document.getElementById("ck_ge");
let totatP = document.getElementById("ck_producto");
let descuento = document.getElementById("ck_dto");
let total = document.getElementById("ck_total");

let cupon = document.getElementById("inputcupon");


let codigoReal= "250X"
 
totalP.value = localStorage.getItem('total');
totalP.innerHTML = localStorage.getItem('total');
gastosDeEnvio()
totalGastos()
ck_primerradio.addEventListener("change",()=>{
    gastosDeEnvio()
    totalGastos()

})

ck_segundoradio.addEventListener("change",()=>{
    gastosDeEnvio()
    totalGastos()
})

ck_tercerradio.addEventListener("change",()=>{
    gastosDeEnvio()
    totalGastos()

})

cupon.addEventListener("keyup",(event)=>{
    debugger
    if (event.code === 'Enter') {
        calcular()
    }

})


//FUNCIONESSSS
function gastosDeEnvio(){
        if (document.getElementById('ck_firstRadio').checked)
        {
            gastosE.innerHTML="0"
            gastosE.value= parseFloat(0)
        }
        else if (document.getElementById('ck_secondRadio').checked)
        {
            gastosE.innerHTML="10"
            gastosE.value= parseFloat(10)
            
        }
        else
        {
            gastosE.innerHTML="20"
            gastosE.value= parseFloat(20)

        }
}


  function totalGastos(){

      //sumar y restar al total
      let totalPagar = parseFloat(gastosE.value)+parseFloat (totatP.getAttribute("value"))-parseFloat(descuento.getAttribute("value"));
      total.innerHTML = totalPagar
      total.value = totalPagar; 
  }

  //aplicar descuento
  function calcular(){

    console.log(cupon.textContent)

    if(cupon.value==codigoReal){
        let dto = 0.21;
        let suma = parseFloat(totatP.getAttribute("value"));
        let dtoT = suma * dto;
        descuento.innerHTML = dtoT;
        descuento.setAttribute("value",dtoT)
        console.log(descuento.getAttribute("value"))
        let dtoTotal = totatP.getAttribute("value") - dtoT;
    
        total.setAttribute("value",dtoTotal)
        total.innerHTML= dtoTotal
    }else{
        alert("Código inexistente")
    }



  }




