import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import React from "react";
import Styles from "./style.module.css";
import Image from "next/image";
export const metadata = {
  title: 'PokemonDetails',
  description: 'Data for Pokemon',
}
const Pokemon = async ({ params }) => {
  const id = params.id;
  return (
    <div className="w-full flex justify-center items-center">
      {PokemonDetail(id)}
    </div>
  );
};
export default Pokemon;

async function PokemonDetail(id: string) {
  const baseURl = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const data = await fetch(baseURl);
  const pokemon: any = await data.json();
  return (
    <div className={Styles.card}>
      <div className={`${Styles.title}`}>{pokemon.name}</div>
      <div className={Styles.image}>
        <Image
          className={`mb-15 ${Styles.image}`}
          src={pokemon.sprites.other.home.front_default}
          width={512}
          height={512}
          alt={pokemon.name}
        />
      </div>
      <div className={Styles.detail}>
        <div className={Styles.cardtype}>
          TYPE
          <ul className="mt-2">
            {pokemon.types.map((val) => (
              <li key={val.slot}>{val.type.name}</li>
            ))}
          </ul>
        </div>
        <div className={Styles.cardabilities}>
          <p className="left-10 mt-2">ABILITIES</p>
          <ul>
            {pokemon.abilities.map((d) => (
              <li key={d.slot}>{d.ability.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
