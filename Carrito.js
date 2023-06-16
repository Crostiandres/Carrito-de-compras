//Carrito de la pagina

//Constantes
const contenedorProducto = document.getElementById("carrito");
const vaciarCarrito = document.getElementById("botonVaciarCarrito");
const contadorCarrito = document.getElementById("contadorCarrito");
const precioTotal = document.getElementById("precioTotal");
const botonComprar = document.getElementById ("botonComprar");
const carro = document.getElementById ("carritoDeCompra");

//Array
let compra = [];

//Se guarda los articulos en el localStorage
document.addEventListener("DOMContentLoaded" , () => {
    if (localStorage.getItem("compra")){
        compra = JSON.parse(localStorage.getItem("compra"))
        actualizarCarrito()
    }
})

//boton que simula una compra exitosa
botonComprar.addEventListener ("click", () => {
    Toastify({
        text: `SU COMPRA SE A REALIZADO CON EXITO`,
        duration: "1500",
        position: "center",
        style: {
          background: "rgb(0, 90, 0)",
        }
    }).showToast();
})

//boton que vacia el carrito de compras
vaciarCarrito.addEventListener ("click", () => {
    compra.length = 0
    Toastify({
        text: `SE VACIO EL CARRITO`,
        duration: "1500",
        gravity: "top",
        position: "left",
        style: {
          background: "linear-gradient(to left, rgb(88, 0, 0), rgb(88, 0, 0) , rgb(0, 0, 0))",
        }
    }).showToast();
    actualizarCarrito();

})

//Carrito
let carrito = (productoId) => {
    //Con some busca si existe el articulo dentro del array Compra
    const hay = compra.some ((producto) => producto.id == productoId)
    //Mapea el objeto existente y le suma la cantidad del articulo y lo pushea al array 
    hay ? item = compra.map ((producto) => { producto.id === productoId && producto.cantidad++})
    : item = prod.find ((producto) => {producto.id == productoId && compra.push(producto)})
    actualizarCarrito();  
}

//Elimina el producto seleccionado del carrito
const eliminarProducto = (productoId) => {
    let producto = compra.find((producto) => producto.id === productoId)
    let item = compra.slice(producto)
    compra.splice(item , 1);
    Toastify({
        text: `Se elimino ${producto.nombre} del carrito.`,
        className: "info",
        gravity: "top",
        duration: "1500",
        style: {
          background: "rgb(66, 139, 221)",
          width: "400",
        }
    }).showToast();
    actualizarCarrito();
}

//Al seleccionar el articulo se suma al carrito y se actualiza
const actualizarCarrito = () => {
    contenedorProducto.innerHTML = ""

    compra.forEach( (producto) => {
        let div = document.createElement("div")
        div.innerHTML = `<table class="table row">
                              <th id="cantidad" class="col-2">${producto.cantidad}</th>
                              <td class="col-6">${producto.nombre}</td>
                              <td class="col-5">${producto.precio}</td>
                              <td class="col-1"><button onclick ="eliminarProducto(${producto.id})" class="btn btn-danger">x</button></td>
                         </table>  
        `
        contenedorProducto.append(div)

        localStorage.setItem("compra" , JSON.stringify(compra))
    })

    //Lleva la cantidad de prodcutos seleccionados en el carrito
    contadorCarrito.innerText = compra.length

    //Suma el precio de todos los productos y muestra el total de la suma
    precioTotal.innerText = compra.reduce((acc , producto) => acc + producto.cantidad * producto.precio, 0)
};



     
