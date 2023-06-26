let carrito = [];

function agregarCompra(nombre, precio) {

    const producto = {
    nombre: nombre,
    precio: precio
}
carrito.push(producto);
mostrarCarro();
}

function mostrarCarro() {
    const carritoContainer = document.getElementById('carrito');
    carritoContainer.innerHTML= '';

    
}

carrito.forEach(function carritoEach(producto) {

    const productoElemento = document.createElement('div');
    productoElemento.textContent = producto.nombre + ' - $' + producto.precio;



    const eliminarBtn = document.createElement('button');
    eliminarBtn.textContent = 'Eliminar';
    eliminarBtn.addEventListener('click', carritoEach){
        eliminarDelCarrito
    }
    
});

productoElemento.appendChild(eliminarBtn)
carritoContainer.appendChild(productoElemento)