// Función que toma del localStorage el carrito, y calcula el total a pagar
function renderCheckout(){
    let totalCheckout = 0 ;
    for(producto of carrito){
        totalCheckout = totalCheckout + Math.round((producto.precio * producto.cantidad) * 1.21);   
    }
    $("#totalCheckout").append(`Total a pagar: $${totalCheckout}`);
}

renderCheckout();