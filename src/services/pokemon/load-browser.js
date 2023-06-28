export async function getPokemon(identifier) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${identifier}`);
    return await res.json();
  };
  