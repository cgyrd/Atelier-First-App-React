import React from 'react';


function PokemonCard() {
    const pokemon = pokemonList[0]; // Variable affectée au premier Pokémon du tableau

    return (
        <figure>
         {pokemon.imgSrc ? (
           <img
           src={pokemon.imgSrc}
           alt={pokemon.name}
       />
   ) : (
       <p>???</p>
   )}
            <figcaption>
                <h1>{pokemon.name}</h1>
            </figcaption>
        </figure>
    );
}

const pokemonList = [
    {
        name: "Bulbasaur le BG",
        imgSrc:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    
    {
        name: "Mew"  
    }
];

export default PokemonCard;
