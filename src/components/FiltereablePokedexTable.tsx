import { PokemonType } from "@/pages";
import { useState } from "react";
import PokemonTypeSelection from "./PokemonTypeSelection";
import PokedexTable from "./PokedexTable";

const FiltereablePokedexTable: React.FC<{ pokemonArr: PokemonType[] }> = ({
  pokemonArr,
}) => {
  const [selectedType, setSelectedType] = useState<string | undefined>(
    undefined
  );

  function selectType(type: string | undefined) {
    setSelectedType(type);
  }
  const filteredArr = !!selectedType
    ? pokemonArr.filter((pok) => pok.types.includes(selectedType))
    : pokemonArr;

  return (
    <div>
      <PokemonTypeSelection
        selectType={selectType}
        selectedType={selectedType}
      />
      <PokedexTable pokemonArr={filteredArr} />
    </div>
  );
};

export default FiltereablePokedexTable;
