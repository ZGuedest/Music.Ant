const radioCatalogo = document.getElementById("radiocatalogo");

const radioCuerda = document.getElementById("radio-cuerda");
const checksCuerda = document.getElementById("checks-cuerda");

const radioViento = document.getElementById("radio-viento");
const checksViento = document.getElementById("checks-viento");

const radioPercusion = document.getElementById("radio-percusion");
const checksPercusion = document.getElementById("checks-percusion");

const radioElectronico = document.getElementById("radio-electronico");
const checksElectronico = document.getElementById("checks-electronico");

yesnoCheck();

radioCuerda.addEventListener("change", (event) => {
  yesnoCheck();
});

radioPercusion.addEventListener("change", (event) => {
  yesnoCheck();
});

radioViento.addEventListener("change", yesnoCheck);
radioElectronico.addEventListener("change", yesnoCheck);

function yesnoCheck() {
  debugger;
  if (radioCuerda.checked == true) {
    checksCuerda.style.display = "block";
    checksViento.style.display = "none";
    checksPercusion.style.display = "none";
    checksElectronico.style.display = "none";
  } else if (radioViento.checked == true) {
    checksCuerda.style.display = "none";
    checksViento.style.display = "block";
    checksPercusion.style.display = "none";
    checksElectronico.style.display = "none";
  } else if (radioPercusion.checked == true) {
    checksCuerda.style.display = "none";
    checksViento.style.display = "none";
    checksPercusion.style.display = "block";
    checksElectronico.style.display = "none";
  } else if (radioElectronico.checked == true) {
    checksCuerda.style.display = "none";
    checksViento.style.display = "none";
    checksPercusion.style.display = "none";
    checksElectronico.style.display = "block";
  }
}

/////////Hacer click a favoritos

let corazon1 = document.getElementById("corazon1");
let corazon2 = document.getElementById("corazon2");
let corazon3 = document.getElementById("corazon3");
let corazon4 = document.getElementById("corazon4");
let corazon5 = document.getElementById("corazon5");
let corazon6 = document.getElementById("corazon6");
let corazon7 = document.getElementById("corazon7");
let corazon8 = document.getElementById("corazon8");
let corazon9 = document.getElementById("corazon9");
//let corazon = ["corazon1", "corazon2", "corazon3", "corazon4", "corazon5", "corazon6", "corazon7", "corazon8", "corazon9"];


  corazon1.addEventListener("click", cambiar);
function ir() {
    corazon1.setAttribute("class", "fa-solid fa-heart-circle-check corazon-vacio");
}

function volver() {
    corazon1.setAttribute("class", "fa-regular fa-heart corazon-vacio");
}
function cambiar() {
  let valor =  corazon1.getAttribute("class");
  if (valor == "fa-regular fa-heart corazon-vacio") {
   corazon1.setAttribute("class", "fa-solid fa-heart-circle-check corazon-vacio");
  } else {
     corazon1.setAttribute("class", "fa-regular fa-heart corazon-vacio");
  }
}
corazon2.addEventListener("click", cambiar2);
function ir2() {
    corazon2.setAttribute("class", "fa-solid fa-heart-circle-check corazon-vacio");
}

function volver2() {
    corazon2.setAttribute("class", "fa-regular fa-heart corazon-vacio");
}
function cambiar2() {
  let valor2 =  corazon2.getAttribute("class");
  if (valor2 == "fa-regular fa-heart corazon-vacio") {
   corazon2.setAttribute("class", "fa-solid fa-heart-circle-check corazon-vacio");
  } else {
     corazon2.setAttribute("class", "fa-regular fa-heart corazon-vacio");
  }
}
