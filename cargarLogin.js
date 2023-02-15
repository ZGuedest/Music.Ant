 

const lgnEsp = ["regresar","Deja tu imaginación volar... sientre la música","Por favor entre los datos de su cuenta","correo","contraseña","Entrar","¿Has olvidado tu contraseña?","Si no tienes cuenta","Regístrate","Somos más que una empresa","Somos un grupo de entusiastas de la música que tiene la suerte de compartir su pasión con personas afines, guiando, aconsejando y también aprendiendo de nuestros clientes. Bienvenidos a nuestra familia: !Viva la música!"]
const lgnEng = ["back","Let your imagination fly... feel the music","Please enter your account information","email","password","Log_in","Have you forgotten your password?"," If you don't have an account","Register","We are more than a company","We are a group of music enthusiasts lucky enough to share their passion with like-minded people, guiding, advising and also learning from our customers. Welcome to our family: Long live the music!"]
const lgnEus = ["itzuli","Utzi zure irudimena hegan egiten... sentitu musika","Mesedez sartu zure kontuaren informazioa","posta elektronikoa","pasahitza","Sartu","Pasahitza ahaztu al duzu?","Ez baduzu 'ez daukazu konturik","Erregistratu","Enpresa bat baino gehiago gara","Musika zaleen talde bat gara bere pasioa gogokoekin partekatzeko zortea, gure bezeroak gidatuz, aholkatuz eta baita ikasten ere. Ongi etorri gure familiara: Bizi musika!"]

let arrayLog=[];
arrayLog=lgnEsp;
cargarLogin(arrayLog)

function cargarLogin(arrayLog){

  debugger

  let caja = document.getElementById("lg_fondo");


  caja.innerHTML = `<a href="Index.html"><i class="fa-solid fa-arrow-left">  ${arrayLog[0]} </i></a>
        <div class="text-center">
          <img src="img/logo.png"
            style="width: 185px;" alt="logo">
          <h2 id="frase-imaginacion" class="mt-1 mb-5 pb-1">"${arrayLog[1]}"</h2>
        </div>
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-xl-10">
            <div class="card rounded-3 text-black">
              <div id="caja" class="row g-0">
                <div class="col-lg-6">
                  <div id="" class="card-body p-md-5 mx-md-4">
                    <form>
                      <p>${arrayLog[2]}</p>
    
                      <div class="form-outline mb-4">
                        <input type="email" id="form2Example11" class="form-control"
                          placeholder=${arrayLog[3]} pattern=".+@gmail.com" required/>
                        <label class="form-label" for="form2Example11"></label>
                      </div>
    
                      <div class="form-outline mb-4">
                        <input type="password" id="form2Example22" class="form-control"  placeholder=${arrayLog[4]} />
                        <label class="form-label" for="form2Example22"></label>
                      </div>
    
                      <div class="text-center pt-1 mb-5 pb-1">
                        <input class="btn" type="submit" id="button" value=${arrayLog[5]}> 
                        <a class="text-muted" href="#!">${arrayLog[6]}</a>
                      </div>
    
                      <div class="d-flex align-items-center justify-content-center pb-4">
                        <p class="mb-0 me-2">${arrayLog[7]}</p>
                        <button type="button" class="btn">${arrayLog[8]}</button>
                      </div>
    
                    </form>
    
                  </div>
                </div>
                <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div class="px-3 py-4 p-md-5 mx-md-4">
                    <h4 class="mb-4">${arrayLog[9]}</h4>
                    <p class="small mb-0">${arrayLog[10]}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> `


}

