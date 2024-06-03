document.getElementById('btnNuevo').addEventListener('click', function() {
    const producto = {
        id_producto: generateId(),
        nombre: '',
        sku: '',
        descripcion: '',
        precio: 0,
        id_categoria: '',
        id_marca: '',
        caracteristicas: [],
        imagenes: [],
        disponible: 0,
        id_provedor: ''
    };
    editProducto(producto);
});

function editProducto(producto) {
    // Muestra el formulario de edición
}

function generateId() {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

function loadProductos() {
    fetch('productos.json')
        .then(response => response.json())
        .then(productos => {
            const tbody = document.getElementById('tblProductos').getElementsByTagName('tbody')[0];
            while (tbody.firstChild) {
                tbody.removeChild(tbody.firstChild);
            }
            productos.forEach(producto => {
                const tr = document.createElement('tr');
                tr.dataset.id = producto.id_producto;
                tr.innerHTML = `
                    <td>${producto.nombre}</td>
                    <td>${producto.sku}</td>
                    <td>${producto.precio}</td>
                    <td>
                        <button class="btnEditar">Editar</button>
                        <button class="btnEliminar">Eliminar</button>
                    </td>
                `;
                tbody.appendChild(tr);
                tr.querySelector('.btnEditar').addEventListener('click', function() {
                    editProducto(producto);
                });
                tr.querySelector('.btnEliminar').addEventListener('click', function() {
                    deleteProducto(producto.id_producto);
                });
            });
        });
}

function saveProducto(producto) {
    fetch('productos.json', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(producto)
    })
    .then(response => response.json())
    .then(result => {
        loadProductos();
    });
}