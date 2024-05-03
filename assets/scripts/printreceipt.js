  function imprimir() {
    window.print();}

    async function getData(url) {
        try {
          const response = await fetch(url);
          const data = await response.json();
      
          displayProducts(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
      
      function displayProducts(purchase) {
        let total=0;
        document.querySelector(".user-info").innerHTML = `
                <p>${purchase.user.fullName}</p>
                <p>${purchase.user.email}</p>
    `;
    console.log(purchase.reservations.length)
for (let i=0; i<purchase.reservations.length; i++) {
    document.querySelector(".posts-info").innerHTML += `
    <div>
    <p>${purchase.post[i].name}</p>
    <p>${purchase.post[i].date1}</p>
    <p>${purchase.post[i].date2}</p>
    <p>${purchase.post[i].destination.name}</p>
    <p>MXN$ ${purchase.post[i].price}.00</p>
    <p>${purchase.reservations[i]}</p>
    </div>
`;

total+=purchase.post[i].price;
}
document.querySelector(".total").innerHTML = `
<p>MXN$ ${total}.00</p>
`;
}
    
      
      getData("../scripts/purchase.json");
      