
const cart = localStorage.getItem("backpack");

function displaycart() {
    const cartItemsHtml = cart.map((item, index) => `
        <div class='cart-item'>
            <div class='row-img'>
                <img class='rowimg' src=${item.image}>
            </div>
            <p style='font-size:12px;'>${item.title}</p>
            <h2 style='font-size: 12px;'>$ ${item.price}.00</h2>
            <i class='fa-solid fa-trash' onclick='delElement(${index})'></i>
        </div>
    `).join('');

    const total = cart.reduce((acc, item) => acc + item.price, 0);

    document.getElementById('cartItem').innerHTML = cart.length === 0 ? "Your cart is empty" : cartItemsHtml;
    document.getElementById("total").innerHTML = `$ ${total}.00`;
}


