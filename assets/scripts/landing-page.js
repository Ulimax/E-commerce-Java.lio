
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
                 <button onclick='addtocart(${JSON.stringify(product)})'>Añadir al carrito</button>
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
     
     document.getElementById('cartItem').innerHTML = cart.length === 0 ? "Your cart is empty" : cartItemsHtml;
     document.getElementById("total").innerHTML = `$ ${total}.00`;
 }
 
 
 getData("assets/scripts/landing-page.json");

 
  