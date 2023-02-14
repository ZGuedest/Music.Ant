let btn= document.getElementById("button")

btn.addEventListener("click", (event)=>{

    event.preventDefault()
    validarPassword ()
})


function validarPassword (){

    var email, password

    email = document.getElementById("form2Example11").value;
    password = document.getElementById("form2Example22").value;

    if (email == "prueba@gmail.com" && password == "1234"){
        localStorage.setItem('gmail',email);
        localStorage.setItem('password',password);
        window.location.assign ("Index.html");
    }else{
        alert ("Datos incorrectos")

    }

};

