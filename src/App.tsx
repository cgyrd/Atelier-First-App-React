import React, { useState } from "react";
import PokemonCard from "./components/PokemonCard";

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const handlePrevious = () => {
    setPokemonIndex(pokemonIndex - 1);
  };

  const handleNext = () => {
    setPokemonIndex(pokemonIndex + 1);
  };

  return (
    <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      <div>
        <button onClick={handlePrevious}>Précédent</button>
        <button onClick={handleNext}> Suivant </button>
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
