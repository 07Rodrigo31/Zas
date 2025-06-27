// Carrito de compras simple
document.addEventListener('DOMContentLoaded', () => {
    let cart = {};

    function updateCartCount() {
        const count = Object.values(cart).reduce((a, b) => a + b, 0);
        document.getElementById('cart-count').textContent = count;
    }

    function updateCartSummary() {
        const summary = document.getElementById('cart-summary');
        if (Object.keys(cart).length === 0) {
            summary.textContent = "Tu carrito está vacío.";
            return;
        }
        let html = '<ul class="list-group mb-3">';
        for (const [product, qty] of Object.entries(cart)) {
            html += `<li class="list-group-item d-flex justify-content-between align-items-center">
                        ${product}
                        <span class="badge bg-primary rounded-pill">${qty}</span>
                     </li>`;
        }
        html += '</ul>';
        summary.innerHTML = html;
    }

    document.querySelectorAll('.buy-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const product = this.getAttribute('data-product');
            cart[product] = (cart[product] || 0) + 1;
            updateCartCount();
        });
    });

    document.getElementById('cart-btn').addEventListener('click', updateCartSummary);

    document.getElementById('checkout-btn').addEventListener('click', function() {
        alert('¡Gracias por tu compra!');
        cart = {};
        updateCartCount();
        updateCartSummary();
    });
});