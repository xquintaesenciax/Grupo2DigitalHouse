window.addEventListener("load", () => {
  let formulario = document.querySelector(".form-register");
  formulario.addEventListener("submit", (e) => {
    let nombre = document.querySelector("#nombre");
    let apellido = document.querySelector("#apellido");
    let email = document.querySelector("#email");
    let usuario = document.querySelector("#username");
    let password = document.querySelector("#password");
    let img = document.querySelector("#profile-pic");

    if (nombre.value == "" || nombre.value.length <= 2) {
      e.preventDefault();
      document.querySelector(".nombre").style.display = "block";
    } else document.querySelector(".nombre").style.display = "none";

    if (apellido.value == "" || apellido.value.length <= 2) {
      e.preventDefault();
      document.querySelector(".apellido").style.display = "block";
    } else document.querySelector(".apellido").style.display = "none";

    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email.value)) {
      e.preventDefault();
      document.querySelector(".email").style.display = "block";
    } else document.querySelector(".email").style.display = "none";

    if (usuario.value == "" || usuario.value.length <= 2) {
      e.preventDefault();
      document.querySelector(".usuario").style.display = "block";
    } else document.querySelector(".usuario").style.display = "none";

    if (password.value == "" || password.value.length < 8) {
      e.preventDefault();
      document.querySelector(".password").style.display = "block";
    } else document.querySelector(".password").style.display = "none";

    let extensiones = /\.(jpg|jpeg|png|gif)$/i;

    if (!extensiones.test(img.value)) {
      e.preventDefault();
      document.querySelector(".img").style.display = "block";
    } else document.querySelector(".img").style.display = "none";
  });
});
