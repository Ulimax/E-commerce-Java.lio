document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    document.getElementById('password').value = '';
    if (authenticate(email, password)) {
      localStorage.setItem("account", "logged-in");
      setTimeout(() => {window.location.href = "/"}, 3000);
      this.reset();
    }
  });
});

function authenticate(email, password) {
  const storedUser = localStorage.getItem('user');
  const user = storedUser ? JSON.parse(storedUser) : null;
  const errorMessage = [];
  if (user) {
    if (email === user.email && password === user.password) {
      setTimeout(() => {showSucced("2 segundos");}, 1000);
      setTimeout(() => {showSucced("1 segundo");}, 2000);
      showSucced("3 segundos");
      return true;
    } else {
      errorMessage.push("Nombre de usuario o contraseña incorrectos");
      showError(errorMessage);
    }
  } else {
    errorMessage.push('Usuario no encontrado. Por favor, regístrese primero.');
    showError(errorMessage);
  }
  return false;
}


const showError = (errorMessage) => {
  let alert = "";
  for (let message of errorMessage) {
    alert += `
      <div class="alert alert-danger align-items-center mt-1" role="alert">
        <p class="text-center">
          ${message} 
        </p>
      </div>`;
  }
  document.getElementById("error-message").innerHTML = alert;
}

const showSucced = (message) => {
    alert = `
    <div class="alert alert-success align-items-center mt-1" role="alert">
      <p class="text-center">¡Inicio de sesión exitoso!</p>
      <p class="text-center" style="font-size: small;">
        Serás redireccionado a la página de inicio en ${message}
      </p>
    </div>`;
  document.getElementById("error-message").innerHTML = alert;
}