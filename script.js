let indexActual = 0;

function moverCarrusel(direccion) {
    const track = document.getElementById('track');
    const totalProductos = document.querySelectorAll('.product-slide').length;
    
    // Actualizar el índice dentro de los límites de productos
    indexActual += direccion;
    
    if (indexActual < 0) {
        indexActual = totalProductos - 1; // Va al último si retrocedes desde el primero
    } else if (indexActual >= totalProductos) {
        indexActual = 0; // Regresa al primero si avanzas desde el último
    }
    
    // Mover el carrusel de forma horizontal usando porcentajes
    track.style.transform = `translateX(-${indexActual * 100}%)`;
}
