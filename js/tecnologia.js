$(() => {

const joystickPlay = new Tienda(5, "Joystick inalámbrico Sony PlayStation Dualshock 3 blanco", 4000, 10, "joystick.webp");
const notebookHP = new Tienda(6, "Notebook HP 16-A0061LA negra, Intel Core i5 8GB de RAM 512GB SSD, Nvidia GeForce GTX 1650", 169999, 10, "notebookHP.webp");
tabletSamsungA7.precio = 25999; // Vuelvo a establecer el precio inicial porque si no se vuelve a aplicar el descuento (este producto también está en la página principal)
xiaomiRedmiNote10.precio = 49999;

function obtenerCotizacionDolar(){
  let dolarBlue;
  const URLGET = "https://www.dolarsi.com/api/api.php?type=valoresprincipales";
  $.get(URLGET, function (resultado, estado){
    if(estado == "success"){
      let divisas = resultado;
      dolarBlue = parseFloat(divisas[1].casa.venta);

  tecnologia.push(tabletSamsungA7,xiaomiRedmiNote10, joystickPlay, notebookHP);
  
  for(const producto of tecnologia){
  $("#tecnologia").append(`<div class="col">
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