const renderContent = () => {
  document.querySelector("main").innerHTML = `
  <section>
    
<div class="d-flex d-column justify-content-center">  
<form id="register-form" action="https://formsubmit.co/a503a2c1d64d1164944b46206fa8b9ba" onsubmit="return validateForm()"  method="POST" >
<div class="container rounded-4 backgroundform ">
  
    <fieldset>
      <h1 class="title-form ">Contáctanos</h1>
        <div class="row">
            <label for="name" class="form-label m-2 col-sm text-start">
                Nombre
            <input id="name" name="name" type="text" class="form-control " required placeholder="Esquivel" /></label>

            <label for="email" class="form-label m-2 col-sm text-start">
                Correo electrónico
            <input id="email" name="email" type="email" class="form-control " required placeholder="correo@correo.com"/></label>
        </div>

        <div class="row">
            <label for="telephone" class="form-label m-2 col-sm text-start">
                Teléfono
            <input id="telephone" name="telephone" type="text" class="form-control " pattern="[0-9]{10}" required placeholder="0123456789"/></label>

            <label for="about" class="form-label m-2 col-sm text-start">
                Asunto
            <input id="about" name="about" type="text" class="form-control " required placeholder="Asunto"/></label>
        </div>

        <div class="row">
            <label for="comment" class="form-label m-2 col text-start">
                Comentario
            <textarea id="comment" name="comment" type="text" class="form-control " rows="3" required placeholder="Escribe un comentario"></textarea></label>
        </div>

        <div class="row-2 text-center m-2">
            <button type="submit" value="Submit" class="btn btn-outline-success"> Enviar </button>
        </div>

    </fieldset>
    </div>  
</div>
</form>
<div class="container d-none d-sm-block">
    <div clss="row">
        <div class="col-md-6 offset-md-3 position-relative">
            <img class="img-fluid m-2 text-center" src="../img/pngwing.com_1_10.webp">
                <div class="position-absolute top-50 start-50 translate-middle">
                    <p class="postit">Dirección</p>
                    <p class="postit">Casa de Ezquivel</p>
                    <p class="postit">nuevomundotravell@gmail.com</p>
                    <p class="postit">00000-00000</p>
            </div>
        </div>
    </div>
</div>

<div class="container">
    <di class="col d-block d-sm-none text-start">
        <p class="postit">Dirección</p>
        <p class="postit">Casa de Ezquivel</p>
        <p class="postit">nuevomundotravell@gmail.com</p>
        <p class="postit">00000-00000</p>
    </di>
</div>
  `;
};

setTimeout(() => renderContent(), 0);


//calls other validations and check if they are true
function validateForm() {
 
  let isNameValid = validateName();
  let isEmailValid = validateEmail();
  let isPhoneNumberValid = validatePhoneNumber();
  let isAboutValid = validateAbout();
  let isCommentValid = validateComment();

  if (isEmailValid && isPhoneNumberValid && isNameValid && isAboutValid && isCommentValid) {
      return true; 
  }
      return false;
}


// Validates the name input field.
// Returns false and displays an alert if the field is empty.
function validateName() {
  let x = document.forms["register-form"]["name"].value.trim();
  if (x == "") {
    alert("El campo nombre está vacio");
    return false;
  }
    return true;
}


// Validates the email input field.
// Returns false and displays an alert if the field is empty or if the field dosent have a basic email structure.
function validateEmail() {
  let email = document.forms["register-form"]["email"].value.trim();
  //revisa que el campo no este vacio 
  if (email == "") {
    alert("Please enter an email address.");
    return false;
  }
    
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
  if (!emailRegex.test(email)) {
    alert("Por favor ingrese un email valido.");
    return false;
  }
    
  return true; 
}

// Validates the name phone field.
// Returns false and displays an alert if the field is empty or if the field dosent have a basic phone structure.
function validatePhoneNumber() {
  let phoneNumber = document.forms["register-form"]["telephone"].value.trim(); 
  if (phoneNumber === "") {
    alert("Por favor ingrese un número telefónico.");
    return false;
  }
  
  let phoneRegex = /^\d{10}$/;

  if (!phoneRegex.test(phoneNumber)) {
    alert("Por favor ingrese un número telefónico de 10 dígitos.");
    return false;
  }
  
  return true; 
}

// Validates the about input field.
// Returns false and displays an alert if the field is empty.
function validateAbout() {
  let x = document.forms["register-form"]["about"].value.trim();
  if (x == "") {
    alert("El asunto está vacio.");
    return false;
  }

  return true;
}

// Validates the comment input field.
// Returns false and displays an alert if the field is empty.
function validateComment() {
  let x = document.forms["register-form"]["comment"].value.trim();
  if (x == "") {
    alert("Deje un comentario.");
    return false;
  }
  return true;
}