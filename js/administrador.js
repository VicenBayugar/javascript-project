// Guardo en constantes los elementos del HTML que voy a llamar
const login = document.getElementById("login");
const formAgregarP = document.getElementById("formAgregarP");
const inputUsuario = document.getElementById("usuario");
const inputContraseña = document.getElementById("contraseña");
const inputID = document.getElementById("agregarID");
const inputNombre = document.getElementById("agregarNombre");
const inputPrecio = document.getElementById("agregarPrecio");
const inputStock = document.getElementById("agregarStock");
const inputImagen = document.getElementById("agregarImagen");
const selectCategoria = document.getElementById("selectCategoria");

// Determino qué va a ser visible ni bien cargue la página
formAgregarP.style.display = "none";
login.style.display = "block";

// Usuario y contraseña del administrador de la web
const usuario = "administrador";
const contraseña = "1234";

// Agrego al botón "ingresar" el evento para logearse, corroborando si usuario y contraseña son correctos
$("#ingresar").on('click', (e) =>{
    e.preventDefault();
    if(inputUsuario.value == usuario && inputContraseña.value == contraseña){
        $("#login").fadeOut();
        $("#formAgregarP").delay(900)
        .fadeIn();
    }else{
        swal({title: "Usuario o contraseña incorrectos",
            icon: "error",
            timer: 1500});
    }
})

// Al hacer click en botón "agregar", toma los valores de los inputs y pushea un nuevo producto a la página en su categoría correspondiente
$("#agregar").on('click', (e) =>{
    e.preventDefault();
    let idProducto = parseInt(inputID.value);
    let nombreProducto = inputNombre.value;
    let precioProducto = parseInt(inputPrecio.value);
    let stockProducto = parseInt(inputStock.value);
    let imagenProducto = inputImagen.files[0].name;
    let categoriaProducto = selectCategoria.value;
    let nuevoProducto = new Tienda(idProducto, nombreProducto, precioProducto, stockProducto, imagenProducto);
    switch (categoriaProducto){
        case "tecnologia":
            tecnologia.push(nuevoProducto);
            localStorage.setItem('tecnologia', JSON.stringify(tecnologia));
            inputID.value = "";
            inputNombre.value = "";
            inputPrecio.value = "";
            inputStock.value = "";
            inputImagen.value = "";
            selectCategoria.value = "";
            break;
        case "indumentaria":
            indumentaria.push(nuevoProducto);
            localStorage.setItem('indumentaria', JSON.stringify(indumentaria));
            inputID.value = "";
            inputNombre.value = "";
            inputPrecio.value = "";
            inputStock.value = "";
            inputImagen.value = "";
            selectCategoria.value = "";
            break;
        case "hogar":
            hogar.push(nuevoProducto);
            localStorage.setItem('hogar', JSON.stringify(hogar));
            inputID.value = "";
            inputNombre.value = "";
            inputPrecio.value = "";
            inputStock.value = "";
            inputImagen.value = "";
            selectCategoria.value = "";
            break;
        case "electrodomesticos":
            electrodomesticos.push(nuevoProducto);
            localStorage.setItem('electrodomesticos', JSON.stringify(electrodomesticos));
            inputID.value = "";
            inputNombre.value = "";
            inputPrecio.value = "";
            inputStock.value = "";
            inputImagen.value = "";
            selectCategoria.value = "";
        break;
    }
    swal({
        title: "Producto añadido!",
        icon: "success",
        timer: 1500
      });
})