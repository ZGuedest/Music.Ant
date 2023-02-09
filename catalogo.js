const radioCatalogo = document.getElementById('radiocatalogo');

const radioCuerda = document.getElementById('radio-cuerda');
const checksCuerda = document.getElementById('checks-cuerda');

const radioViento = document.getElementById('radio-viento');
const checksViento = document.getElementById('checks-viento');

const radioPercusion = document.getElementById('radio-percusion');
const checksPercusion = document.getElementById('checks-percusion');

const radioElectronico = document.getElementById('radio-electronico');
const checksElectronico = document.getElementById('checks-electronico');

yesnoCheck(); 

radioCuerda.addEventListener('change', (event)=>{
    yesnoCheck()
});


radioPercusion.addEventListener('change',  (event)=>{
    yesnoCheck()
});


radioViento.addEventListener('change', yesnoCheck)
radioElectronico.addEventListener('change', yesnoCheck)




function yesnoCheck() {
    debugger
    if (radioCuerda.checked==true) {
        checksCuerda.style.display = 'block';
        checksViento.style.display = 'none';
        checksPercusion.style.display = 'none';
        checksElectronico.style.display = 'none';
    } else if(radioViento.checked==true){ 
        checksCuerda.style.display = 'none';
        checksViento.style.display = 'block';
        checksPercusion.style.display = 'none';
        checksElectronico.style.display = 'none';

    }else if(radioPercusion.checked==true){
        checksCuerda.style.display = 'none';
        checksViento.style.display = 'none';
        checksPercusion.style.display = 'block';
        checksElectronico.style.display = 'none';

    }else if(radioElectronico.checked==true){
        checksCuerda.style.display = 'none';
        checksViento.style.display = 'none';
        checksPercusion.style.display = 'none';
        checksElectronico.style.display = 'block';

    }

}