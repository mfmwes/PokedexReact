import pokeballLoading from '../../assets/pokebola.png'
import { LoadingContainer } from './Loading.style'
import 'animate.css'

export const Loading = () => {
  return (
    <LoadingContainer>
        <img src={pokeballLoading} alt="" />
        <h1> Loading ...</h1>
    </LoadingContainer>
  )
}
