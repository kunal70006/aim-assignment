import { PokemonType } from "@/pages";
import PokemonRow from "./PokemonRow";

const PokedexTable: React.FC<{ pokemonArr: PokemonType[] }> = ({
  pokemonArr,
}) => {
  return pokemonArr.length ? (
    <table className="table-fixed w-full border border-separate border-spacing-y-2 border-zinc-600 border-spacing-x-8">
      <thead className="text-left border border-zinc-600">
        <tr>
          <th>Name</th>
          <th>ID</th>
          <th className="text-center">Sprite</th>
          <th className="text-right">Types</th>
        </tr>
      </thead>
      <tbody className="text-left">
        {pokemonArr.map((pok) => (
          <PokemonRow pokemon={pok} key={pok.id} />
        ))}
      </tbody>
    </table>
  ) : (
    <p>No Pokemon found :(</p>
  );
};

export default PokedexTable;
