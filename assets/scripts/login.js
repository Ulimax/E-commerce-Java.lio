document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('loginBtn').addEventListener('click', function () {
      event.preventDefault();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value;
      document.getElementById('password').value = '';
  
      authenticate(email, password);
    });
  });
  

function authenticate(email, password) {
    const storedUser = localStorage.getItem('user');
    
    const user = storedUser ? JSON.parse(storedUser) : null;

    const errorMessage = [];

if (user) {
        if (email === user.email && password === user.password) {
            errorMessage.push("¡Inicio de sesión exitoso!");
            showSucced(errorMessage);
        } else {
            
            errorMessage.push("Nombre de usuario o contraseña incorrectos");
            showError(errorMessage);
        }
    } else {
        errorMessage.push('Usuario no encontrado. Por favor, regístrese primero.');
        showError(errorMessage);
    }

    
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

const showSucced = (errorMessage) => {
    let alert = "";
    for (let message of errorMessage) {
      alert += `
        <div class="alert alert-success  align-items-center" role="alert">
          <p class="text-center">
            ${message} 
          </p>
        </div>`;
    }
    document.getElementById("error-message").innerHTML = alert;
}