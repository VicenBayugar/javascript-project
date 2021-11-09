$(() => {

const placard = new Tienda(11, "Placard Vestidor Moderno 1,80", 19737, 10, "placard.webp");
const grifo = new Tienda(12, "Grifo de cocina monocomando cromo", 9420, 10, "grifo.webp");
const juegomesasillas = new Tienda(13, "Juego De Comedor Mesa Redonda 90cm + 4 Sillas Eames", 35999, 10, "juegomesasillas.webp");
const sillon = new Tienda(14, "Sillon Trento One De 3 Cuerpos 1,80 M Chenille Premium", 42999, 10, "sillon.webp");

function obtenerCotizacionDolar(){
  let dolarBlue;
  const URLGET = "https://www.dolarsi.com/api/api.php?type=valoresprincipales";
  $.get(URLGET, function (resultado, estado){
    if(estado == "success"){
      let divisas = resultado;
      dolarBlue = parseFloat(divisas[1].casa.venta);

  hogar.push(placard, grifo, juegomesasillas, sillon);
  
  for(const producto of hogar){
  $("#hogar").append(`<div class="col">
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