import styled from "styled-components";
import img from "../../img/fondo.jpg";
import { theme } from "../Config/generales";
export const Content = styled.div`
  /* Texto */
  text-align: center;
  font-family: Pacifico, sans-serif;
`;

export const DivContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  /* position: relative; */
  width: 50rem;
  height: 20rem;
  border-radius: 2rem;
  border-color: ${theme.color.rojo};
  &:hover {
    transform: scale(1.01);
  }
`;

export const BotonHome = styled.button`
  display: table-cell;
  width: 15rem;
  height: 2rem;
  border-radius: 1rem;
  border-color: ${theme.color.rojo};
  background-color: ${theme.color.rojo};

  &:hover {
    border-color: ${theme.color.rojoOp};
    background-color: ${theme.color.rojoOp};
  }
`;
export const P = styled.p`
  padding-inline: 10%;
  font-size: x-large;
  color: ${theme.color.rojo};
  text-align: justify;
`;

export const Ptitle = styled.p`
  padding-inline: 10%;
  font-size: 100px;
  color: ${theme.color.rojo};
  text-align: center;
  text-shadow: -9px 0 ${theme.color.sombra}, 9px 0 ${theme.color.sombra},
    0 9px ${theme.color.sombra}, 0 -9px ${theme.color.sombra};
`;
