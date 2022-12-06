import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import favoriteIcon from '../assets/coracao.png'
import removeIcon from '../assets/lixeira-de-reciclagem.png'
import setaEsquerda from '../assets/seta-esquerda.png'
import setaDireita from '../assets/seta-direita.png'

import NavBar from "../components/NavBar/NavBar";
import Badge from "../components/Badge/Badge";
import { Icon } from "../components/Icon/Icon";
import { Container, Image, Card, Number, Title, Info, ButtonDescription, } from "./Details.style";

import api from "../services/api";

import { CardPokemonProps } from "../components/Card/CardPokemon";
import { StoreState } from "../redux";
import { add, remove } from "../redux/favoriteSlice";

function Details() {
  const { id } = useParams();
  const navigate = useNavigate()

  const dispatch = useDispatch();
  const listaPokemonsFavoritos = useSelector(
    (state: StoreState) => state.favorite
  );
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState<CardPokemonProps>(
    {} as CardPokemonProps
  );

  function handleClickAdd() {
    dispatch(add(id));
  }

  function handleClickRemove() {
    dispatch(remove(id));
  }

  async function getPokemonData() {
    const { data } = await api.get("pokemon/" + id);
    console.log(data);
    setPokemonData({
      id: data.id,
      name: data.name,
      types: data.types,
      height: data.height,
      weight: data.weight
    });
    setIsLoading(false);
  }

  useEffect(() => {
    getPokemonData();
  }, []);

  const nextPokemon = () => {
    navigate(`/details/${pokemonData.id + 1}`)
  }
  const previousPokemon = () => {
    navigate(`/details/${pokemonData.id - 1}`)
  }


  if (isLoading) {
    return <p>Carregando</p>;
  }

  return (
    <>
      <NavBar hasGoBack />
      <Container>
        <Card
          className={`type--${pokemonData.types[0].type.name.toLowerCase()}`}
        >
          <Number>#{String(id).padStart(3, "0")}</Number>
          <Title>{pokemonData.name[0].toLocaleUpperCase() + pokemonData.name.substring(1)}</Title>

          {pokemonData.types.map((item, index) => {
            return <Badge key={index} name={item.type.name} />;
          })}

          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
            alt={pokemonData.name}
          />
          <Info>Altura: {pokemonData.height / 10 + 'm'}  </Info>
          <Info>Peso: {pokemonData.weight / 10 + 'kg'} </Info>
          {!!listaPokemonsFavoritos.find(
            (item) => String(item) === String(id)
          ) ? (
            <div style={{ display: 'flex' }}>
              <Icon className='fav' src={removeIcon} onClick={handleClickRemove} />
              <ButtonDescription> Remover dos favoritos</ButtonDescription>
            </div>
          ) : (
            <div style={{ display: 'flex' }}>
              <Icon className='fav' src={favoriteIcon} onClick={handleClickAdd} />
              <ButtonDescription> Adicionar aos favoritos</ButtonDescription>
            </div>
          )}
        </Card>
        {pokemonData.id == 1 ? (
          <div style={{ marginTop: '10%', alignContent: 'end' }}>
            <a href={`/details/${pokemonData.id + 1}`}>
              <Icon className="arrow" src={setaDireita} alt="" />
            </a>
            <Info>Próximo</Info>
          </div>

        ) : (
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10%' }}>
            <div>
              <a onClick={previousPokemon}>
                <Icon className="arrow" src={setaEsquerda} alt="" />
              </a>
              <Info>Anterior</Info>
            </div>
            <div>
              <a onClick={nextPokemon}>
                <Icon className="arrow" src={setaDireita} alt="" />
              </a>
              <Info>Próximo</Info>
            </div>
          </div>
        )};
      </Container>
    </>
  );
}

export default Details;
