const rgEsp = ["Regístrate", "Nombre", "Apellidos", "Telefono", "Correo", "Contraseña", "Ciudad", "Dirección", "C.P", "Acepto los terminos y condiciones", "Registrate"];
const rgEng = ["Sign up", "Name", "Surnames", "Phone", "Email", "Password", "City", "Address", "P.C", "I accept the terms and conditions", "Check in"];
const rgEus = ["Izena eman", "Izena", "Abizenak", "Mugikorra", "Posta", "Pasahitza", "Hiria", "Helbidea", "P.K", "Baldintzak eta baldintzak onartzen ditut", "Erregistratu"]

let arrayRg = [];
arrayRg=rgEsp;

cargarRegistro(arrayRg)

function cargarRegistro(arrayRg){
    let rg_caja = document.getElementById('rg_caja');
    rg_caja.innerHTML = ` 
    <div class="col-lg-8">
            <h2 class="fw-bold mb-5">${arrayRg[0]}</h2>
            <form class="d-flex flex-column align-items-center">
             
              <div class="row">
                <div class="col-md-6 mb-4  ">
                  <div class="form-outline">
                     <label for="inputnombre" class="form-label"></label>
            <input type="text" class="form-control " id="rg_inputnombre" placeholder="${arrayRg[1]}"> 
                    
                  </div>
                </div>
                <div class="col-md-6 mb-4">
                  <div class="form-outline">
                    <label for="inputapellidos" class="form-label"></label>
            <input type="text" class="form-control" id="rg_inputapellidos" placeholder="${arrayRg[2]}">
                   
                  </div>
                </div>
              </div>
              <div class="col-md-6 mb-4">
                <div class="form-outline">
                    <label for="inputTl" class="form-label"></label>
            <input type="text" class="form-control" id="rg_inputTl" placeholder="${arrayRg[3]}">
                  
                </div>
              </div>
             
              
  
              
              <div class="form-outline col-md-6 mb-4">
                <label for="inputEmail" class="form-label"></label>
            <input type="email" class="form-control" id="rg_inputEmail" placeholder="${arrayRg[4]}">
                
              </div>
  
             
              <div class="form-outline col-md-6 mb-4"><label for="inputPassword" class="form-label"></label>
                <input type="password" class="form-control" id="rg_inputPassword" placeholder="${arrayRg[5]}">
                
              </div>
              <div class="col-md-6 mb-4">
                <div class="form-outline">
                    <label for="inputCity" class="form-label"></label>
            <input type="text" class="form-control" id="rg_inputCity" placeholder="${arrayRg[6]}">
                  
                </div>
              </div>
              <div class="col-md-6 mb-4">
                <div class="form-outline">
                    <label for="inputdirecion" class="form-label"></label>
            <input type="text" class="form-control" id="rg_inputdireccion" placeholder="${arrayRg[7]}">
                </div>
              </div>
             
              <div class="col-md-6 mb-4">
                <div class="form-outline">
                    <label for="inputcp" class="form-label"></label>
            <input type="text" class="form-control" id="rg_inputcp" placeholder="${arrayRg[8]}">
                  
                </div>
              </div>
  
              
              <div class="form-check d-flex justify-content-center mb-4">
                <input class="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
                <label class="form-check-label" for="form2Example33">
                ${arrayRg[9]}
                </label>
              </div>
  
              
              <button type="submit" class="btn btn-primary btn-block mb-4">
              ${arrayRg[10]}
              </button>
  
             
            </form>
          </div>`

}

{/* <section  class="h-100 gradient-form justify-content-center d-flex text-center">
<div id="lg_fondo" class="container py-5 my-5 h-100">



<div class="p-5" ></div> 

<div class="card-body py-5 px-md-5">

<div class="col d-flex justify-content-center">
  <div class="col-lg-8">
    <h2 class="fw-bold mb-5">Regístrate</h2>
    <form class="d-flex flex-column align-items-center">
     
      <div class="row">
        <div class="col-md-6 mb-4  ">
          <div class="form-outline">
             <label for="inputnombre" class="form-label"></label>
    <input type="text" class="form-control " id="rg_inputnombre" placeholder="Nombre"> 
            
          </div>
        </div>
        <div class="col-md-6 mb-4">
          <div class="form-outline">
            <label for="inputapellidos" class="form-label"></label>
    <input type="text" class="form-control" id="rg_inputapellidos" placeholder="Apellidos">
           
          </div>
        </div>
      </div>
      <div class="col-md-6 mb-4">
        <div class="form-outline">
            <label for="inputTl" class="form-label"></label>
    <input type="text" class="form-control" id="rg_inputTl" placeholder="Telefono">
          
        </div>
      </div>
     
      

      <!-- Email input -->
      <div class="form-outline col-md-6 mb-4">
        <label for="inputEmail" class="form-label"></label>
    <input type="email" class="form-control" id="rg_inputEmail" placeholder="Correo">
        
      </div>

      <!-- Password input -->
      <div class="form-outline col-md-6 mb-4"><label for="inputPassword" class="form-label"></label>
        <input type="password" class="form-control" id="rg_inputPassword" placeholder="Contraseña">
        
      </div>
      <div class="col-md-6 mb-4">
        <div class="form-outline">
            <label for="inputCity" class="form-label"></label>
    <input type="text" class="form-control" id="rg_inputCity" placeholder="Ciudad">
          
        </div>
      </div>
      <div class="col-md-6 mb-4">
        <div class="form-outline">
            <label for="inputdirecion" class="form-label"></label>
    <input type="text" class="form-control" id="rg_inputdireccion" placeholder="Dirección">
        </div>
      </div>
      <div class="col-md-6 mb-4">
        <div class="form-outline">
         <label for="inputcp" class="form-label"></label>
            <input type="text" class="form-control" id="rg_inputcp" placeholder="C.P">    
            
        </div>
      </div>

      <!-- Checkbox -->
      <div class="form-check d-flex justify-content-center mb-4">
        <input class="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
        <label class="form-check-label" for="form2Example33">
          Acepto los terminos y condiciones
        </label>
      </div>

      <!-- Submit button -->
      <button type="submit" class="btn btn-primary btn-block mb-4">
        Registrarse
      </button>

     
    </form>
  </div>
</div>
</div>
</div>
</section> */}