function imprimir() {
  window.print();
}

function displayProducts(purchase) {
  
  let total = 0;
  document.querySelector(".user-info").innerHTML = `
                <p>${purchase.user.fullName}</p>
                <p>${purchase.user.email}</p>
    `;
  console.log(purchase.reservations.length)
  for (let i = 0; i < purchase.reservations.length; i++) {
    document.querySelector(".posts-info").innerHTML += `
    <div>
    <p> ${purchase.post[i].image.alt}</p>
    <p> ${purchase.post[i].departureDate}</p>
    <p> ${purchase.post[i].returnDate}</p>
    <p> ${purchase.post[i].price}.00MXN</p>
    <p>Cantidad ${purchase.reservations[i]}</p>
    </div>
`;

    total += purchase.post[i].price;
  }
  document.querySelector(".total").innerHTML = `
<p>MXN$ ${total}.00</p>
`;
localStorage.removeItem("backpack");
}

displayProducts(JSON.parse(localStorage.getItem("backpack")));