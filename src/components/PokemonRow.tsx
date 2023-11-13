import { PokemonType } from "@/pages";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

const PokemonRow: React.FC<{
  pokemon: PokemonType;
  isNotInTable?: boolean;
}> = ({ pokemon, isNotInTable = false }) => {
  const { id, name, sprite, types } = pokemon;
  return (
    <tr
      className={twMerge(
        isNotInTable ? "flex justify-between items-center" : ""
      )}
    >
      <td>{name}</td>
      <td>{id}</td>
      <td className="flex justify-center">
        {" "}
        <Image
          src={sprite}
          alt="sprite"
          width={50}
          height={50}
          className="rounded-full"
        />
      </td>
      <td>
        <div className="flex justify-end truncate">{types.join(", ")}</div>
      </td>
    </tr>
  );
};

export default PokemonRow;
