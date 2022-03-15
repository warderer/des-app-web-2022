console.log("Hola desde el archivo main.js");

//VARIABLES
var a = 5; 
var b = 10; 

if (a === 5) { 
  let a = 4; // El alcance es dentro del bloque if 
  var b = 1; // El alcance es global 

  console.log(a);  // a vale 4 
  console.log(b);  // b vale 1 

}  

console.log(a); // a vale 5 
console.log(b); // b vale 1 

// Uso camelCase para declarar mis nombres de variables
var edadLegal = 18;

//CONSTANTES
// Una buena práctica es nombrar en mayúsculas mis constantes
// cuando son valores.
// Recordemos que una constante no cambia su valor.
const GRAVEDAD = 9.81; 

// INPUT Y OUTPUTS

// Output muestra información
alert("Hola Delfines");

// Input captura información 
var tuEdad = prompt("¿Cuál es tu edad?");

// Console.log nos ayuda a mostrar en la consola el valor de una variable
// o constante.
console.log("Tu edad es: ",tuEdad);
alert("Tu edad es: " + tuEdad); //concatenación


// TIPOS DE DATOS

// Strings(textos): Usan comillas simples o dobles:
console.log("Este es un String");
console.log('Este es otro string o texto');

// Numeros: Los colocamos tal cual, sin usar comillas.
console.log(5);
console.log(10+4);

// Booleanos (Falso o Verdadero): True/False
var estaInscrito = true;
var servicioSocial = false;