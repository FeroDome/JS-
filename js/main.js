
//const productos = [
//        { nombre: "Cerveza", precio: 200 },
//    { nombre: "Mani", precio: 50 },
//    { nombre: "Fernet", precio: 700 },
//    { nombre: "Coca-Cola", precio: 300 },
//];

//let carrito = [];

//let seleccion = prompt("Hola, necesitas algo para la picada si o no")

//while (seleccion != "si" && seleccion != "no") {
//    alert("Por Favor Ingrese si o no")
//    seleccion = prompt("Hola Desea Comprar algo si o no")
//}

//if (seleccion == "si") {
//    alert("Te mostramos nuestros productos")
//    //envia a pagina de productos//
//    let todosLosProductos = productos.map((productos) => productos.nombre + " " + productos.precio + "$");
//    alert(todosLosProductos)
//
//    } else if (seleccion == "no") {
//        alert("Gracias Por Visitarnos, hasta la proxima")

//}
//while (seleccion != "no") {
//    let producto = prompt("Agregar producto al carrito")
//    let precio = 0

//if (producto == "Cerveza" || producto == "Mani" || producto == "Fernet" || producto == "Coca-Cola") {
//        switch (producto) {
//            case "Cerveza":
//                precio = 200

//                break;

//            case "Mani":
//                precio = 50

//                break;
//            case "Fernet":
//                precio = 700

//                break;

//            case "Coca-Cola":
//                precio = 300

//                break;

//            default:
//                break;
//        }

//        let unidades = parseInt(prompt("Cuantas Unidades Necesitas?"))

//        carrito.push({ producto, unidades, precio })
//        console.log(carrito)


//    } else {
//        alert("No Tenemos Ese Producto")

//    }
//    seleccion = prompt("Desea Agregar otro Producto?")
//    while (seleccion === "no") {
//        alert("Gracias Por tu Compra, hasta la Proxima")
//        carrito.forEach((carritoFinal) => {
//            console.log (`producto: ${ carritoFinal.producto }, unidades: ${ carritoFinal.unidades }, Total a Pagar ${ carritoFinal.precio * carritoFinal.unidades}`)
//        }
//        )
//        break;

//}

//}


const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const cantidadCarrito = document.getElementById("cantidadCarrito");




let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

productos.forEach((product) => {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
    <img src="${product.img}">
    <h3>${product.nombre}</h3>
    <p class:"price">${product.precio}</p>
    `;

    shopContent.append(content);

    let comprar = document.createElement("button")
    comprar.innerText = "Llena tu carrito";
    content.className = "comprar";

    content.append(comprar);

    comprar.addEventListener("click", () => {

    const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);
    if (repeat){
        carrito.map((prod)=> {
            if(prod.id === product.id){
                prod.cantidad++;
            }
        });
    }else {

    
        carrito.push({
            id: product.id,
            img: product.img,
            nombre: product.nombre,
            precio: product.precio,
            cantidad: product.cantidad,
        });
    }
        console.log(carrito)
        carritoCounter();
        saveLocal();
    });
    
    
    verCarrito.addEventListener("click", () => {
        console.log("Tu Carrito")
    });
    
    
    
});
const saveLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));

}








