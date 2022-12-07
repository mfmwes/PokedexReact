import styled from "styled-components";
import { Link } from "react-router-dom";


export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 428px) {
     .back {
      display: none;
     }
  }
 
`;

type CustomLinkProps = {
  fontSize: number;
  lineheight: number;
  color: string;
};

export const CustomLink = styled(Link)<CustomLinkProps>`
  margin-left: 10px;
  font-weight: 700;
  font-size: ${(props) => props.fontSize}px;
  line-height: ${(props) => props.lineheight}px;
  color: ${(props) => props.color};

  @media only screen and (max-width: 428px) {
     font-size: 18px;
     display: flex;

  }

`;

export const TotalPokemons = styled.span`
  font-weight: 700;
  line-height: 1rem;
  color: ${(props) => props.color};
  margin-right: 2rem;

  @media only screen and (max-width: 428px) {
    margin-right: 0.5rem;
  }

`;
