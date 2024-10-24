import React from "react";

/*On crée un nouveau fichier que l’on appelle ici 
PokemonCard avec une fonction, et pour la re utiliser 
ailleurs, on l’exporte */

function PokemonCard: React.FC = () => {
  return (
    <figure>
      <p>Nom du Pokémon</p>
    </figure>
  );
};
  export default PokemonCard;