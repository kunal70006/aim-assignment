import Input from "@/common/input";
import { PokemonType } from "@/pages";
import { useRouter } from "next/router";
import { useState, useMemo } from "react";

const DEFAULT = {
  name: "",
  sprite: "",
  types: [],
};

const Create = () => {
  type PokemonTypeWithoutID = Omit<PokemonType, "id">;
  const [pokemonDetails, setPokemonDetails] =
    useState<PokemonTypeWithoutID>(DEFAULT);

  const router = useRouter();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { id, value } = e.target;
    if (id === "types") {
      const tempTypes = value.split(",");
      if (tempTypes.length === 1 && tempTypes[0] === "") {
        setPokemonDetails((p) => ({ ...p, types: [] }));
      } else {
        setPokemonDetails((p) => ({ ...p, types: tempTypes }));
      }
    } else {
      setPokemonDetails((p) => ({ ...p, [id]: value }));
    }
  }

  async function submit() {
    try {
      const res = await fetch("/api/create", {
        method: "POST",
        body: JSON.stringify({ pokemon: pokemonDetails }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      await res.json();
    } catch (e) {
      console.error(e);
    } finally {
      setPokemonDetails(DEFAULT);
      router.replace(router.asPath);
    }
  }

  const disabled = useMemo(() => {
    const { name, sprite, types } = pokemonDetails;
    return !name.length || !sprite.length || !types.length;
  }, [pokemonDetails]);

  return (
    <div className="flex flex-col gap-4 mb-8">
      <Input
        handleChange={handleChange}
        id="name"
        value={pokemonDetails.name}
        placeholder="Enter pokemon name"
      />
      <Input
        handleChange={handleChange}
        id="sprite"
        value={pokemonDetails.sprite}
        placeholder="Enter sprite"
      />
      <Input
        handleChange={handleChange}
        id="types"
        value={pokemonDetails.types.join(",")}
        placeholder="Enter pokemon types separated by ,"
      />
      <button
        disabled={disabled}
        onClick={() => submit()}
        className="bg-green-500 rounded-lg text-slate-200 px-4 py-1 w-fit disabled:bg-red-500 disabled:cursor-not-allowed"
      >
        Create
      </button>
    </div>
  );
};

export default Create;
