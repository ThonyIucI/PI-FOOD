import styled from "styled-components";
import theme, { Item, HomeBack } from "../Config/generales";

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff60;
  border-radius: 10px;
  opacity: 90;
  margin: 5%;
`;
export const Buttomscontainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0% 2% 0% 2%;
  min-height: 150px;
`;
export const Home = styled.button`
  margin: 0 1% 0 1%;
  ${HomeBack(theme.color.celeste)}
`;
export const Back = styled.button`
  ${HomeBack(theme.color.verdeOscuro)}
`;
export const Title = styled.div`
  align-items: flex-end;
  /* -ms-flex-direction: column; */
  font-size: 40px;
  padding: 0 3.5px 0 3.5px;
  text-align: center;
  text-shadow: 2px 2px 6px #ffffff10;
  text-decoration: underline;
  width: 100%;
`;
export const Score = styled.button`
  min-width: 100px;
  top: 2%;
  margin-right: 0%;
  font-size: 13px;
  ${HomeBack(theme.color.rojo)};
  border: none;
  border-radius: 9px;
`;
export const Etiqueta = styled.button`
  width: 80%;
  font-size: 20px;
  font-family: Pacifico, monospace;
  border: none;
  border-radius: 9px;
`;
export const Image = styled.img`
  width: 500px;
  border-radius: 10px;
`;
export const Celda = styled.div`
  padding: 5px 0px 5px 0;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  &:hover {
    background-color: #ffffff60;
  }
`;
export const Class = styled.label`
  margin: 0 5px 0 6px;
  font-size: x-large;
  text-shadow: 1px 1px 2px;
  /* color: ${theme.color.verdeOscuro}; */
  /* text-shadow: -5px 0 ${theme.color.rojoOp}, 5x 0 ${theme.color.sombra},
    0 5px ${theme.color.sombra}, 0 -5px ${theme.color.sombra}; */
`;
export const P = styled.p`
  padding: 1% 8% 1% 8%;
  margin: 0;
  font-size: larger;
  color: #000000;
  text-align: justify;
  text-shadow: none;
  /* overflow: scroll; */
`;
export const ListContainer = styled.div`
  padding: 1% 8% 1% 8%;
  justify-content: center;
  flex-wrap: wrap;
`;
export const Diet = styled.div`
  font-size: 20px;
  ${Item(theme.color.celeste)}
  text-shadow: none;
`;
export const Dish = styled.div`
  font-size: 20px;
  ${Item("#663399")}
  text-shadow: none;
`;
