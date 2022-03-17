/* GENERADOR EXCUSAS
Va a escoger al azar, una frase de cada columna (son 3 columnas)
Luego va a armar mi excusa CONCATENANDO la selección hecha en cada columna
*/

// Comienzo a declarar mis arreglos que contengan los textos a usar para mi excusa.
const columnaA = [
    "En cuanto arreglemos el goteo de recursos",
    "En cuanto completemos las pruebas",
    "En cuanto hayamos optimizado el código",
    "Apenas nos arreglen el bug",
    "Cuando se solvente el problema de instalación",
    "Cuando averiguemos por qué se cae el proceso",
    "Cuando hayamos mejorado el rendimiento",
    "En cuanto completemos la restauración",
    "Apenas instalemos el último parche",
    "En cuanto terminemos la implementación"
];

const columnaB = [
    "del interfaz XML",
    "del sistema de colas",
    "del buffer de entrada",
    "del gestor de peticiones",
    "de las clases de abstracción",
    "del recolector de basura",
    "de la nueva versión",
    "del caché",
    "de la versión customizada",
    "del conversor del protocolo"
]

const columnaC = [
    "del directorio LDAP",
    "de la máquina virtual de Java",
    "del proxy inverso",
    "del gestor de clúster",
    "del broker de objetos distribuidos",
    "de la capa de presentación",
    "del despachador de certificados",
    "de la base de datos",
    "del servidor seguro",
    "del acelerador de transacciones"
]

function generaExcusa() {
    //Calcular de forma aleatoria el indice para cada arreglo de frases
    const posicionA = Math.floor(Math.random()*columnaA.length);
    const posicionB = Math.floor(Math.random()*columnaB.length);
    const posicionC = Math.floor(Math.random()*columnaC.length);

    // Armar mi frase usando las 3 partes de la excusa en una sola.
    // Para ello necesito concatenar.
    //const excusa = columnaA[posicionA] + " " + columnaB[posicionB] + " " + columnaC[posicionC];
    const excusa = `${columnaA[posicionA]} ${columnaB[posicionB]} ${columnaC[posicionC]}`;

    // Hacemos que la función devuelva la excusa armada
    return excusa;
}

console.log(generaExcusa());

// Pintar en pantalla mi excusa, manipulando el DOM.
function colocaExcusa(){
    document.getElementById("excusa").innerHTML = generaExcusa()
}

// Ejecuto la función para generar la excusa en pantalla.
colocaExcusa();
