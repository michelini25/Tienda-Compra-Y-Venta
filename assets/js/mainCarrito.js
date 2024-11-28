//Productos
const productos = [
    // Electronica y Tecnologia
    {
        id: "electronica-01",
        titulo: "Audifonos 01",
        imagen: "./assets/img/electronico/audifonos.jpg",
        categoria: {
            nombre: "Electronica",
            id: "electronica"
        },
        precio: 750
    },
    {
        id: "electronica-02",
        titulo: "Laptop 02",
        imagen: "./assets/img/electronico/Laptop.jpg",
        categoria: {
            nombre: "Electronica",
            id: "electronica"
        },
        precio: 6500
    },
    {
        id: "electronica-03",
        titulo: "Telefono 03",
        imagen: "./assets/img/electronico/telefono.jpg",
        categoria: {
            nombre: "Electronica",
            id: "electronica"
        },
        precio: 12300
    },
    //Hogar y Jardin 
    {
        id: "hogar-01",
        titulo: "Escoba 01",
        imagen: "./assets/img/hogar/escoba.jpg",
        categoria: {
            nombre: "Hogar y Jardin",
            id: "hogar"
        },
        precio: 100
    },
    {
        id: "hogar-02",
        titulo: "Maceta 02",
        imagen: "./assets/img/hogar/macetas.jpg",
        categoria: {
            nombre: "Hogar y Jardin",
            id: "hogar"
        },
        precio: 300
    },
    {
        id: "hogar-03",
        titulo: "Silla 03",
        imagen: "./assets/img/hogar/silla.jpg",
        categoria: {
            nombre: "Hogar y Jardin",
            id: "hogar"
        },
        precio: 350
    },
    //Moda y Accesorios
    {
        id: "moda-01",
        titulo: "Bolsa 01",
        imagen: "./assets/img/moda/bolsa.jpg",
        categoria: {
            nombre: "Moda y Accesorios",
            id: "moda"
        },
        precio: 2500
    },
    {
        id: "moda-02",
        titulo: "Botas 02",
        imagen: "./assets/img/moda/botas.jpg",
        categoria: {
            nombre: "Moda y Accesorios",
            id: "moda"
        },
        precio: 4500
    },
    {
        id: "moda-03",
        titulo: "Sudadera 03",
        imagen: "./assets/img/moda/sudadera.jpg",
        categoria: {
            nombre: "Moda y Accesorios",
            id: "moda"
        },
        precio: 500
    },
    //Salud y Belleza
    {
        id: "salud-01",
        titulo: "Balsamo 01",
        imagen: "./assets/img/salud/balsamo.jpg",
        categoria: {
            nombre: "Salud y Belleza",
            id: "salud"
        },
        precio: 60
    },
    {
        id: "salud-02",
        titulo: "Serum 02",
        imagen: "./assets/img/salud/serum.jpg",
        categoria: {
            nombre: "Salud y Belleza",
            id: "salud"
        },
        precio: 150
    },
    {
        id: "salud-03",
        titulo: "Shampoo 03",
        imagen: "./assets/img/salud/shampo.jpg",
        categoria: {
            nombre: "Salud y Belleza",
            id: "salud"
        },
        precio: 75
    },
    //Deportes
    {
        id: "deportes-01",
        titulo: "Balon de Basquet 01",
        imagen: "./assets/img/deportes/balonbasquet.jpg",
        categoria: {
            nombre: "Deportes",
            id: "deportes"
        },
        precio: 250
    },
    {
        id: "deportes-02",
        titulo: "Casco 02",
        imagen: "./assets/img/deportes/casco.jpg",
        categoria: {
            nombre: "Deportes",
            id: "deportes"
        },
        precio: 400
    },
    {
        id: "deportes-03",
        titulo: "Patines 03",
        imagen: "./assets/img/patines.jpg",
        categoria: {
            nombre: "Deportes",
            id: "deportes"
        },
        precio: 1800
    },
    //Mascotas
    {
        id: "mascotas-01",
        titulo: "Cama 01",
        imagen: "./assets/img/mascotas/cama.jpg",
        categoria: {
            nombre: "Mascotas",
            id: "mascotas"
        },
        precio: 550
    },
    {
        id: "mascotas-02",
        titulo: "Collar 02",
        imagen: "./assets/img/mascotas/collar.jpg",
        categoria: {
            nombre: "Mascotas",
            id: "mascotas"
        },
        precio: 100
    },
    {
        id: "mascotas-03",
        titulo: "Correa 03",
        imagen: "./assets/img/mascotas/correa.jpg",
        categoria: {
            nombre: "Mascotas",
            id: "mascotas"
        },
        precio: 150
    },
    //Arte y papeleria
    {
        id: "arte-01",
        titulo: "Engrapadora 01",
        imagen: "./assets/img/papeleria/engrapadora.jpg",
        categoria: {
            nombre: "Arte y papeleria",
            id: "papeleria"
        },
        precio: 50
    },
    {
        id: "arte-02",
        titulo: "Boligrafos 02",
        imagen: "./assets/img/papeleria/cuadernos.jpg",
        categoria: {
            nombre: "Arte y papeleria",
            id: "papeleria"
        },
        precio: 120
    },
    {
        id: "arte-03",
        titulo: "Cuaderno 03",
        imagen: "./assets/img/papeleria/cuadernos.jpg",
        categoria: {
            nombre: "Arte y papeleria",
            id: "papeleria"
        },
        precio: 80
    },
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");

function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>    
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();

}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));

        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos"){
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id );
            cargarProductos(productosBoton);
        }else{
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        } 

    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click",agregarAlCarrito);

    });

}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");


if (productosEnCarritoLS){
    productosEnCarrito =  JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
}else{
    productosEnCarrito = [];

}

function agregarAlCarrito(e) {

    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton );

    if(productosEnCarrito.some(producto => producto.id === idBoton)){
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;

    }else{
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }
    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito(){
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}