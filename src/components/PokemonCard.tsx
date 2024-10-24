import React from 'react';


function PokemonCard() {
    const pokemon = pokemonList[0]; // Variable affectée au premier Pokémon du tableau

    return (
        <figure>
            <img
            
                src={pokemon.imgSrc}
                alt={pokemon.name}
            />
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
        name: "Pikatchu",
        imgSrc: "https://img.freepik.com/psd-premium/fleurs-autocollants-fille-animaux-dessins-animes-livres-jeu-halloween-briques-arbre-chat-isole-transparent_1056883-42824.jpg?w=740",
    },
    {
        name: "Unknown Pokemon"
    }
];

export default PokemonCard;
