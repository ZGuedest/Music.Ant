let boton =document.getElementById("button");
let gmail =document.getElementById("form2Example11");
let password=document.getElementById("form2Example22");


boton.addEventListener('click',regestrar);
function regestrar(){

    let gamil_gmail=gmail.value;
    let password_password=password.value;

    localStorage.setItem('gmail',gamil_gmail);
    localStorage.setItem('password',password_password);
    if(gmail=="lucas" && password=="1234"){
        window.location.href="Index.html"
    }
}



