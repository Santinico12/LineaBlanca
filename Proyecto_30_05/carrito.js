document.addEventListener('DOMContentLoaded', () => {
    const removeButtons = document.querySelectorAll('.remove-item');
    const quantityInputs = document.querySelectorAll('.cart-details input[type="number"]');

    const updateTotal = () => {
        let total = 0;
        document.querySelectorAll('.cart-item').forEach(item => {
            const price = parseFloat(item.querySelector('.cart-details p:nth-child(2)').textContent.replace('Precio: $', ''));
            const quantity = parseInt(item.querySelector('.cart-details input[type="number"]').value);
            total += price * quantity;
        });
        document.querySelector('.cart-summary h2').textContent = `Total: $${total.toFixed(2)}`;
    };

    removeButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.closest('.cart-item').remove();
            updateTotal();
        });
    });

    quantityInputs.forEach(input => {
        input.addEventListener('input', updateTotal);
    });

    updateTotal();
});
