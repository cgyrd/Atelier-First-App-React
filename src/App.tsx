import React, { useState } from "react";
import PokemonCard from "./components/PokemonCard";

function App() {
  const [count, setCount] = useState(0);
  const [PokemonIndex, setPokemonIndex] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <PokemonCard pokemon={pokemonList[PokemonIndex]} />
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
