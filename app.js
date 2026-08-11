const API_URL = "https://mi-primera-api-zr0v.onrender.com";

document.addEventListener('DOMContentLoaded', function() {
    cargarProductos();

    const boton = document.getElementById('miBoton');
    if (boton) {
        boton.addEventListener('click', function() {
            alert('¡Botón clickeado!');
        });
    }
});

async function cargarProductos() {
    try {
        const respuesta = await fetch(`${API_URL}/productos`);
        const productos = await respuesta.json();

        const contenedor = document.getElementById('contenedor-productos');
        if (contenedor) {
            contenedor.innerHTML = productos.map(p =>
                `<p>📦 ${p.nombre} - $${p.precio}</p>`
            ).join('');
        }
    } catch (error) {
        console.error('Error al cargar productos:', error);
    }
}
