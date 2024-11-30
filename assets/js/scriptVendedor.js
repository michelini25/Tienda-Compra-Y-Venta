// Inicialización del cliente de Supabase
const supabaseUrl = 'https://ehbljdkbcaynobckuvrw.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVoYmxqZGtiY2F5bm9iY2t1dnJ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI5MzczMDksImV4cCI6MjA0ODUxMzMwOX0.ct1m0dq0vi2IiVEm1csMAROqArGJvqIUf9O_FNdasc4';
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

// Referencias al DOM
const productForm = document.getElementById("product-form");
const productList = document.getElementById("product-list");
const totalSalesElement = document.getElementById("total-sales");

// Inicialización de productos y ventas simuladas
let sales = 0;

// Función para obtener productos de la base de datos
async function obtenerProductos() {
    const { data: productos, error } = await supabase
        .from('productos')  // Asumiendo que tu tabla se llama 'productos'
        .select('*');

    if (error) {
        console.error("Error al obtener los productos:", error);
        return;
    }

    // Renderizamos los productos obtenidos
    productList.innerHTML = '';
    productos.forEach((product, index) => {
        productList.innerHTML += `
            <div class="product">
                <div>
                    <strong>${product.nombre}</strong>
                    <p>${product.descripcion}</p>
                    <p>Precio: $${product.precio.toFixed(2)}</p>
                    <p>Stock: ${product.stock}</p>
                </div>
                <div class="product-actions">
                    <button class="sell" onclick="venderProducto(${index}, ${product.precio}, ${product.id}, ${product.stock})">Vender</button>
                    <button class="delete" onclick="eliminarProducto(${product.id})">Eliminar</button>
                </div>
            </div>
        `;
    });
}

// Función para agregar un nuevo producto
productForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nombre = document.getElementById("product-name").value;
    const descripcion = document.getElementById("product-description").value;
    const precio = parseFloat(document.getElementById("product-price").value);
    const stock = parseInt(document.getElementById("product-stock").value);

    // Insertar producto en la base de datos
    const { data, error } = await supabase
        .from('productos')  // Asegúrate de que la tabla sea 'productos'
        .insert([{ nombre, descripcion, precio, stock }]);

    if (error) {
        console.error("Error al agregar el producto:", error);
    } else {
        console.log("Producto agregado:", data);
        obtenerProductos(); // Refrescar la lista de productos
    }

    productForm.reset();
});

// Función para vender un producto
async function venderProducto(index, precio, id, stockActual) {
    if (stockActual > 0) {
        // Reducir stock del producto
        const nuevoStock = stockActual - 1;
        const { error } = await supabase
            .from('productos')
            .update({ stock: nuevoStock })
            .eq('id', id);

        if (error) {
            console.error("Error al actualizar el stock:", error);
            return;
        }

        // Actualizar las ventas totales
        sales += precio;
        totalSalesElement.textContent = sales.toFixed(2);
        obtenerProductos(); // Refrescar productos
    } else {
        alert("Stock insuficiente.");
    }
}

// Función para eliminar un producto
async function eliminarProducto(id) {
    const { error } = await supabase
        .from('productos')
        .delete()
        .eq('id', id);

    if (error) {
        console.error("Error al eliminar el producto:", error);
    } else {
        console.log("Producto eliminado");
        obtenerProductos(); // Refrescar la lista de productos
    }
}

// Función para resetear las ventas
function resetSales() {
    sales = 0;
    totalSalesElement.textContent = sales.toFixed(2);
}

// Inicialización de la aplicación
obtenerProductos();
