const register = document.forms["register-form"];
const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-success",
    cancelButton: "btn btn-danger"
  },
  buttonsStyling: false
});

register.addEventListener("submit", (e) => {
  e.preventDefault();

  swalWithBootstrapButtons.fire({
    title: "¿Estás seguro?",
    text: "¡No podrás revertir esta acción!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "¡Sí, guardar!",
    cancelButtonText: "¡No, cancelar!",
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      const newDestination = {
        title: register.elements["destination"].value,
        place: register.elements["place"].value,
        date: register.elements["date"].value,
        date2: register.elements["date2"].value,
        image: register.elements["image"].value,
        site: register.elements["departure-site"].value,
        spots: register.elements["spots"].value,
        price: register.elements["price"].value,
        description: register.elements["description"].value,
      }
      if (isValid(newDestination)) {
        writeDestination(newDestination);
        swalWithBootstrapButtons.fire({
          title: "¡Destino Guardado!",
          text: "Tu destino ha sido guardado",
          icon: "success"
        });
      }
    } else if (
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire({
        title: "Cancelado",
        text: "",
        icon: "error"
      });
    }
  });


});

const isValid = (newDestination) => {
  let valid = true;
  const message = [];
  //destino
  if (!newDestination.title) {
    message.push("El nombre de viaje está vacío");
  }
  if (newDestination.title.length > 100) {
    message.push("El nombre de viaje supera los caracteres maximos");
  }
  //place
  if (!newDestination.place) {
    message.push("El lugar de destino está vacío");
  }
  if (newDestination.place.length > 100) {
    message.push("El lugar de destino supera los caracteres maximos");
  }
  //date
  if (!newDestination.date) {
    message.push("La fecha de salida está vacía");
  }
  if (newDestination.date > newDestination.date2) {
    message.push("La fecha de salida sucede despues que la de regreso");
  }
  //date2
  if (!newDestination.date2) {
    message.push("La fecha de regreso está vacía");
  }
  //image
  const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
  if (!newDestination.image) {
    message.push("El URL de imagen está vacío");
  }
  if(!urlPattern.test(newDestination.image)){
    message.push("La URL de la imagen no es válida");
  }
  //departure-site
  if (!newDestination.site) {
    message.push("El lugar de salida está vacío");
  }
  if (newDestination.site.length > 250) {
    message.push("El lugar de salida supera los caracteres maximos");
  }
  //spots
  if (newDestination.spots <= 0) {
    message.push("Los espacios disponible no pueden ser menores a 1");
  }
  //price
  if (newDestination.price <= 0) {
    message.push("El precio del destino no puede ser menor a 1");
  }
  //description
  if (!newDestination.description) {
    message.push("la descripcion está vacío");
  }
  if (newDestination.description > 100) {
    message.push("la descripcion supera los caracteres maximo");
  }

  if (message.length > 0) {
    showError(message);
    valid = false;
  }

  return valid;

}

const showError = (errorMessage) => {
  let alert = "";
  for (let message of errorMessage) {
    alert += `
      <div class="alert alert-danger  align-items-center" role="alert">
          <p class="text-center">
          ${message} 
          </p>
      </div>`
  }
  document.getElementById("error-message").innerHTML = alert;
}

const writeDestination = (destiny) => {
  const json = JSON.stringify(destiny);
  console.log(json);
}