import { NextResponse } from "next/server";
import React from "react";
import styles from "./style.module.css";
import Image from "next/image";
import Link from "next/link";
export default async function pokemon() {
  const baseURL = "https://pokeapi.co/api/v2/pokemon/?limit=80";
  const data = await fetch(baseURL);
  const pokemon: any = await data.json();
  const pokemons = pokemon.results;
  return (
    <>
      <div className="w-full flex text-white text-5xl font-bold justify-center items-center">
        POKEMON
      </div>
      <div className="w-full text-black">
        <div className="w-full m-5 ">
          <div className="flex flex-wrap flex-row justify-center items-center">
            {pokemons.map((val) => getPokemon(val.name))}
          </div>
        </div>
      </div>
    </>
  );
}

export async function getPokemon(name: string) {
  const baseURL = `https://pokeapi.co/api/v2/pokemon/${name}`;
  const data = await fetch(baseURL);
  const pokemon: any = await data.json();
  return (
    <div className="card relative">
      <div className="card-id absolute">{pokemon.id}</div>
      <div className="card-title">{pokemon.name}</div>
      <Image
        src={pokemon.sprites.other.home.front_default}
        width={512}
        height={512}
        alt={pokemon.name}
        className="card-image"
      />
      <Link className="card-next" href={`/pokemon/${pokemon.name}`}>
        Readmore
      </Link>
    </div>
  );
}
