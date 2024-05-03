const registerForm = document.forms["form"];
const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-success",
    cancelButton: "btn btn-danger"
  },
  buttonsStyling: false
});

registerForm.addEventListener("submit", (e) => {
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
      let userTrim=  registerForm.elements["user"].value.trim();
      const userData = {
        user: userTrim,
        phone: registerForm.elements["phone"].value,
        email: registerForm.elements["email"].value,
        role: {
          name: "visitor"
        }
      };

      if (isValid(userData)) {
        createUser(userData);
        window.location.href = "/assets/pages/printreceipt.html"
        swalWithBootstrapButtons.fire({
          title: "Usuario creado",
          text: "felicidades",
          icon: "success"
        });
      }
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      registerForm.reset();
      swalWithBootstrapButtons.fire({
        title: "Cancelado",
        text: "",
        icon: "error"
      });
    }
  });
});

const isValid = (userData) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let valid = true;
  const errorMessage = [];

  if (!userData.user.trim() || userData.user.length < 3) {
    valid = false;
    errorMessage.push("El nombre de usuario es muy corto o está vacío");
  }

  if (userData.phone.length !== 10) {
    valid = false;
    errorMessage.push("Formato de teléfono inválido");
  }

  if (!emailRegex.test(userData.email)) {
    valid = false;
    errorMessage.push("Formato de correo inválido");
  }


  showError(errorMessage);

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
      </div>`;
  }
  document.getElementById("error-message").innerHTML = alert;
}

const createUser = (userData) => {
  const json = JSON.stringify(userData);
  localStorage.setItem('purchaseUser', json);
}
