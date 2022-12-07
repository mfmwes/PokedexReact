import styled from "styled-components";
import 'animate.css'

export const LoadingContainer = styled.div `   
    text-align: center;
    margin-top: 10%;
    
    @keyframes loading {
	0% {
		transform: rotate(0);
	}
	100% {
		transform: rotate(360deg);
	}
}
    img {    
        animation: loading 2s linear infinite
    }

    h1 {
        font-size: 36px;
        margin-top: 20px;  
           
    }

    @media only screen and (max-width: 428px) {
    
        img {
            height: 300px;
        }
  }
`