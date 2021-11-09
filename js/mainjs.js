const tienda = [{nombre: "IPHONE 12", precio: 200000, id:1, stock: 20,},
{nombre: "SAMSUNG S21", precio: 150000, id:2, stock: 50,},
{nombre: "HP 250", precio: 155000, id:3, stock: 20,},
{nombre: "DELL INSPIRON", precio: 100000, id:4, stock: 10,},
{nombre: "CAMPERA INFLABLE", precio: 4300, id:5, stock: 12,},
{nombre: "ZAPATILLAS JAGUAR", precio: 2490, id:6, stock: 18,},
]

class ProductoAgregadoACarrito {
    constructor(producto, cantidad) {
        this.nombre = producto.nombre;
        this.precio = producto.precio;
        this.id = producto.id;
        this.cantidad = cantidad;
        this.total = producto.precio * cantidad;
    }   
}

let productoElegido;
let cantidadElegida;
let productoSeleccionado;
let elegirNuevoProducto;
let totalCarrito = 0;
const carrito = [];

let agregarAlCarrito = document.getElementsByTagName("agregarAlCarrito");
//agregarAlCarrito.onclick = ()=>

function elegirProducto() {      
    consultarStock(productoElegido, cantidadElegida);  
}

function comprar () {    
       let agregar = prompt(`¿Desea agregar el producto al carrito? 
- SI
- NO`)
       if (agregar.toUpperCase() == "SI") { 
           productoSeleccionado.stock = productoSeleccionado.stock - cantidadElegida;   
           let producto = new ProductoAgregadoACarrito(productoSeleccionado, cantidadElegida)           
           carrito.push(producto);
           elegirNuevoProducto = prompt(`¿Quiere seleccionar otro producto? 
- SI 
- NO`)        
       } else {
           elegirNuevoProducto = prompt(`¿Quiere seleccionar otro producto?
- SI 
- NO`)
       } 
    }

function consultarStock (numeroProducto, cantidad) {
    productoSeleccionado = tienda.find((producto) => producto.id == numeroProducto)    
    if(productoSeleccionado){
         if (productoSeleccionado.stock >= cantidad) {
            comprar();
            }else{
            alert(`El producto no cuenta con disponibilidad`)
            elegirNuevoProducto = prompt(`¿Quiere seleccionar otro producto?
- SI 
- NO`)
            }            
    }else{
        alert(`El producto seleccionado no existe`)
        elegirNuevoProducto = prompt(`¿Quiere seleccionar otro producto?
- SI 
- NO`)
    }     
}

function verCarrito() {
    let padre = document.getElementById("carrito-body");
    for (let i = 0 ; i < carrito.length; i++){
        let contenedor = document.createElement("div");
        contenedor.innerHTML = `<p>Producto elegido: ${carrito[i].nombre}<p> 
<p>Cantidad: ${carrito[i].cantidad}<p>`;
        totalCarrito = totalCarrito + carrito[i].total;
        padre.appendChild(contenedor);
    }
        let contenedor2 = document.createElement("div");
        contenedor2.innerHTML = `<p>Total de compra: $${totalCarrito}<p>
<p>IVA: $${Math.round((totalCarrito * 0.21))}<p>
<p>Precio a pagar en efectivo: $${Math.round((totalCarrito * 1.21))}<p>
<p>12 cuotas sin interés de: $${Math.round(((totalCarrito * 1.21) / 12))}<p>`;
        padre.appendChild(contenedor2);    
}
/*
elegirProducto();
while(elegirNuevoProducto.toUpperCase() == "SI") {
    elegirProducto();
}
verCarrito();
*/