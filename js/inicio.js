$(() => { // Uso el método ready para detectar cuando el DOM está cargado y efectuar cambios inmediatos sobre la estructura HTML, sin errores

// Función donde llamo a la api del dólar para obtener la cotización del día y luego renderizar los productos.
// Aclaración: Hago llamada a la api para obtener la cotización del dólar en cada página, ya que al ser una promesa, no lo puedo guardar en una variable y reutilizar
function obtenerCotizacionDolar(){
  let dolarBlue;
  const URLGET = "https://www.dolarsi.com/api/api.php?type=valoresprincipales";
  $.get(URLGET, function (resultado, estado){
    if(estado == "success"){
      let divisas = resultado;
      dolarBlue = parseFloat(divisas[1].casa.venta);

  // Pusheo los productos al array de productos de esta página
  tienda.push(airePhilco, smartTVTedge, tabletSamsungA7, xiaomiRedmiNote10);
  
  // Con este for of renderizo los productos en la estructura HTML 
  for(const producto of tienda){
  $("#ofertas").append(`<div class="col">
  <div class="card shadow">
      <img src="img/${producto.img}" class="card-img-top pt-2" alt="#">
      <div class="card-body">
        <p class="small text-decoration-line-through">$${producto.precio}</p>
        <h5 class="card-title">ARS $${descuento(producto)} / 
        USD $${parseInt(producto.precio/dolarBlue)}</h5>
        <h6 class="card-text">${producto.nombre}</h6>
        <p class="small">Cantidad disponible: ${producto.stock}</p>
      </div>
      <div class="d-grid gap-2 col-9 mx-auto mb-3">
        <button type="button" data-bs-toggle="offcanvas" data-bs-target="#resumenCarrito" class="btn btn-outline-primary" id="${producto.id}">Agregar al carrito</button>
      </div>
    </div>
  </div>
  </div>`);
  document.getElementById(`${producto.id}`).addEventListener('click', () => agregarAlCarrito(producto))
  }
  
  }
  })
}
obtenerCotizacionDolar();

// Este if corrobora si hay productos en carrito guardados en LocalStorage
if(carrito != []){	
    for(const producto of carrito){
      comprar(producto);
      }
    }

});