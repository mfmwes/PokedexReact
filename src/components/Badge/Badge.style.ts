import styled from "styled-components";

export const Container = styled.span`
  display: inline-block;
  padding: 10px 25px;
  border-radius: 12px;
  color: #f7f7f7;
  margin-right: 4px;
  font-weight: 700;

  &.type--bug {
    background-color: #8cb230;
  }
  &.type--dark {
    background-color: #58575f;
  }
  &.type--dragon {
    background-color: #0f6ac0;
  }
  &.type--electric {
    background-color: #eed535;
  }
  &.type--fairy {
    background-color: #ed6ec7;
  }
  &.type--fighting {
    background-color: #d04164;
  }
  &.type--fire {
    background-color: #fd7d24;
  }
  &.type--flying {
    background-color: #748fc9;
  }
  &.type--ghost {
    background-color: #556aae;
  }
  &.type--grass {
    background-color: #62b957;
  }
  &.type--ground {
    background-color: #dd7748;
  }
  &.type--ice {
    background-color: #61cec0;
  }
  &.type--normal {
    background-color: #9da0aa;
  }
  &.type--poison {
    background-color: #a552cc;
  }
  &.type--psychic {
    background-color: #a552cc;
  }
  &.type--rock {
    background-color: #baab82;
  }
  &.type--steel {
    background-color: #4a90da;
  }
  &.type--water {
    background-color: #4a90da;
  }

  :hover {
    filter: brightness(115%) 
  }
  
  @media only screen and (max-width: 428px) {
   display: flex;
   width: 180px;
   justify-content: center;

  &.badge-details {
    width: 285px;
   }
  };
`
