let productos = JSON.parse(localStorage.getItem("guardado")) || [];
let Mp = JSON.parse(localStorage.getItem("guardado2")) || [];
const pl = document.getElementById("product-list");
function recuperarD() {
    productos.forEach(function(P) {
        const art = document.createElement("article");
        const boton = document.createElement("button");
boton.textContent = "guardar";
let existe = Mp.some(function(pro){
    return pro.nombre === P.nombre
})
boton.onclick = function() {
    if(existe) {
        if(
confirm("Ya tienes este producto ¿Deseas agregarlo una vez mas?")
        ) {      Mp.push({
        nombre: P.nombre,
        precio: P.precio,
        descripcion: P.descripcion,
        categoria: P.categoria,
      
    })}
}
else {
      Mp.push({
        nombre: P.nombre,
        precio: P.precio,
        descripcion: P.descripcion,
        categoria: P.categoria,
      
    })
}

    localStorage.setItem("guardado2", JSON.stringify(Mp));
}
    art.innerHTML = "<h2>" + P.nombre + "</h2><p>Precio: " + P.precio + "</p><p>Descripción: " + P.descripcion + "</p><p>Categoría: " + P.categoria + "</p>";
    art.appendChild(boton);
    pl.appendChild(art);
    
})}
recuperarD();
