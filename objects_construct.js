function auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var autoNuevo = new auto("Tesla", "Model 3", 2020);
var autoNuevo2 = new auto("Tesla", "Model X", 2018);
var autoNuevo3 = new auto("Toyota", "Corolla", 2019);


function auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var marcas = ["Tesla", "Toyota", "Chevrolet", "Hyundai"];
var modelos = ["Deportivo", "Sedan", "Camioneta", "Convertible"];
var autos = [];

function creaAutos() {
    for (var i = 0; i < 20; i++) {
        autos.push(new auto(
            marcas[aleatoriedad(0, 3)],
            modelos[aleatoriedad(0,3)],
            aleatoriedad(1958, 2021),
        ));
    }
    console.log(autos);
}

function aleatoriedad(min, max){
    return (Math.random() * (max - min) + min).toFixed(0);
}