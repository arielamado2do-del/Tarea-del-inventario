
let pg = JSON.parse(localStorage.getItem("guardado")) || [];


function agregarP(event) {
const nombre = document.getElementById("product-name").value;
const precio = document.getElementById("precioP").value;
const descripcion = document.getElementById("descripcionP").value;
const categoria = document.getElementById("categoriaP").value;
const art = document.createElement("article");


pg.push({
    nombre: nombre,
    precio: precio,
    descripcion: descripcion,
    categoria: categoria
})
localStorage.setItem("guardado", JSON.stringify(pg));

nombre.value = "";
precio.value = "";
descripcion.value = "";
categoria.value = "";

}