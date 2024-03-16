const register = document.forms["register-form"];

function validateForm() {
 
  let isNameValid = validateName();
  let isEmailValid = validateEmail();
  let isPhoneNumberValid = validatePhoneNumber();
  let isAboutValid = validateAbout();
  let isCommentValid = validateComment();

  // Check if both email and phone number are valid
  if (isEmailValid && isPhoneNumberValid && isNameValid && isAboutValid && isCommentValid) {
      return true; // Form is valid, proceed with submission
  } else {
      return false; // Form is invalid, do not submit
    }
}

function validateName() {
    let x = document.forms["register-form"]["name"].value.trim();
    if (x == "") {
      alert("El campo nombre está vacio");
      return false;
  
    }
    else{
      return true;
    }
  }

  function validateEmail() {
    let email = document.forms["register-form"]["email"].value.trim();
    
    // Check if email is empty
    if (email === "") {
        alert("Please enter an email address.");
        return false;
    }
    
    // Regular expression for basic email validation
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Check if email format is valid
    if (!emailRegex.test(email)) {
        alert("Por favor ingrese un email valido.");
        return false;
    }
    
    return true; // Email is valid
}

function validatePhoneNumber() {
  let phoneNumber = document.forms["register-form"]["telephone"].value.trim();
  
  // Check if phone number is empty
  if (phoneNumber === "") {
      alert("Por favor ingrese un número telefónico.");
      return false;
  }
  
  // Regular expression for basic phone number validation
  let phoneRegex = /^\d{10}$/;
  
  // Check if phone number format is valid
  if (!phoneRegex.test(phoneNumber)) {
      alert("Por favor ingrese un número telefónico de 10 dígitos.");
      return false;
  }
  
  return true; // Phone number is valid
}

function validateAbout() {
  let x = document.forms["register-form"]["about"].value.trim();
  if (x == "") {
    alert("El asunto está vacio.");
    return false;
    
  }
  else{
    return true;
  }
}

function validateComment() {
  let x = document.forms["register-form"]["comment"].value.trim();
  if (x == "") {
    alert("Deje un comentario.");
    return false;
    
  }
  else{
    return true;
  }
}