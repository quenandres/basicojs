var miNombre = "Jhonatan";
function nombre(){
    var miApellido = "Mejia";
    console.log(miNombre+" "+miApellido);
}

// Desde fuera si podemos acceder a miNombre.
// Pero si intentamos acceder a miApellido no podemos por que esta en el scope de la funcion nombre.