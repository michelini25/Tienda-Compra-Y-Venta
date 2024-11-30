// Inicialización de productos y ventas simulados
const products = JSON.parse(localStorage.getItem("products")) || [];
const sales = JSON.parse(localStorage.getItem("sales")) || 0;

document.getElementById("logout-button").addEventListener("click", function () {
    // Limpia los datos de sesión en LocalStorage
    localStorage.clear();

    // Redirige al usuario a la página principal
    window.location.href = "index.html"; //  este debe ser el nombre de tu página principal
});
// Referencias al DOM
const productForm = document.getElementById("product-form");
const productList = document.getElementById("product-list");
const totalSalesElement = document.getElementById("total-sales");

// Función para renderizar la lista de productos
function renderProducts() {
    productList.innerHTML = "";
    products.forEach((product, index) => {
        productList.innerHTML += `
            <div class="product">
                <div>
                    <strong>${product.name}</strong>
                    <p>${product.description}</p>
                    <p>Precio: $${product.price.toFixed(2)}</p>
                    <p>Stock: ${product.stock}</p>
                </div>
                <div class="product-actions">
                    <button class="sell" onclick="sellProduct(${index})">Vender</button>
                    <button class="delete" onclick="deleteProduct(${index})">Eliminar</button>
                </div>
            </div>
        `;
    });
}

// Agregar un nuevo producto
productForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("product-name").value;
    const description = document.getElementById("product-description").value;
    const price = parseFloat(document.getElementById("product-price").value);
    const stock = parseInt(document.getElementById("product-stock").value);

    products.push({ name, description, price, stock });
    localStorage.setItem("products", JSON.stringify(products));

    productForm.reset();
    renderProducts();
});

// Vender un producto
function sellProduct(index) {
    if (products[index].stock > 0) {
        products[index].stock -= 1;
        localStorage.setItem("products", JSON.stringify(products));

        const currentSales = parseFloat(localStorage.getItem("sales")) || 0;
        localStorage.setItem("sales", currentSales + products[index].price);

        updateSales();
        renderProducts();
    } else {
        alert("Stock insuficiente.");
    }
}

// Eliminar un producto
function deleteProduct(index) {
    products.splice(index, 1);
    localStorage.setItem("products", JSON.stringify(products));
    renderProducts();
}

// Función para eliminar el total de ventas
function resetSales() {
    localStorage.removeItem("sales");  // Eliminar el total de ventas de localStorage
    updateSales();  // Actualizar la interfaz para reflejar el cambio
}
// Función para actualizar el balance de ventas en el HTML
function updateSales() {
    const sales = parseFloat(localStorage.getItem("sales")) || 0;  // Obtener el total de ventas desde localStorage
    document.getElementById("total-sales").textContent = sales.toFixed(2);  // Actualizar el balance en la interfaz
}

// Inicializar
renderProducts();
updateSales();
