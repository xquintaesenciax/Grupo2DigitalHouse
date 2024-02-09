window.addEventListener("load", () => {
  let formulario = document.querySelector(".form-create-product");
  formulario.addEventListener("submit", (e) => {
    let nombre = document.querySelector("#nombre");
    let descripcion = document.querySelector("#descripcion");
    let precio = document.querySelector("#precio");
    let descuento = document.querySelector("#descuento");
    let img = document.querySelector("#imagen");

    if (nombre.value == "" || nombre.value.length <= 5) {
      e.preventDefault();
      document.querySelector(".nombre").style.display = "block";
    } else document.querySelector(".nombre").style.display = "none";

    if (descripcion.value == "" || descripcion.value.length <= 20) {
      e.preventDefault();
      document.querySelector(".descripcion").style.display = "block";
    } else document.querySelector(".descripcion").style.display = "none";

    if (precio.value == "") {
      e.preventDefault();
      document.querySelector(".precio").style.display = "block";
    } else document.querySelector(".precio").style.display = "none";

    if (descuento.value == "") {
      e.preventDefault();
      document.querySelector(".descuento").style.display = "block";
    } else document.querySelector(".descuento").style.display = "none";

    let extensiones = /\.(jpg|jpeg|png|gif)$/i;

    if (!extensiones.test(img.value)) {
      e.preventDefault();
      document.querySelector(".img").style.display = "block";
    } else document.querySelector(".img").style.display = "none";
  });
});
