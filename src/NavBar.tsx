interface Pokemon {
  name: string;
  imgSrc?: string;
}

interface NavBarProps {
  pokemonIndex: number;
  setPokemonIndex: (index: number) => void;
  pokemonList: Pokemon[];
}

function NavBar({ pokemonIndex, setPokemonIndex, pokemonList }: NavBarProps) {
  const handleClickPrevious = () => {
    setPokemonIndex(pokemonIndex - 1);
  };

  const handleClickNext = () => {
    setPokemonIndex(pokemonIndex + 1);
  };

  return (
    <div>
      {pokemonIndex > 0 ? (
        <button type="button" onClick={handleClickPrevious}>
          Previous
        </button>
      ) : null}

      {pokemonIndex < pokemonList.length - 1 ? (
        <button type="button" onClick={handleClickNext}>
          Next
        </button>
      ) : null}
    </div>
  );
}

export default NavBar;
