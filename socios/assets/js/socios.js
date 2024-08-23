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
document.getElementById('formSocio').addEventListener('submit', function(e) {
    e.preventDefault();

    const nombre = document.getElementById('nombreSocio').value;
    const apellidos = document.getElementById('apellidosSocio').value;
    const email = document.getElementById('emailSocio').value;
    const confirmarEmail = document.getElementById('confirmarEmailSocio').value;
    const telefono = document.getElementById('fonoSocio').value;
    const direccion = document.getElementById('direccionSocio').value;

    if (email !== confirmarEmail) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Los correos electrónicos no coinciden',
        });
        return;
    }

    if (nombre === '' || apellidos === '' || email === '' || telefono === '' || direccion === '') {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Todos los campos son obligatorios',
        });
        return;
    }

    Swal.fire({
        icon: 'success',
        title: '¡Registro Exitoso!',
        text: `Bienvenido, ${nombre} ${apellidos}. Gracias por registrarte.`,
    });

    document.getElementById('formSocio').reset();
});
