const huellitas = "HUELLITAS®"
const bienvenida = ("¡Bienvenido a la Clínica Veterinaria " + huellitas + "!");

alert(huellitas);

let nombre = prompt("Ingrese su Nombre").toUpperCase();

let alimento = 1500;
let abrigos = 5000;
let correas = 500;
let juguetes = 1000;
let caniles = 15000;
let shampoo = 800;
let pipetas = 3000;
let piedras = 50;

let cantidadDeProductos = 0;

const IVA = 0.21;

let inicio = 0;
let eleccion = 0;

function opciones() {

     eleccion = parseInt(prompt("¿Qué deseas hacer? (Ingresa el número de la opción que deseas realizar):" + "\n\n" + "1.- Consultar Precios" + "\n" + "2.- Comprar" + "\n" + "3.- Salir" + "\n"));

    switch (eleccion) {
        case 1:

            consultaPrecios();
            volver();

            break;
        case 2:
            comprar();
            volver();

            break;

        case 3:
            salir();
            break;

        default:
            alert("Opción inválida");
            opciones();
            break;
    }
}

function consultaPrecios() {
    alert("El precio de los productos es el siguiente: " + "\n" + ("Alimento = ARS $" + alimento + " + IVA") + "\n" + ("Abrigos = ARS $" + abrigos + " + IVA") + "\n" + ("Correas = ARS $" + correas + " + IVA") + "\n" + ("Juguetes = ARS $" + juguetes + " + IVA") + "\n" + ("Caniles = ARS $" + caniles + " + IVA") + "\n" + ("Shampoo Veterinario = ARS $" + shampoo + " + IVA") + "\n" + ("Pipetas = ARS $" + pipetas + " + IVA") + "\n" + ("Piedras Sanitarias = ARS $" + piedras + " + IVA"));
}


function comprar() {

    let eligeProducto = parseInt(prompt("¿Qué producto deseas? (Ingresa el número de la opción correspondiente):" + "\n\n" + "1.- Alimento" + "\n" + "2.- Abrigos" + "\n" + "3.- Correas" + "\n" + "4.- Juguetes" + "\n" + "5.- Caniles" + "\n" + "6.- Shampoo Veterinario" + "\n" + "7.- Pipetas" + "\n" + "8.- Piedritas Sanitarias" + "\n" + "9.- Volver al Inicio" + "\n"));

    switch (eligeProducto) {
        case 1:

            calcularPrecioFinal("Alimento", alimento);

            break;
        case 2:
            calcularPrecioFinal("Abrigos", abrigos);

            break;
        case 3:
            calcularPrecioFinal("Correas", correas);

            break;
        case 4:
            calcularPrecioFinal("Juguetes", juguetes);

            break;
        case 5:
            calcularPrecioFinal("Caniles", caniles);

            break;
        case 6:
            calcularPrecioFinal("Shampoo Veterinario", shampoo);

            break;
        case 7:
            calcularPrecioFinal("Pipetas", pipetas);

            break;
        case 8:
            calcularPrecioFinal("Piedras Sanitarias", piedras);

            break;
        case 9:

            break;

        default:
            alert("Parámetro incorrecto");
            comprar();
            break;
    }
}


function calcularPrecioFinal(nombreProducto, precio) {

    do {

        cantidadDeProductos = prompt("Ingrese la cantidad de productos que desea comprar");

        if (isNaN(cantidadDeProductos)) {
            alert("Parámetro Inválido");
        }

    } while (isNaN(cantidadDeProductos));

    alert("Quieres Comprar " + cantidadDeProductos + " " + "unidades de " + nombreProducto);

    alert("El precio a abonar se compone de: \n" + "ARS $ " + (precio * cantidadDeProductos) + " + IVA 21%");

    let totalCompra = cantidadDeProductos * ((precio * IVA) + precio);

    alert("Este es tu resumen, " + nombre + ": \nEl total que debes abonar es ARS $" + totalCompra.toString());


    alert("Gracias por elegirnos - " + huellitas);

}


function volver() {
    inicio = parseInt(prompt("Elige la opción deseada: " + "\n\n" + (("1.- Volver al Inicio").toString()) + "\n" + (("2.- Salir\n".toString()))));
}

function salir() {

    alert("Gracias por elegirnos - " + huellitas);
}


do  {
    opciones();
}

while (eleccion !== 3 && inicio!==2);


