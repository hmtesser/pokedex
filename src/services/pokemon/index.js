import { getPokemon } from "./load";

export default async (req, res) => {
  const identifier = req.query.identifier;

  try {
    const pokemon = await getPokemon(identifier); // Call the getPokemon function with the identifier
    res.json(pokemon);
  } catch (err) {
    console.log(err);
    res.status(500).send("Unable to load Pokémon");
  }
};
