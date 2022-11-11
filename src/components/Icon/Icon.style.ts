import styled from "styled-components";
import 'animate.css'




export const StyledIcon = styled.img`
  height: 50px;
  width: 50px;
  border-radius:50px;
  background-color: white;
  margin-top: 2%;
  margin-right: 2%;
  display: flex;
  
  @keyframes loading {
	0% {
		transform: rotate(0);
	}
	100% {
		transform: rotate(360deg);
	}
}
  :hover {
    animation: loading 2s linear infinite;
  }
 
  &.fav{
    animation: none;
  }
  

  &.arrow {
    background: none !important;
    cursor: pointer;
    animation: none;
   
  }


  @media only screen and (max-width: 400px) {
    margin: auto;
}
  
`