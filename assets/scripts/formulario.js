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