
const productos = [
    {
        "Id": 1,
        "Nombre": "Nike Signal",
        "Precio": 100,
    },
    {
        "Id": 2,
        "Nombre": "Air-Max 97",
        "Precio": 110,
    },
    {
        "Id": 3,
        "Nombre": "Jordan Legacy 11",
        "Precio": 200,
    },
    {
        "Id": 4,
        "Nombre": "Adidas Ozelia",
        "Precio": 111,
    },
    {
        "Id": 5,
        "Nombre": "Adidas Superstar",
        "Precio": 120,
    },
    {
        "Id": 6,
        "Nombre": "Converse Chuck Taylor",
        "Precio": 90,
    },
    {
        "Id": 7,
        "Nombre": "Converse Rival",
        "Precio": 108,
    },
    {
        "Id": 8,
        "Nombre": "Puma X-Ray 2",
        "Precio": 103,
    },
    {
        "Id": 9,
        "Nombre": "Puma Ferrari",
        "Precio": 110,
    },
    {
        "Id": 10,
        "Nombre": "Vans Ultra Range",
        "Precio": 121,
    },
]

let carrito = []


const agregarProductoCarrito = (id) => {
    let productoEncontrado = productos.find(producto => producto.Id === id)
    let productoCarrito = carrito.find(producto => producto.Id === id)
    if (productoCarrito === undefined) {
        alert("El producto " + productoEncontrado.Nombre + " fue agregado a su carrito")
        carrito.push({
            Cantidad: 1,
            ...productoEncontrado
        })
    } else {
        const prodIndex = carrito.findIndex((prod => prod.Id === id))
        carrito[prodIndex].Cantidad = carrito[prodIndex].Cantidad + 1
        carrito[prodIndex].Precio = carrito[prodIndex].Precio + productoEncontrado.Precio
    }
}


let nombre = prompt("Ingrese su nombre")

const saludar = (nombre) => {
    alert("Bienvenido a Sneaker-Val: " + nombre)
}
saludar(nombre)

while (nombre !== "salir") {
    let idProducto = Number(prompt("Ingrese el numero del producto que desea comprar:" + "\n" + productos.map((producto) => ` \n ${producto.Id} - ${producto.Nombre}`)))
    agregarProductoCarrito(idProducto)
    let opcion = prompt("Si desea seguir comprando, ingrese: si" + "\n" + "Para finalizar ingrese: salir")
    if (opcion === "si") {
        idProducto = Number(prompt("Ingrese el numero producto que desea comprar:" + "\n" + productos.map((producto) => ` \n ${producto.Id} - ${producto.Nombre}`)))
        agregarProductoCarrito(idProducto)
        opcion = prompt("Si desea seguir comprando, ingrese: si" + "\n" + "Para finalizar, ingrese: salir")
    }
    if (opcion === "salir") {
        alert("Gracias por su compra. Su recibo es: " + carrito.map((producto) => producto.Cantidad > 3
            ? ` \n Cantidad: ${producto.Cantidad} - Nombre: ${producto.Nombre} - Precio: $${(producto.Precio - producto.Precio * 0.3)}`
            : ` \n Cantidad: ${producto.Cantidad} - Nombre: ${producto.Nombre} - Precio: $${producto.Precio}`)
            + "\n" +
            "Precio Total: $" + carrito.reduce((acc, { Precio }) => acc + Precio, 0))
        break
    }
} 
