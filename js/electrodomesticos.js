$(() => {

const horno = new Tienda(15, "Horno de mesa eléctrico Peabody 45L gris 220V", 25999, 10, "horno.webp");
const pava = new Tienda(16, "Pava eléctrica Liliana color negra 220V 1.7L", 4999, 10, "pava.webp");
airePhilco.precio = 59999;
smartTVTedge.precio = 29999;

function obtenerCotizacionDolar(){
  let dolarBlue;
  const URLGET = "https://www.dolarsi.com/api/api.php?type=valoresprincipales";
  $.get(URLGET, function (resultado, estado){
    if(estado == "success"){
      let divisas = resultado;
      dolarBlue = parseFloat(divisas[1].casa.venta);

  electrodomesticos.push(horno, airePhilco, smartTVTedge, pava);
  
  for(const producto of electrodomesticos){
  $("#electrodomesticos").append(`<div class="col">
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

if(carrito != []){	
    for(const producto of carrito){
      comprar(producto);
      }
    }

});