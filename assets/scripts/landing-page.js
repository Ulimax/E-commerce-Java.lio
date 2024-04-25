

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
                <p>Date: ${product.date}</p>
                <p>Price: $${product.price}.00</p>
                <p>Description: ${product.description}</p>
                <button onclick="addToCart(${JSON.stringify(product)})">Add to Cart</button>
            </div>
        </div>
    `;
    document.getElementById('modal-container').innerHTML = modalContent;
}

function closeModal() {
    document.getElementById('modal-container').innerHTML = '';
}

function addtocart(product) {  
    console.log("Added to cart:", product);
    localStorage.setItem("backpack",cart.push(product));
}

function delElement(index) {    
    localStorage.setItem("backpack",cart.splice(index, 1));
}



getData("assets/scripts/landing-page.json");


 
  