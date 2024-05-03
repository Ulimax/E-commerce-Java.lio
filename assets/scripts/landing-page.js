async function getData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();

    displayProducts(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

function displayProducts(products) {
  const productHtml = products.map(product => `
        <div class='box'>
            <div class='img-box'>
                <img class='images' src=${product.image.url}></img>
            </div>
            <div class='bottom'>
                <p>${product.image.alt}</p>
                <p>${product.departureDate}</p>
                <h2>$${product.price}.00 MXN</h2>
                <button onclick='addtocart(${JSON.stringify(product)})'> Añadir a la mochila</button>
                <button onclick='openModal(${JSON.stringify(product)})'>Más detalles</button>
            </div>
        </div>
    `).join('');
  document.getElementById('root').innerHTML = productHtml;
}

function openModal(product) {

 const modalContent = `
    <div class="modal">
      <div class="modal-content">
        <span class="close" onclick="closeModal()">&times;</span>
        <h2>${product.image.alt}</h2>
        <p> Precio: $${product.price}.00 MXN</p>
        <ul> ⭐Descripción: ${product.description}
          <li> 📆Fecha de Salida: ${product.departureDate}</li>
          <li> 📆Fecha de llegada: ${product.returnDate}</li>
          <li> Punto de partida: 
          <ul>
            <li>${product.departureSite}</li>
          </ul>
          </li>
          <li> Lugares disponibles: ${product.spots}</li>
        </ul>
      </div>
    </div>
  `;
  /*
  <li> Incluye: 
            <ul>
              <li> ${product.amenity1} </li>
              <li> ${product.amenity2} </li>
              <li> ${product.amenity3} </li>
              <li> ${product.amenity4} </li>
              <li> ${product.amenity5} </li>
            </ul>
          </li>
  */
  document.getElementById('modal-container').innerHTML = modalContent;
}

function closeModal() {
  document.getElementById('modal-container').innerHTML = '';
}

function addtocart(product) {
  const cart = localStorage.getItem("backpack") ? JSON.parse(localStorage.getItem("backpack")).post : [];
  const reservations = localStorage.getItem("backpack") ? JSON.parse(localStorage.getItem("backpack")).reservations : [];
  let isNotContained = true;
  for (let i = 0; i < cart.length; i++) {
    if (JSON.stringify(cart[i]) === JSON.stringify(product)) {
      isNotContained = false;
      reservations[i] = reservations[i] + 1;
      break;
    }
  }
  if (isNotContained) {
    reservations.push(1);
    cart.push(product);
  }
  document.querySelector(".xpd-backpack-counter").textContent = reservations.reduce((accumulator, currentValue) => accumulator + currentValue);

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

  const toastExample = document.querySelector("#toast-1");
  const toast = new bootstrap.Toast(toastExample);
  toast.show();
  document.addEventListener("scroll", e => {
    if (window.scrollY < 60) {
      toast.hide();
      /* document.removeEventListener("scroll"); */
    }
  });
}

getData("http://127.0.0.1:8080/api/v1/posts");
