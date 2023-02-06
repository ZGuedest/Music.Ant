let ck_primerradio = document.getElementById(ck_firstRadio);
let ck_segundoradio = document.getElementById(ck_secondRadio);
let ck_tercerradio = document.getElementById(ck_thirdRadio);

function gastosDeEnvio()

if (document.getElementById('ck_firstRadio').checked)
{
alert('gratis');
}
if (document.getElementById('ck_secondRadio').checked)
{
alert('10€ gastos de envio');
}
if (document.getElementById('ck_thirdRadio').checked)
{
alert('20€ gastos de envio');
}