const cart = localStorage.getItem("backpack") ? JSON.parse(localStorage.getItem("backpack")) : [];

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
                <img class='images' src=${product.image}></img>
            </div>
            <div class='bottom'>
                <p>${product.title}</p>
                <p>${product.date}</p>
                <h2>$ ${product.price}.00</h2>
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
                <h2>${product.title}</h2>
                <p>Fecha: ${product.date}</p>
                <p>Precio: $${product.price}.00</p>
                <p>Descripción: ${product.description}</p>
                
            </div>
        </div>
    `;
    document.getElementById('modal-container').innerHTML = modalContent;
}

function closeModal() {
    document.getElementById('modal-container').innerHTML = '';
}

function addtocart(product) {  
    cart.push(product);
    const json = JSON.stringify(cart);
    console.log("Added to cart:", cart);
    localStorage.setItem("backpack",json);
    
  const toastExample = document.querySelector("#toast-1");
  const toast = new bootstrap.Toast(toastExample);
  toast.show();

  backpackCounter = localStorage.getItem("backpack") ? JSON.parse(localStorage.getItem("backpack")).length : "";
  document.querySelector(".xpd-backpack-counter").textContent = backpackCounter;

}

getData("assets/scripts/landing-page.json");
