window.addEventListener("load", () => {
  let formulario = document.querySelector(".form-login");
  let email = document.querySelector("#email");
  let password = document.querySelector("#password");

  // VALIDACION EMAIL
  email.addEventListener("input", function (e) {
    email.setCustomValidity(""); // Restablecer la validez personalizada
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email.value)) {
      email.setCustomValidity(
        "Por favor, introduce una dirección de correo electrónico válida."
      );
    }
  });
  email.addEventListener("invalid", () => {
    if (email.validity.valueMissing) {
      email.setCustomValidity("Por favor, introduce tu correo electrónico.");
    }
  });

  // Restablece la validez cuando el usuario comienza a corregir el campo
  email.addEventListener("keydown", function () {
    email.blur();
    email.focus();
    email.setCustomValidity("");
  });

  // VALIDACION PASSWORD
  password.addEventListener("input", function () {
    // Verifica si el valor es menor a 8
    if (password.value.length < 8 && password.value !== "") {
      // Establece el mensaje de invalidez personalizado
      password.setCustomValidity(
        "Por favor, introduce una contraseña de al menos 8 caracteres."
      );
    } else {
      // Si la longitud es 8 o más, limpia cualquier mensaje de invalidez previamente establecido
      password.setCustomValidity("");
    }
  });

  password.addEventListener("invalid", () => {
    if (password.validity.valueMissing) {
      password.setCustomValidity("Por favor, introduce una contraseña.");
    }
  });

  // Restablece la validez cuando el usuario comienza a corregir el campo
  password.addEventListener("keydown", function () {
    password.blur();
    password.focus();
    password.setCustomValidity("");
  });

  formulario.addEventListener("submit", () => {
    // Forzar la validación para mostrar el mensaje personalizado
    email.reportValidity();
  });
});
