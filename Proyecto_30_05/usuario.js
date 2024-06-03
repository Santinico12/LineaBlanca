document.addEventListener('DOMContentLoaded', () => {
    const logoutButton = document.getElementById('logout');

    // Show user-info section by default
    showSection('user-info');

    logoutButton.addEventListener('click', () => {
        alert('Sesión cerrada');
        // Aquí puedes agregar la lógica para cerrar la sesión del usuario
    });
});

function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

function showEditForm() {
    document.querySelector('.user-details').style.display = 'none';
    document.getElementById('edit-form').style.display = 'block';
}

function cancelEdit() {
    document.querySelector('.user-details').style.display = 'block';
    document.getElementById('edit-form').style.display = 'none';
}

function saveProfile(event) {
    event.preventDefault();

    // Obtener los valores del formulario
    const firstName = document.getElementById('edit-first-name').value;
    const lastName = document.getElementById('edit-last-name').value;
    const email = document.getElementById('edit-email').value;
    const documentValue = document.getElementById('edit-document').value;
    const gender = document.getElementById('edit-gender').value;
    const birthdate = document.getElementById('edit-birthdate').value;
    const phone = document.getElementById('edit-phone').value;

    // Actualizar la información mostrada en el perfil
    document.getElementById('first-name').textContent = firstName;
    document.getElementById('last-name').textContent = lastName;
    document.getElementById('email').textContent = email;
    document.getElementById('document').textContent = documentValue;
    document.getElementById('gender').textContent = gender;
    document.getElementById('birthdate').textContent = birthdate;
    document.getElementById('phone').textContent = phone;

    // Ocultar el formulario de edición y mostrar los detalles del usuario
    document.querySelector('.user-details').style.display = 'block';
    document.getElementById('edit-form').style.display = 'none';
}





// Agregamos una función para mostrar la sección de pedidos
function showOrders() {
    const orders = [
        { id: 1, product: 'Lavadora', date: '2022-01-01' },
        { id: 2, product: 'Refrigerador', date: '2022-01-15' },
        { id: 3, product: 'Microondas', date: '2022-02-01' },
        { id: 4, product: 'Televisor', date: '2022-03-05' }, 
        { id: 5, product: 'Nevera', date: '2022-04-10' }, // Pedido extra
      ];
      
      function showThreeOrders(orders) {
        const orderList = document.getElementById('order-list');
        orderList.innerHTML = ''; // Limpiamos la lista
      
        for (let i = 0; i < Math.min(4, orders.length); i++) {
          const order = orders[i];
          const listItem = document.createElement('li');
          listItem.innerHTML = `
            <div class="order-item">
              <h3>Pedido #${order.id} - ${order.product}</h3>
              <p>Fecha: ${order.date}</p>
              <button class="btn-details" onclick="showOrderDetails(${order.id})">Ver detalles</button>
            </div>
          `;
          orderList.appendChild(listItem);
        }
      }
      
      showThreeOrders(orders);
  }
  
  // Agregamos una función para mostrar los detalles del pedido
  function showOrderDetails(orderId) {
    // Aquí puedes agregar la lógica para obtener los detalles del pedido seleccionado
    // Por ejemplo, puedes hacer una solicitud AJAX a un servidor para obtener los detalles del pedido
    const orderDetails = orders.find(order => order.id === orderId);
    alert(`Detalles del pedido #${orderId}: ${orderDetails.details}`);
  }
  
  // Modificamos la función showSection para que también muestre la sección de pedidos
  function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
      section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
    
    // Si se muestra la sección de pedidos, llamamos a la función showOrders
    if (sectionId === 'user-orders') {
      showOrders();
    }
  }
