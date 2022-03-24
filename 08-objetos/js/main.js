// OBJETOS LITERALES
// Construir un objeto: Empieza y termina con llaves { }
let pikachu = {
    nombre:"Pikachu",
    tipo:"Electrico",
    habilidades:["thunder-punch","mega-punch", "headbutt"],
    experiencia_base:125
}

// Para acceder a la información de un objeto, puedo:
// #1 Mandarlo a llamar como objeto.atributo
console.log('1. El tipo de pikachu es', pikachu.tipo);

// #2 Tambien se puede llamar con notación con corchetes []
// de la forma objeto['atributo']
console.log('2. El tipo de pikachu es', pikachu['tipo']);

// METODOS DE UN OBJETO
// Acciones que puede realizar mi objeto
let pikachu2 = {
    nombre:"Pikachu",
    tipo:"Electrico",
    habilidades:["thunder-punch","mega-punch", "headbutt"],
    experiencia_base:125,
    atacar: function(){
        let posHabilidad = Math.floor(Math.random()*this.habilidades.length);
        return this.habilidades[posHabilidad]
    },
    listaHabilidades: function(){
        for (let index = 0; index < this.habilidades.length; index++) {
            const element = this.habilidades[index];
            console.log(element);
        }
    }
}

console.log('Pikachu ataca con',pikachu2.atacar());

//Genero la lista de habilidades
pikachu2.listaHabilidades();


// Para actualizar un valor en un objeto existente solamente hago
// una operación de asignación objeto.atributo = nuevo valor
pikachu2.experiencia_base = 200;
console.log(pikachu2.experiencia_base);

// Puedo imprimir el contenido de mi objeto:
console.log(pikachu2);

// Puedo borrar atributos/metodos de mi objeto
// Para ello uso delete objeto.atributo
delete pikachu2.experiencia_base;
console.log(pikachu2);