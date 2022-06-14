// formulario
var formInciciarSesion = document.getElementById("formInciciarSesion");
var formRegistrarse = document.getElementById("formRegistrarse");

// link
var cambioAregistro = document.getElementById("cambioAregistro")
var cambioAinicioSecion = document.getElementById("cambioAinicioSecion")

// base de datos
var bd = window.localStorage;

// contenedor de alertas
var divAlertInicio = document.getElementById("divAlertInicio");
var divAlerRegistro = document.getElementById("divAlerRegistro");

// con essta funcion cambiamos registro
cambioAregistro.onclick = function(){

    algo = "Antes";
    console.log(algo);
    formInciciarSesion.reset();
    formRegistrarse.reset();

    formInciciarSesion.classList.remove("d-block");
    formInciciarSesion.classList.remove("d-none");
    formInciciarSesion.classList.add("d-none");

    formRegistrarse.classList.remove("d-block");
    formRegistrarse.classList.remove("d-none");
    formRegistrarse.classList.add("d-block");
 

}

// con esta funcionn cambioamos de formulario

cambioAinicioSecion.onclick = function(){
    var algo = "Despues";
    console.log(algo)
    formInciciarSesion.reset();
    formRegistrarse.reset();

    formInciciarSesion.classList.remove("d-block");
    formInciciarSesion.classList.remove("d-none");
    formInciciarSesion.classList.add("d-block");

    formRegistrarse.classList.remove("d-block");
    formRegistrarse.classList.remove("d-none");
    formRegistrarse.classList.add("d-none");
}

formInciciarSesion.addEventListener("submit", function(e){
    e.preventDefault();
    var emailInicio = document.getElementById("emailInicio");
    var passwordInicio = document.getElementById("passwordInicio");
    var claveEncriptada = btoa(passwordInicio.value);

    const data = {
        email: emailInicio.value,
        password: claveEncriptada
    }
    getInformacionInnicio(bd, data)
})



formRegistrarse.addEventListener("submit", function(e){

    
    e.preventDefault();
    var emaiRegistro = document.getElementById("emaiRegistro");
    var passwordRegistro = document.getElementById("passwordRegistro");

    var claveEncriptada = btoa(passwordRegistro.value);

    const data = {
        email: emaiRegistro.value,
        password: claveEncriptada
    }

    getInformacioRegistro(bd,data)
}) 

function guardarDatos(bd, data){
    bd.setItem(data.email ,JSON.stringify(data));
}

function getInformacioRegistro(bd, data){
    
    if(bd.length != 0){
        let claves =Object.keys(bd);
        if(claves.length !=0){

            for(clave of claves){
                let informacion = JSON.parse(bd.getItem(clave));
                if(informacion.email == data.email){
                    divAlerRegistro.innerHTML = "<div class='alert alert-success' role='alert'>Este correo ya esta registrado</div>";
                    setTimeout(function(){divAlerRegistro.innerHTML = ""  }, 4000);                    
                }else{
                guardarDatos(bd, data);
                
                divAlerRegistro.innerHTML = "<div class='alert alert-success' role='alert'>Su correo fue registrado correctamente</div>"

                formInciciarSesion.reset();
                formRegistrarse.reset();

                setTimeout(function(){
                    divAlerRegistro.innerHTML = "";

                },4000);
            }
        }
    }
        
}else{
    guardarDatos(bd, data);
    divAlerRegistro.innerHTML = "<div class='alert alert-success' role='alert'>Su correo fue registrado correctamente</div>"

    formInciciarSesion.reset();
    formRegistrarse.reset();

    setTimeout(function(){
        divAlerRegistro.innerHTML = "";
    },4000);

}
}

function getInformacionInnicio(bd, data){
    let claves = Object.keys(bd);
    if(claves.length != 0){
        for(clave of claves){
            let informacion = JSON.parse(bd.getItem(clave));
            if(informacion.email == data.email){
                if(informacion.password == data.password){
                    divAlertInicio.innerHTML = "<div class='alert alert-success' role='alert'>Inicio de sesion exitoso, en unos segundos sera redirigido</div>"
                    setTimeout(function(){
                        divAlertInicio.innerHTML = "" ;
                        window.location.replace("https://www.google.com.sv/search?q=barra+invertida+sin+bolo&sxsrf=ALiCzsaWYHbdu-8Y0SzW7SWUTF-CYGzKoQ%3A1655219041134&ei=YaOoYqDhB_fmkvQPipOz0AE&ved=0ahUKEwjgleO3m634AhV3s4QIHYrJDBoQ4dUDCA4&uact=5&oq=barra+invertida+sin+bolo&gs_lcp=Cgdnd3Mtd2l6EAMyBggAEB4QDToHCAAQRxCwAzoECCMQJzoGCAAQHhAWOgUIIRCgAToICCEQHhAWEB1KBAhBGABKBAhGGABQ6AZYkihgvypoAXABeACAAXuIAYUQkgEENS4xNZgBAKABAcgBCMABAQ&sclient=gws-wiz");
                    },3000); 
                }else{
                    divAlertInicio.innerHTML = "<div class='alert alert-warning' role='alert'>Clave incorrecta</div>";
                    setTimeout(function(){divAlertInicio.innerHTML = ""}, 4000);
                }
            }else{
                divAlertInicio.innerHTML = "<div class='alert alert-warning' role='alert'>Este correo no esta registrado en nuestra base de datos, por favor registrese</div>";
                setTimeout(function(){divAlertInicio.innerHTML = ""}, 4000);
                
            }
        }
    }else{
        divAlertInicio.innerHTML = "<div class='alert alert-warning' role='alert'>Este correo no esta registrado en nuestra base de datos, por favor registrese</div>";
        setTimeout(function(){divAlertInicio.innerHTML = ""}, 4000);
    }

}




