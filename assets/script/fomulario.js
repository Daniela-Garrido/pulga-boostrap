const formulario = document.querySelector('#fomulario');

formulario.addEventListener('submit', envioForm)

function limpiarFomulario() {

    const nombre = document.querySelector('#idNombre').value = "";
    const email = document.querySelector('#idEmail').value = "";
    const mensaje = document.querySelector('#idMensaje').value = "";

}

function envioForm(e){
    e.preventDefault()

    const nombre = document.querySelector('#idNombre').value;
    const email = document.querySelector('#idEmail').value;
    const mensaje = document.querySelector('#idMensaje').value;

    console.log(`${nombre}, ${email}, ${mensaje}`);

    // Notificación con Toastify
    Toastify({
        text: `Gracias ${nombre}, formulario enviado correctamente!`,
        duration: 3000,  
        close: true,     
        gravity: "top",  
        position: "right", 
        backgroundColor: "linear-gradient(to right,rgb(38, 0, 176),rgb(103, 61, 201))", 
        stopOnFocus: true, 
    }).showToast();

    // Limpiar formulario luego de enviar
    limpiarFomulario()
}

envioForm();