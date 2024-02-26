import axios from "axios";
import PokemonType from "../types/PokemonType";

const API_URL = "https://pokeapi.co/api/v2/";
const GET_POKEMON_BY_NAME = API_URL + "pokemon/";

export const fetchPokemon = async (
  pokemonName: string
): Promise<PokemonType> => {
  const pokeResponse = await axios.get(GET_POKEMON_BY_NAME + pokemonName);
  const pokeData = pokeResponse.data;

  const pokemon: PokemonType = {
    id: pokeData.id,
    name: pokemonName,
    spriteUrl: pokeData.sprites.front_default,
    weight: pokeData.weight,
    baseExperience: pokeData.base_experience,
    moveCount: pokeData.moves.length,
  };

  return pokemon;
};

// TODO: Add caching
