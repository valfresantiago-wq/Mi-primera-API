// Mensaje en consola
console.log('App cargada correctamente');

// Esperar a que el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    const boton = document.getElementById('miBoton');
    
    if (boton) {
        boton.addEventListener('click', function() {
            alert('¡Botón clickeado!');
        });
    }
});
