//PROGRAMACION ORIENTADA A OBJETOS
// CLASES: Básicamente son moldes o plantillas con estructuras
// definidas que podemos reutilizar.

//Declaración de una clase
class Pokemon {
    // Una Clase necesita un CONSTRUCTOR, que es donde voy a inicializar
    // mis valores
    constructor (nombre,tipo,habilidades,experiencia_base) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.habilidades = habilidades
        this.experiencia_base = experiencia_base
    }

    atacar(){
        let posHabilidad = Math.floor(Math.random()*this.habilidades.length);
        return this.habilidades[posHabilidad]
    }

    listaHabilidades() {
        for (let index = 0; index < this.habilidades.length; index++) {
            const element = this.habilidades[index];
            console.log(element);
        }
    }

}


// Instanciando clases: Necesito usar la palabra reservada new:
// const miVariable = new nombreClase(parametros)
const pikachu = new Pokemon("Pikachu","Electrico",["thunder-punch","mega-punch", "headbutt"],125);
console.log(pikachu);
//Genero la lista de habilidades
pikachu.listaHabilidades();

// Como mi clase funciona como un "molde", puedo crear tantos Pokemons
// como yo quiera
const ditto = new Pokemon("Ditto","Normal",["Copy"],101);
console.log(ditto);
console.log(ditto.atacar());