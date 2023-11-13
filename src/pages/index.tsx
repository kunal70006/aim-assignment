import Create from "@/components/Create";
import FiltereablePokedexTable from "@/components/FiltereablePokedexTable";
import PokedexTable from "@/components/PokedexTable";
import PokemonRow from "@/components/PokemonRow";
import { getBaseUrl } from "@/utils";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const bulbasaur = {
  id: 1,
  name: "Bulbasaur",
  types: ["grass", "water", "dragon"],
  sprite: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
};

export type PokemonType = typeof bulbasaur;

export default function Home({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <main
      className={`flex min-h-screen flex-col p-24 bg-zinc-900 text-slate-100 ${inter.className}`}
    >
      <Create />
      {data?.length /* <PokemonRow pokemon={bulbasaur} isNotInTable /> */ ? (
        /* <PokedexTable pokemonArr={arr} /> */
        <FiltereablePokedexTable pokemonArr={data} />
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
}

export const getStaticProps = (async () => {
  const baseURL = getBaseUrl();
  const res = await fetch(`${baseURL}/api/read`);
  const { pokemon: data } = await res.json();
  return { props: { data } };
}) satisfies GetStaticProps<{
  data: PokemonType[];
}>;
