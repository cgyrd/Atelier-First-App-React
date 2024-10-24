import React from 'react';

/*On crée un nouveau fichier que l’on appelle ici 
PokemonCard avec une fonction, et pour la re utiliser 
ailleurs, on l’exporte */

function PokemonCard () {
    return (
        <figure>
            <img
                id= "pokemon-Bulbasaur"
                src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
                alt ="pokemons"
            />
            <figcaption>
                <h1>Bulbasaur</h1>
            </figcaption>
        </figure>
    )
  

}
  export default PokemonCard;