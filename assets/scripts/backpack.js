function displayCart() {
	if (localStorage.getItem("backpack")) {
		const cart = JSON.parse(localStorage.getItem("backpack")).post;
		console.log(cart.length)
		const cartItemsHtml = cart.map((item, index) =>
		`<div class='cart-item'>
			<div class='mochila0'></div>
				<div class='row-img mochila1'>
					<img class='rowimg' src=${item.image.url}>
				</div>
				<p style='font-size:12px;' class='mochila2'>${item.image.alt}</p>
				<h2 style='font-size: 12px;' class='mochila3'>MXN$ ${item.price}.00</h2>
				<i class='fa-solid fa-trash mochila4' onclick='delElement(${index})'></i>
			</div>
		`).join('');
		document.querySelector(".cart-item").innerHTML = cartItemsHtml;
		let total = 0;
		for (let i = 0; i < JSON.parse(localStorage.getItem("backpack")).reservations.length; i++) {
			total += JSON.parse(localStorage.getItem("backpack")).reservations[i] * cart[i].price;
		}
		document.getElementById("total").innerHTML = `<span>MXN$ ${total}.00</span><a class="col-md" href="./reservation-form.html"><span class="btn boton m-2">Continuar</span></a>`;
	} else{
		console.log("asd")
		document.querySelector(".cart-item").innerHTML = "Tu mochila está vacía";
	}
	
	//<p style='font-size:12px;'>${cart.reservations[index]}</p>
}

if (document.referrer.slice(-21, -5) === "reservation-form") {
	document.querySelector(".progress-bar").style.animation = "1s forwards ease-out decrease-one-third";
}

displayCart();

function delElement(index) {
	const cart = JSON.parse(localStorage.getItem("backpack")).post.splice(index, 1);
	const reservations = JSON.parse(localStorage.getItem("backpack")).reservations.splice(index, 1);
	const json = JSON.stringify({
    "reservations": reservations,
    "user": {
      "fullName": "name",
      "email": "email",
      "telephone": "telephone"
    },
    "post": cart
  });
  localStorage.setItem("backpack", json);
	displayCart();
}
