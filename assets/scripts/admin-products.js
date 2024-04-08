const register= document.forms["register-form"];
const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger"
    },
    buttonsStyling: false
  });
register.addEventListener("submit", (e)=>{
    e.preventDefault();

    swalWithBootstrapButtons.fire({
        title: "¿Estás seguro?",
        text: "¡No podrás revertir esta acción!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí, Guardar!",
        cancelButtonText: "No, Cancelar!",
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {

          const newDestination = {
            title: register.elements["destination"].value,
            date: register.elements["date"].value,
            price: register.elements["price"].value,
            description: register.elements["description"].value,
        }    
        if( isValid( newDestination) ){
          writeDestination( newDestination); 
        }  
          swalWithBootstrapButtons.fire({
            title: "¡Destino Guardado!",
            text: "Tu destino ha sido guardado",
            icon: "success"
          });
        } else if (
          result.dismiss === Swal.DismissReason.cancel
        ) {
          register.reset()
          swalWithBootstrapButtons.fire({
            title: "Cancelado",
            text: "",
            icon: "error"
          });
        }
      });

   
});
const isValid = (newDestination)=>{
    let valid = true;
    const message=[];
    if(!newDestination.title && newDestination.title.length>20){
        valid = false;
        message.push("El nombre del destino no es válido, el campo supera los caracteres o está vacío");
    }
    if(newDestination.price<=0){
        valid = false;
        message.push("El precio del destino no puede ser negativo");
    }
    if(!newDestination.description && newDestination.description.length<100){
        valid = false;
        message.push("La longitud mínima de la descripción es de 100 caracteres");
    }

    if( ! valid ) showError( message );
    else showError( [] );

    return valid;

}

const showError= (errorMessage)=>{
  let alert = "";
  for (let message of errorMessage ){
      alert += `
      <div class="alert alert-danger  align-items-center" role="alert">
          <p class="text-center">
          ${message} 
          </p>
      </div>`
  }

  console.log("Hola");

  document.getElementById("error-message").innerHTML= alert;
}

const writeDestination = (destiny)=>{
    const {title, date, price, description}=destiny;
    const titulo=document.createElement("p");
    titulo.innerText=title;
    document.querySelector(".contenedorParrafos").appendChild(titulo);
    const fecha=document.createElement("p");
    fecha.innerText=date;
    document.querySelector(".contenedorParrafos").appendChild(fecha);
    const precio=document.createElement("p");
    precio.innerText=price;
    document.querySelector(".contenedorParrafos").appendChild(precio);
    const descripcion=document.createElement("p");
    descripcion.innerText=description;
    document.querySelector(".contenedorParrafos").appendChild(descripcion);
}