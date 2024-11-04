import React from "react";
interface Pokemon {
  name: string;
  imgSrc?: string;
}

interface PokemonCardProps {
  pokemon: Pokemon;
}

function PokemonCard(props: PokemonCardProps) {
  const { pokemon } = props;

  console.log(pokemon);

  return (
    <figure>
      {pokemon.imgSrc ? (
        <img src={pokemon.imgSrc} alt={pokemon.name} />
      ) : (
        <p>???</p>
      )}
      <figcaption>
        <h1>{pokemon.name}</h1>
      </figcaption>
    </figure>
  );
}

export default PokemonCard;
