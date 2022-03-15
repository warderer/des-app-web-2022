// Cuando uso un solo simbolo de =
// estoy haciendo una ASIGNACIÓN
var semaforoActual = "ROJO";

// Mejor pregunto al usuario cual es el color
// del semaforo
semaforoActual = prompt("¿De que color esta el semaforo?")

// Cuando uso dos simbolos de ==
// COMPARO que solo el valor sea el mismo
// Si uso triple simbolo de ===
// COMPARO que el valor y el tipo de dato
// sean iguales

if (semaforoActual === "VERDE") {
    //Aqui va mi codigo si la condición se cumple
    alert("AVANZA");
} else if (semaforoActual === "AMARILLO") {
    alert("ACELERA");
} else {
    alert("DETENTE")
}