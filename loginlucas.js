function validarPassword (){

var email, password

email = document.getElementById("form2Example11").value;
password = document.getElementById("form2Example22").value;

if (email == "prueba" && password == "1234"){
    
window.location.assign ("Index.html");
}else{
    alert ("Datos incorrectos")

}

};

