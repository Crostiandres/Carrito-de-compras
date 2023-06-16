//Const
let form = document.getElementById("formulario");
let botonEnviar = document.getElementById("botonEnviar")

//Array
let datosForm = [];

localStorage.getItem("datos", datosForm);

//Se agregan eventos al enviar los datos
form.addEventListener("submit", agregar);
botonEnviar.addEventListener("click", () => {
    Toastify({
        text: `Se envio con exito`,
        duration: "2000",
        position: "center",
        style: {
          background: "rgb(0, 90, 0)",
        }
    }).showToast();
})

//Se obtiene los datos ingresados en forma de Objetos
function agregar (e) {
    e.preventDefault ();

    const formData = new FormData (e.target);
        
    const formDataObjeto = {};
    formData.forEach( (value , key ) => (formDataObjeto[key] = value) );
    
    console.log(formDataObjeto);  
    localStorage.setItem("datos", JSON.stringify(formDataObjeto))
};


