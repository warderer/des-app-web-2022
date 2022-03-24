function pintaPokemon(){
    //1. Elegir una posición del arreglo de pokemones de forma Aleatoria
    const numPokemonElegido = Math.floor(Math.random()*pokemons.length);
    console.log(numPokemonElegido);

    //2. Obtener el nombre del pokemon
    const nombrePokemon = pokemons[numPokemonElegido];
    console.log(nombrePokemon);

    //3. Traer la ruta de la imagen del Pokemon
    let img = numPokemonElegido+1;
    if (numPokemonElegido.toString().length === 1) {
        img = '00' + numPokemonElegido;
    } else if (numPokemonElegido.toString().length === 2) {
        img = '0' + numPokemonElegido;
    }

    const pokePicBaseUrl = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${img}.png`

    //4. Señalar en el documento HTML donde quiero pintar/colocar mi pokemon
    var pokemon = document.getElementById('pokedex');

    //5. Armo el HTML que se va a pintar y pintarlo
    pokemon.innerHTML = `
    <h1>${nombrePokemon}</h1>
    <img src="${pokePicBaseUrl}" />
    `
}

//6. Ejecuto mi función pintaPokemon
pintaPokemon();