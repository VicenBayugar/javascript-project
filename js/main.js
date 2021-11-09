class Tienda { // Clase constructora de los productos
    constructor(id, nombre, precio, stock, img, cantidad) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.img = img;
        this.cantidad = cantidad || 0;
    }
}

// Creo los productos de la página principal
const airePhilco = new Tienda(1, "Aire acondicionado Philco split frío/calor 2769.2 frigorías negro 220V", 59999, 10, "aireac.webp");
const smartTVTedge = new Tienda(2, "Smart TV Tedge LED HD 32 220V", 29999, 10, "smarttv.webp");
const tabletSamsungA7 = new Tienda(3, "Tablet Samsung Galaxy Tab A7 Lite 32GB gris con 3GB de memoria RAM", 25999, 10, "tablet.webp");
const xiaomiRedmiNote10 = new Tienda(4, "Xiaomi Redmi Note 10 5G Dual SIM 128 GB plata cromada 4 GB RAM", 49999, 10, "xiaomi.webp");

// Creo la constante carrito, donde se van a guardar los productos elegidos en LocalStorage
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let totalCarrito = 0;

// Arrays de productos de cada página
const tienda = JSON.parse(localStorage.getItem("tienda")) || []; // En este array guardo los productos de la página principal
const tecnologia = JSON.parse(localStorage.getItem("tecnologia")) || [];
const indumentaria = JSON.parse(localStorage.getItem("indumentaria")) || [];
const hogar = JSON.parse(localStorage.getItem("hogar")) || [];
const electrodomesticos = JSON.parse(localStorage.getItem("electrodomesticos")) || [];

// Función para aumentar la cantidad de un producto cuando ya está en el carrito
function aumentarCantidad(existeEnCarrito){
  existeEnCarrito.cantidad = existeEnCarrito.cantidad + 1;
}

// Función para hacer la oferta
function descuento(producto){
  producto.precio = Math.round(producto.precio * 0.80);
  return producto.precio;
}

// Función para agregar al carrito. Determina si el producto existe o no en el carrito para no duplicar productos iguales
function agregarAlCarrito(producto){
  let existeEnCarrito = carrito.find(p => p.nombre == producto.nombre);
  if(existeEnCarrito){
    aumentarCantidad(existeEnCarrito);
    totalCarrito = totalCarrito + existeEnCarrito.precio;
    let padre = document.getElementById(`${existeEnCarrito.nombre}`).parentNode;
    let precioProducto = padre.lastChild;
    let nodosHijos = padre.childNodes;
    nodosHijos[4].innerHTML = existeEnCarrito.cantidad;
    precioProducto.innerHTML = `$${existeEnCarrito.precio * existeEnCarrito.cantidad}`;
    localStorage.setItem('carrito', JSON.stringify(carrito));
    verCarrito();
  }else{
  aumentarCantidad(producto);
  carrito.push(producto);
  localStorage.setItem('carrito', JSON.stringify(carrito));
  comprar(producto);
  }
}

// Función de compra. Agrega los productos a la sección del resumen de compra y llama a verCarrito
function comprar(producto){
  let resumenProductos = document.getElementById("resumenProductos");
  let contenedor = document.createElement("div");
        contenedor.className = "row row-cols-3"
        contenedor.innerHTML = `<button type="button" class="col-1 btn-close" aria-label="Close" id="${producto.nombre}"></button>
        <h6 class="col-6">${producto.nombre}</h6>
        <h6 class="col-1">${producto.cantidad}</h6>
        <h6 class="col-4 text-end">$${producto.precio * producto.cantidad}</h6>`;
        totalCarrito = totalCarrito + (producto.precio * producto.cantidad);
        resumenProductos.appendChild(contenedor);
  function eliminarProducto(padre, producto){
    if(producto.cantidad > 1){
      producto.cantidad = producto.cantidad - 1;
      totalCarrito = totalCarrito - producto.precio;
      let precioProducto = padre.lastChild;
      let nodosHijos = padre.childNodes;
      nodosHijos[4].innerHTML = producto.cantidad;
      precioProducto.innerHTML = `$${producto.precio * producto.cantidad}`;
      localStorage.setItem('carrito', JSON.stringify(carrito));
      verCarrito(); 
    }else{
    producto.cantidad = producto.cantidad - 1;
    padre.parentNode.removeChild(padre);
    totalCarrito = totalCarrito - producto.precio;
    let indexProducto = carrito.indexOf(producto);
    carrito.splice(indexProducto, 1);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    verCarrito();
    }
  }
  let padre = document.getElementById(`${producto.nombre}`).parentNode;
  let botonEliminar = document.getElementById(`${producto.nombre}`);
  botonEliminar.addEventListener('click', () => eliminarProducto(padre, producto))
  verCarrito();   
}

// Función que calcula lo que el cliente va a abonar
function verCarrito() {
    let totalCompra = document.getElementById("totalCompra");
    totalCompra.innerText = `$${totalCarrito}`;
    let IVA = document.getElementById("IVA");
    IVA.innerText = `$${Math.round((totalCarrito * 0.21))}`;
    let precioEnEfectivo = document.getElementById("precioEnEfectivo");
    precioEnEfectivo.innerText = `$${Math.round((totalCarrito * 1.21))}`;
    let cuotas = document.getElementById("cuotas");
    cuotas.innerText = `$${Math.round(((totalCarrito * 1.21) / 12))}`;
}