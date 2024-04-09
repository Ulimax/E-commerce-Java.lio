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
            title: register.elements["user"].value,
            date: register.elements["phone"].value,
            price: register.elements["email"].value,
            image: register.elements["password"].value,
            description: register.elements["password2"].value,
        }    
        if( isValid( newDestination) ){
          writeDestination( newDestination); 
          swalWithBootstrapButtons.fire({
            title: "¡Destino Guardado!",
            text: "Tu destino ha sido guardado",
            icon: "success"
          });
        }  
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

  // Aqui se llevan acabo las validaciones
    let valid = true;
    const message=[];
    if(!newDestination.title || newDestination.title.length>20){
        valid = false;
        message.push("El nombre del destino no es válido, el campo supera los caracteres o está vacío");
    }
    if(newDestination.price<=0){
        valid = false;
        message.push("El precio del destino no puede ser negativo");
    }
    if(!newDestination.description || newDestination.description.length<100){
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
  document.getElementById("error-message").innerHTML= alert;
}

const writeDestination = (destiny)=>{
    const json = JSON.stringify(destiny);
    console.log(json);
}