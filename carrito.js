const btnAbrirModal =
document.querySelector ("#btn-Abrir-Modal");
const btnCerrarModal =
document.querySelector ("#btn-Cerrar-Modal");
const modal=
document.querySelector ("#modal");


btnAbrirModal.addEventListener("click",function() 
{
modal.showModal();
})


btnCerrarModal.addEventListener("click",function()
{
    modal.close();
})

