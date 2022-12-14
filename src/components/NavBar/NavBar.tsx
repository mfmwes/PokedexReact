import { useSelector } from "react-redux";
import { StoreState } from "../../redux";
import { Nav, CustomLink, TotalPokemons } from "./NavBar.style";
import { Icon } from "../Icon/Icon";
import pokeball from '../../assets/pokebola.png'

type NavBarProps = {
  hasGoBack?: boolean;
};

function NavBar(props: NavBarProps) {
  const totalPokemons = useSelector((state: StoreState) => state.favorite);

  return (
    <Nav className="nav">
      <div style={{display:'flex', alignItems:'center'}}>
        <Icon src={pokeball} />
        <CustomLink to="/" fontSize={34} lineheight={31} color="#17171b">
          Pokédex
        </CustomLink>
      </div>
      <div className="boxxx">
        <TotalPokemons>
          Total de favoritos: {totalPokemons.length}
        </TotalPokemons>
        {props.hasGoBack && (
          <CustomLink className="back" to="/" fontSize={16} lineheight={21} color="#747476">
            Voltar
          </CustomLink>
        )}
      </div>
    </Nav>
  );
}

export default NavBar;
