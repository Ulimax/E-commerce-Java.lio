const renderContent = () => {
    document.querySelector("main").innerHTML = `
    <section>
        <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
             <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
            </div> 
        
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="" >
                <img src="./assets/img/img-carrusel/globos-GTO.jpg" class="d-block w-100 imagencarrusel" alt="Globos aerostáticos en Guanajuato">
                <div class="carousel-caption">
                  <h3> <strong>Globos Aerostáticos en Guanajuato</strong> </h3>
                  <p>Del 16 al 20 de noviembre 2024 </p>
                </div>
              </div>
              <div class="carousel-item" data-bs-interval="5000">
                <img src="./assets/img/img-carrusel/maruata.jpg" class="d-block w-100 imagencarrusel" alt="Atardecer en Maruata">
                <div class="carousel-caption">
                  <h3> <strong>Maruata</strong> </h3>
                  <p>Del 3 al 5 de mayo 2024 </p>
                </div>
              </div>
              <div class="carousel-item" data-bs-interval="5000">
                <img src="./assets/img/img-carrusel/nevado-de-colima.jpg" class="d-block w-100 imagencarrusel" alt="Paisaje del Nevado de Colima">
                <div class="carousel-caption">
                  <h3> <strong>Nevado de Colima</strong> </h3>
                  <p>Del 18 al 29 de mayo 2024</p>
                </div>
              </div>
              <div class="carousel-item" data-bs-interval="5000">
                <img src="./assets/img/img-carrusel/Nevado-De-Toluca-National-Park.jpg" class="d-block w-100 imagencarrusel" alt="Atardecer en el Nevado de Toluca">
                <div class="carousel-caption">
                  <h3> <strong> Nevado de Toluca </strong> </h3>
                  <p>Del 16 al 20 de noviembre 2024 </p>
                </div>
              </div>
              <div class="carousel-item" data-bs-interval="5000">
                <img src="./assets/img/img-carrusel/tepoztlan-paracaidismo.JPG" class="d-block w-100 imagencarrusel" alt="Paracaidismo en Tepoztlan">
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
            <img src="./assets/img/img-carrusel/icono-whatsApp.svg" alt="Icono de WhatsApp">
          </a>
        </div>
    
      <section class="products-container">

        <div class="header">
            <p class="headertext"> Próximos Viajes</p>
             
          </div>
         
         <div class="container"> 
             <div id="root"></div>
             <div class="sidebar">
             <div class="head"> <p>Mochila</p></div>
             <div id="cartItem">Tu mochila está vacía </div>
             <div class="foot">
                 <h3>Total</h3>
                 <h2 id="total">$0.00</h2>
         
             </div>
           </div>
         </div>
    
      </section>
    `;
}

setTimeout(() => {
    renderContent();
}, 0);


const cart = [];

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
                 <button onclick='addtocart(${JSON.stringify(product)})'>Añadir a la mochila</button>
             </div>
         </div>
     `).join('');
     document.getElementById('root').innerHTML = productHtml;
 }
 
 function addtocart(product) {
     cart.push(product);
     console.log("Added to cart:", product);
     displaycart();
 }
 
 function delElement(index) {
     cart.splice(index, 1);
     displaycart();
 }
 
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
     
     document.getElementById('cartItem').innerHTML = cart.length === 0 ? "Tu mochila está vacía" : cartItemsHtml;
     document.getElementById("total").innerHTML = `$ ${total}.00`;
 }
 
 
 getData("assets/scripts/landing-page.json");

 
  