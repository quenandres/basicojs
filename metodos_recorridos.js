var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "Tv", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 1300 }, 
    { nombre: "Laptop", costo: 50000}, 
    { nombre: "Teclado", costo: 4511}, 
    { nombre: "Audifonos", costo: 500 }, 
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

// Nos retorna el objeto que si coincide y descarta los demas
var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop";
});

// Recorre el array de objetos y nos retorna el valor de cada uno
articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

//Esta funcion simplemente nos retorna un true si alguna de las iteraciones cumplio
var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});