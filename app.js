fetch("https://mi-primera-api-zr0v.onrender.com/productos")
    .then(respuesta => respuesta.json())
    .then(productos => {

        const contenedor = document.getElementById("productos");

        productos.forEach(producto => {

            contenedor.innerHTML += `
                <div class="producto">
                    <h2>${producto.nombre}</h2>
                    <p>Precio: $${producto.precio}</p>
                </div>
            `;

        });

    });
