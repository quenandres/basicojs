var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "Tv", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 1300 }, 
    { nombre: "Laptop", costo: 50000}, 
    { nombre: "Teclado", costo: 4511}, 
    { nombre: "Audifonos", costo: 4500 }, 
    { nombre: "Mouse", costo: 3200 }, 
    { nombre: "Monitor", costo: 5000 }, 
]

// Agrega a un nuevo array los articulos que cumplan con la condicional
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500
});

// Recorre los articulos y trae el nombre unicamente en este ejemplo
var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre;
});