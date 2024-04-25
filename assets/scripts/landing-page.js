const renderContent = () => {
  document.querySelector("main").innerHTML = `
  <section>
    <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active"
          aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
      </div>

      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="">
          <img src="/assets/img/carousel/AdobeStock_211446611.jpeg" class="d-block w-100 imagencarrusel"
            alt="Globos aerostáticos en Guanajuato">
          <div class="carousel-caption">
            <h3> <strong>Feria Internacional del Globo</strong> </h3>
            <p>Del 16 al 20 de noviembre 2024 </p>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="5000">
          <img src="/assets/img/carousel/AdobeStock_410511672.jpeg" class="d-block w-100 imagencarrusel"
            alt="Atardecer en Maruata">
          <div class="carousel-caption">
            <h3> <strong>Maruata</strong> </h3>
            <p>Del 3 al 5 de mayo 2024 </p>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="5000">
          <img src="https://i.ibb.co/C2gbp3y/DSC4982.jpg" class="d-block w-100 imagencarrusel"
            alt="Paisaje del Nevado de Colima">
          <div class="carousel-caption">
            <h3> <strong>Nevado de Colima</strong> </h3>
            <p>Del 18 al 29 de mayo 2024</p>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="5000">
          <img src="/assets/img/carousel/_DSC4982.JPG" class="d-block w-100 imagencarrusel"
            alt="Atardecer en el Nevado de Toluca">
          <div class="carousel-caption">
            <h3> <strong> Nevado de Toluca </strong> </h3>
            <p>Del 16 al 20 de noviembre 2024 </p>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="5000">
          <img src="/assets/img/carousel/AdobeStock_8679382.jpeg" class="d-block w-100 imagencarrusel"
            alt="Paracaidismo en Tepoztlan">
          <div class="carousel-caption">
            <h3> <strong> Paracaidismo y Tepoztlán 2° fecha </strong> </h3>

            <p>Del 25 al 26 de mayo 2024 </p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </section>

  <div id="whatsapp-chat">
    <a href="https://wa.me/3221749411" target="_blank">
      <img src="./assets/icons/whatsapp-white.svg" alt="Icono de WhatsApp">
    </a>
  </div>

  <section class="products-container">

    <div class="header">
      <p class="headertext">Próximos viajes</p>
    </div>
    <div class="container">
      <div id="root"></div>
      <div id="modal-container"></div>
    </div>
  </section>
  `;
}

setTimeout(() => {
  renderContent();
}, 0);

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
