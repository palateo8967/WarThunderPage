// Seleccionamos el formulario
const form = document.querySelector("form");

// Agregamos un manejador de eventos para el envío del formulario
form.addEventListener("submit", (e) => {
    e.preventDefault(); // Previene el envío del formulario

    // Mostrar la alerta de SweetAlert2
    Swal.fire({
        title: 'Formulario Enviado',
        text: 'Gracias por ponerte en contacto con nosotros.',
        icon: 'success',
        confirmButtonText: 'Aceptar'
    });

    // Aquí puedes añadir más lógica si deseas procesar el formulario o limpiar campos
    form.reset(); // Esto es opcional, si quieres limpiar los campos
});
