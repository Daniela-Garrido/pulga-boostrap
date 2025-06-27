const formulario = document.querySelector('#fomulario');

formulario.addEventListener('submit', envioForm);

function limpiarFomulario() {

    const nombre = document.querySelector('#idNombre').value = "";
    const email = document.querySelector('#idEmail').value = "";
    const mensaje = document.querySelector('#idMensaje').value = "";

}

function validarFormulario(nombre, email, mensaje){
    if(nombre == "" || email == "" || mensaje == "") {
        // Notificación con Toastify
        Toastify({
            text: "Debes rellenar todos los campos",
            duration: 3000,  
            close: true,     
            gravity: "top",  
            position: "right", 
            backgroundColor: "linear-gradient(to right,rgb(176, 0, 9),rgb(201, 61, 131))", 
            stopOnFocus: true, 
        }).showToast();
        return false;
    }
    return true;
};


function envioForm(e){
    e.preventDefault();
    
    const nombre = document.querySelector('#idNombre').value.trim();
    const email = document.querySelector('#idEmail').value.trim();
    const mensaje = document.querySelector('#idMensaje').value.trim();
    
    if(!validarFormulario(nombre, email, mensaje)){
        return;
    };

    console.log(`'${nombre}', ${email}, ${mensaje}`);

    // Notificación con Toastify
    Toastify({
        text: `Gracias, ${nombre}, formulario enviado correctamente!`,
        duration: 3000,  
        close: true,     
        gravity: "top",  
        position: "right", 
        backgroundColor: "linear-gradient(to right,rgb(38, 0, 176),rgb(103, 61, 201))", 
        stopOnFocus: true, 
    }).showToast();

    // Limpiar formulario luego de enviar
    limpiarFomulario();
}

envioForm();