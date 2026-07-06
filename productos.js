let Mp2 = JSON.parse(localStorage.getItem("guardado2")) || [];
const tl = document.getElementById("tulista");
const editarP = document.getElementById("Editar");
let pE = null;
const calcularrmenu = document.getElementById("calcularmenu");
const resultado = document.getElementById("resultado")
const bd = document.getElementById("buscarDiv");

function mostrarProductos(arreglo){



    tl.innerHTML = "";

    arreglo.forEach(function(P){

        const art = document.createElement("article");

        const boton = document.createElement("button");



        boton.style.cursor = "pointer";
        boton.textContent = "≣";

        const div = document.createElement("div");
        div.style.display = "none";
        div.style.position = "absolute";
        div.style.backgroundColor = "white";
        div.style.marginTop = "10px";

        const eliminar = document.createElement("button");
        eliminar.textContent = "Eliminar";
const calcular = document.createElement("button");
        calcular.textContent = "Calcular";
        const editar = document.createElement("button");
        editar.textContent = "Editar";
        eliminar.onclick = function(){

            if(confirm("¿Seguro que deseas eliminar este producto?")){

                Mp2 = Mp2.filter(function(producto){
                    return producto !== P;
                });

                localStorage.setItem(
                    "guardado2",
                    JSON.stringify(Mp2)
                );

                mostrarProductos(Mp2);

            }

        };
       
editar.onclick = function(){
 pE = P;

        const eN = document.getElementById("eN").value = P.nombre;
        const eD = document.getElementById("eD").value = P.descripcion;

            editarP.style.display = "block";

        }

        boton.onclick = function(){

            if(div.style.display==="none"){
                div.style.display="block";
                div.style.display="flex";
                div.style.flexDirection="column";
            }
            else{
                div.style.display="none";
            }

        };

calcular.onclick = function(){
    calcularrmenu.style.display = "block";
}

    
  
        div.appendChild(eliminar);
        div.appendChild(calcular);
        div.appendChild(editar);
        boton.appendChild(div);

        art.innerHTML =
        "<h2>"+P.nombre+"</h2>" +
        "<p>Precio: "+P.precio+"</p>" +
        "<p>Descripción: "+P.descripcion+"</p>" +
        "<p>Categoría: "+P.categoria+"</p>";

        art.appendChild(boton);

        tl.appendChild(art);

    });




}
mostrarProductos(Mp2);















function abrirB() {
    if(bd.style.display==="none") {
        bd.style.display="block"
    }
    else{
        bd.style.display="none";
    }
}









    

  function calcularTotal(event){
    let total = 0;
        const cCategoria = document.getElementById("cCategoria").value;
         event.preventDefault();
        if(cCategoria==="todo"){
            Mp2.forEach(function(P){
                total += parseFloat(P.precio);
                
    })
resultado.textContent=total;
console.log(total);
}
else {
    let cb = Mp2.filter(function(P) {
        return cCategoria === P.categoria;
    })

   cb.forEach(function(P) {
total += parseFloat(P.precio);
    })

    console.log(cb);
    resultado.textContent=total;
}
}





function editarProd(event){
    const nN = document.getElementById("eN").value;
    const nD = document.getElementById("eD").value;
pE.nombre = nN;
pE.descripcion = nD;

localStorage.setItem("guardado2", JSON.stringify(Mp2));
mostrarProductos(Mp2);
editarP.style.display = "none";

}

function filtrarProductos(event){

    event.preventDefault();

    const buscarP = document.getElementById("buscar").value;
const bN = document.getElementById("bN").value;


if(bN !=="") {
    const pnb = Mp2.filter(function(P) {
    return P.nombre.toLowerCase().includes(bN.toLowerCase());
})
mostrarProductos(pnb);
}

if (buscarP !=="") {
    const pcb = Mp2.filter(function(P){
        return P.categoria=== buscarP;
    })
    mostrarProductos(pcb);
}
    

if(bN==="" && buscarP==="") {
    mostrarProductos(Mp2);
}




}
function cerrarE(){
    editarP.style.display = "none";
}
function cerrarC(){
    calcularrmenu.style.display = "none";
}