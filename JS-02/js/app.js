/* VARIABLES */
// var, let y const

// Var- puede ser utilizada en cualquier punto del documento.
// Incluso antes de ser definida

console.log(uno);
var uno = "cualquiera";
console.log(uno);

var x = 1;
if (true){
    var x = "verdadero";
    console.log(x);
}
console.log(x);

// let - definiciñon de bloque, es variable y no se puede utilizar
// antes de ser declarada

let dos = "otrovalor";
console.log(dos);

let y ="falso";
if (true) {
    let y = "verdadero";
    console.log(y);
}
console.log(y);

var var1 = 1;
var var1 = 2;

let let1 = 1;

const tres = "igual";

// VALORES DE VERDADERO Y FALSO

// valor falso: undefined, null, 0, ""
// valor verdadero: valor diferente a los falso

let mes;
mes = 10;

if(mes){
    console.log("es verdadero");
} else {
    console.log("es falso");
}

// OPERADORES DE IGUAL

// doble igual - Devuelve verdadero si los dos operandos son iguales

// triple igual - Devuelve verdadero si los operandos son iguales y mismo tipo

mes == "10" ? console.log("Si") : console.log("no");

// TEMPLATE DE STRING

let nombre = "Juan";
let apellido = "Lopez";
const nacimiento = 1990;
function calculaEdad(nac){
    return 2020 - nac;
}

console.log(nombre + " " + apellido + ", su edad: " + calculaEdad(nacimiento));

console.log(`${nombre} ${apellido}, su edad: ${calculaEdad(nacimiento)}`);

// FUNCIONES DE FECHA

const anios = [2000, 2005, 2010, 2020];

var edad = anios.map(function(el){
    return 2020 - el;
});
console.log(edad);

let edadNueva = anios.map(el => 2020 - el);
console.log(edadNueva);

edadNueva = anios.map((el, index) => `Edad ${index + 1}: ${2020 - el}`);
console.log(edadNueva);

edadNueva = anios.map(
    (el, index) => {
        const actual = new Date().getFullYear();
        const edad = actual - el;
        return `Edad ${index + 1}: ${edad}`;
    }
);
console.log(edadNueva);

const cuadrado = function (num) {
    return num * num;
}
console.log(cuadrado(2));

const cuadrado2 = (num) => {
    return num * num;
}
console.log(cuadrado2(2));

const cuadrado3 = (num) => num * num;
console.log(cuadrado3(2));

const frutas = [
    {
        nombre: "Manzana",
        cantidad: 2
    },
    {
        nombre: "Fresa",
        cantidad: 5
    },
    {
        nombre: "Mora azul",
        cantidad: 8,
    },
    {
        nombre: "Naranja",
        cantidad: 12,
    }
];

const menores10 = frutas.filter(fruta => fruta.cantidad < 10 && fruta.nombre.startsWith("M"));
console.log(menores10);