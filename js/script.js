/* function envioFormulario(){
    alert("¡Formulario enviado correctamente!")
}

function cambiarColor(){
 
    let colorFondo = aplicarColorAleatorio();
    console.log(colorFondo)
    document.getElementById('sectionForm').style.background = colorFondo;

}

function restaurarColor() {
    document.getElementById('sectionForm').style.background = 'brown'
}

function aplicarColorAleatorio() {
    // Generar un color aleatorio en formato hexadecimal
    const colorAleatorio = Math.floor(Math.random()*16777215).toString(16);
    
    // Asegurarse de que el color tenga 6 dígitos
    const colorHex = "#" + ("000000" + colorAleatorio).slice(-6);
    
    // Aplicar el color al fondo del contenedor
    document.getElementById('sectionForm').style.background = colorHex;
}
const captura = document.getElementById ('inputNombre');

    captura.addEventListener('input',(e)=>{
        console.log(e.target.value);
    })

    document.addEventListener('DOMContentLoaded', function() {
        var imagenes = document.querySelectorAll('.imagen');

        imagenes.forEach(function(imagen) {
            imagen.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.5)';
            });

            imagen.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
            });
        });
    });


        document.addEventListener('DOMContentLoaded', function() {
        var imagenes = document.querySelectorAll('.imagen');

        imagenes.forEach(function(imagen) {
            imagen.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.5)';
                this.style.position = 'relative';
                this.style.zIndex = '10';
            });

            imagen.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
                this.style.zIndex = '1';
            });
        });
    });

 */

/* J Q U E R Y */

$(document).ready(function(){
    $('#form1').on('submit', function(e){
        e.preventDefault();
        Swal.fire({
            title: '¡Enviado!',
            text: '¡Formulario enviado correctamente!',
            icon: 'success',
            confirmButtonText: 'Aceptar'
        });
    })


    $('#sectionForm').on('mouseover', function(e){
        let colorFondo = aplicarColorAleatorio();
        $(this).css('background', colorFondo);

    }) 

    $('#sectionForm').on('mouseout', function(e){
        $(this).css('background', 'brown');
    })

    $('#inputNombre').on('input', function(e) {
        console.log(e.target.value);
    });


    $('.imagen').on('mouseenter', function() {
        $(this).css({
            'transition': 'transform 1.5s ease, z-index 0.5s ease',
            'transform': 'scale(1.5)',
            'position': 'relative',
            'z-index': '10'
        });
    });

    $('.imagen').on('mouseleave', function() {
        $(this).css({
            'transition': 'transform 1.5s ease, z-index 0.5s ease',
            'transform': 'scale(1)',
            'z-index': '1'
        });
    });
})


function aplicarColorAleatorio() {
    // Generar un color aleatorio en formato hexadecimal
    const colorAleatorio = Math.floor(Math.random()*16777215).toString(16);
    
    // Asegurarse de que el color tenga 6 dígitos
    const colorHex = "#" + ("000000" + colorAleatorio).slice(-6);
    
    // Aplicar el color al fondo del contenedor
    document.getElementById('sectionForm').style.background = colorHex;
}