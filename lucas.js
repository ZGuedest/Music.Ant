
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

