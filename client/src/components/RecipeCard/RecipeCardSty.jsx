import styled from "styled-components";
import theme, { Item } from "../Config/generales";

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  /* background-color: ${theme.color.sombra}30; */
  background-color: #ffffff60;
  border-radius: 10px;
  opacity: 90;
  max-width: 300px;
  min-height: 450px;
  margin: 1%;
  padding: 0 0px 5px 0x;
  &:hover {
    transform: scale(1.01);
    border: 1px;
    border-color: ${theme.color.rojoOp};
    background-color: #ffffff;
  }
`;

export const Image = styled.img`
  /* size: 100%; */
  width: 300px;
  /* width: min-content; */
  border-radius: 10px;
`;
export const Title = styled.div`
  position: static;
  font-size: 25px;

  padding: 0 8px 0 8px;
  text-align: center;
  /* background-color: white; */
  text-decoration: underline;
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
  color: ${theme.color.verdeOscuro};
  text-shadow: -5px 0 ${theme.color.rojoOp}, 5x 0 ${theme.color.sombra},
    0 5px ${theme.color.sombra}, 0 -5px ${theme.color.sombra};
`;
export const ListContainer = styled.div`
  justify-content: center;
  flex-wrap: wrap;
`;

export const Diet = styled.div`
  ${Item(theme.color.celeste)}
`;
export const Dish = styled.div`
  ${Item("#663399")}
`;
export const Score = styled.span`
  position: absolute;
  display: flex;
  align-items: flex-end;
  /* top: -10px;
  right: -10px; */
  padding: 5px 10px;
  border-radius: 50%;
  /* color: transparent; */
  background: ${theme.color.rojo};
  color: white;
`;
