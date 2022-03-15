// Las funciones nos permiten reutilizar código, invocando su nombre.

//DECLARACION DE MI FUNCION
function sumaDosNumeros(num1, num2) {
    let resultado = num1 + num2;
    return resultado;
}

// USO MI FUNCION
var laSuma = sumaDosNumeros(10,5);
alert("La suma es " + laSuma)

var laSuma = sumaDosNumeros(2,8);
alert("La suma es " + laSuma)


// En ES6 podemos guardar una funcion en una constante
// usando Arrow Functions
const multiplicaDosDumeros = (num1, num2) => {
    return num1 * num2;
}

alert("La multiplicación es " + multiplicaDosDumeros(2,3))