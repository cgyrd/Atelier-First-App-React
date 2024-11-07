import React, { useState } from "react";
import PokemonCard from "./components/PokemonCard";

function App() {
  const [PokemonIndex, setPokemonIndex] = useState(0);

  const handleClick = (index: number) => {
    setPokemonIndex(index);
  };

  return (
    <div>
      {/* Boutons pour sélectionner chaque Pokémon */}
      {pokemonList.map((pokemon, id) => (
        <button
          type="button"
          key={pokemon.name}
          onClick={() => handleClick(id)}
        >
          {pokemon.name}
        </button>
      ))}

      {/* Affiche l'image du Pokémon sélectionné uniquement si imgSrc est disponible */}
      <div>
        {pokemonList[PokemonIndex].imgSrc && (
          <img
            src={pokemonList[PokemonIndex].imgSrc}
            alt={pokemonList[PokemonIndex].name}
          />
        )}
      </div>
    </div>
  );
}

const pokemonList = [
  {
    name: "Bulbasaur le BG",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "Mew",
  },
];

export default App;
