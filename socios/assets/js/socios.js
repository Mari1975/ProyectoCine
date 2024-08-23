document.getElementById('formSocio').addEventListener('submit', function(e) {
    e.preventDefault();
    const nombre = document.getElementById('nombreSocio').value;
    const email = document.getElementById('emailSocio').value;

    if (nombre === '' || email === '') {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Todos los campos son obligatorios',
        });
    } else {
        Swal.fire({
            icon: 'success',
            title: '¡Registro Exitoso!',
            text: `Bienvenido, ${nombre}. Gracias por registrarte.`,
        });
        document.getElementById('formSocio').reset();
    }
});
