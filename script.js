let cartTotal = 0;

function addToCart(item, price) {
    cartTotal += price;
    document.getElementById('cart-total').innerText = `$ ${cartTotal.toFixed(2)}`;
    alert(`You have added ${item} to your cart. Total: $${cartTotal.toFixed(2)}`);
}

function orderItem(item) {
    alert(`You have ordered a ${item}. Thank you for your order!`);
}
