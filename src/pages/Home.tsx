import api from "../services/api";
import { useEffect, useState } from "react";
import { Loading } from "../components/Loading/Loading";
import { Title, List, Input } from "./Home.style";
import NavBar from "../components/NavBar/NavBar";
import CardPokemon, { CardPokemonProps } from "../components/Card/CardPokemon";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [textoBusca, setTextoBusca] = useState("");
  const [pokemonList, setPokemonList] = useState<CardPokemonProps[]>([]);


  async function getPokemonData() {
    const  {data}  = await api.get(`pokemon?limit=905`);
    
    const dadosCompletos = await Promise.all(
      data.results.map(async (result: { url: string }) => {
        const { data } = await api.get(result.url);

        return {
          id: data.id,
          name: data.name,
          types: data.types,
        };
      })
    );

    setPokemonList(dadosCompletos);
    setIsLoading(false);
  }

  useEffect(() => {
    getPokemonData();
  }, []);

  if (isLoading) {
    return <Loading/>;
  }

  return (
    <>
      <NavBar />
      <Title>Encontre todos os pokémons em um só lugar</Title>
      <Input
        type="text"
        placeholder="Buscar por NOME ou NÚMERO da Pokédex"
        value={textoBusca}
        onChange={(event:any) => setTextoBusca(event.target.value)}
      />
      <List>
        {pokemonList
          .filter(
            (pokemon) =>
              pokemon.name.includes(textoBusca.toLowerCase()) ||
              String(pokemon.id) === textoBusca
          )
          .map((pokemon, index) => {
            return (
              <CardPokemon
                key={index}
                id={pokemon.id}
                name={pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}
                types={pokemon.types}
              />
            );
          })}
      </List>
    </>
  );
}

export default Home;
