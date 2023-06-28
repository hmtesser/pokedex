import axios from 'axios';

export async function getPokemon(identifier) {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${identifier}`);
  const pokemonData = response.data;
  const responsePokeEntry = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemonData.id}`)
  const pokemonEntry = responsePokeEntry.data

  const pokemon = {
    id: pokemonData.id,
    name: pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1),
    sprite: pokemonData.sprites.front_default,
    pokemonEntry: pokemonEntry.flavor_text_entries[0].flavor_text
  };

  return pokemon;
}
