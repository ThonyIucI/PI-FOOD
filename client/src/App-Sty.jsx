import { createGlobalStyle } from "styled-components";
import img from "./img/fondo.jpg";
let img2 =
  "https://i.pinimg.com/564x/01/53/c3/0153c36842b693fe6cefba5df95f6043.jpg";
export const GlobalStyles = createGlobalStyle`
body{
  /* Elemento de imagen */
  background-image: url(${img});
  background-position: center center;
  width: 100%;
  height: 100%;
  position: absolute;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;

   margin: 0;
   padding: 0;
font-family: Pacifico, sans-serif;
text-align: center;
   
  /* Alineacion de hijos */
  display: flex;
  /* align-items: center; */
  flex-direction: column;
   }
button{
margin: auto;
cursor: pointer
}
button:hover{
  transform: scale(1.1);
}
p{
   font-size: large;
}

div{
  /* border: 1px black solid; */
}
`;
