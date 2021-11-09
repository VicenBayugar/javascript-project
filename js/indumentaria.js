$(() => {

const remera = new Tienda(7, "Remera Mujer Como Quieres Berkeley", 2190, 10, "remera.webp");
const short = new Tienda(8, "Short Mujer Como Quieres Den Kelsey", 4890, 10, "short.webp");
const campera = new Tienda(9, "Campera Topper Br Puffer Hombre Negro", 7799, 10, "campera.webp");
const buzo = new Tienda(10, "Buzo Topper Oversize", 4099, 10, "buzo.webp");

function obtenerCotizacionDolar(){
  let dolarBlue;
  const URLGET = "https://www.dolarsi.com/api/api.php?type=valoresprincipales";
  $.get(URLGET, function (resultado, estado){
    if(estado == "success"){
      let divisas = resultado;
      dolarBlue = parseFloat(divisas[1].casa.venta);

  indumentaria.push(remera, campera, buzo, short);
  
  for(const producto of indumentaria){
  $("#indumentaria").append(`<div class="col">
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