const storedCart = localStorage.getItem("backpack");
const cart = storedCart ? JSON.parse(storedCart) : [];

function displayCart() {
	const cartItemsHtml = cart.map((item, index) =>
		`<div class='cart-item'>
      <div class='row-img'>
        <img class='rowimg' src=${item.image}>
      </div>
      <p style='font-size:12px;'>${item.title}</p>
    	
      <h2 style='font-size: 12px;'>MXN$ ${item.price}.00</h2>
      <i class='fa-solid fa-trash' onclick='delElement(${index})'></i>
    </div>
  `).join('');
//<p style='font-size:12px;'>${item.reservations[index]}</p>
	const total = cart.reduce((acc, item) => acc + item.price, 0);

	document.querySelector(".cart-item").innerHTML = cart.length === 0 ? "Tu mochila está vacía" : cartItemsHtml;
	document.getElementById("total").innerHTML = `<span>MXN$ ${total}.00</span><a class="col-md" href="./reservation-form.html"><span class="btn boton">Continuar</span></a>`;
}

if (document.referrer.slice(-21, -5) === "reservation-form") {
	document.querySelector(".progress-bar").style.animation = "1s forwards ease-out decrease-one-third";
}

displayCart();

function delElement(index) {
	cart.splice(index, 1);
	const json = JSON.stringify(cart);
	localStorage.setItem("backpack", json);
	displayCart();
}
