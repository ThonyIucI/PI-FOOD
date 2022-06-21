import styled, { css } from "styled-components";
import { theme } from "../Config/generales";
const shadow = (size1, size2, color) => {
  return css`
    text-shadow: ${size1} 0 ${color}, ${size2} 0 ${color}, 0 ${size2} ${color},
      0 ${size1} ${color};
  `;
};
const ButtonHome = (color) => {
  return css`
    font-family: Pacifico, sans-serif;
    background-color: ${color};
    border-color: white;
    color: white;
    &:hover {
      background-color: ${color};
      border-color: ${color}10;
      color: #ffffff90;
    }
  `;
};

export const ContainerHead = styled.div`
  margin: 0;
  display: flex;
  justify-items: center;
  align-items: center;
  height: 200px;
  padding: 0 8% 0 8%;
  background-color: ${theme.color.rojo};
`;
export const Ptitle = styled.p`
  padding-inline: 10%;
  margin: 0;
  padding: 0 5% 0 2%;
  font-size: 50px;
  color: ${theme.color.rojo};
  text-align: center;
  ${shadow("-4px", "4px", "white")}
  transform: rotate(-8deg);
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    /* transform: rotate(-8deg); */
  }
`;
export const ButtomsConatiner = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column-reverse;
  height: 100%;
`;
export const ButtomCreateR = styled.button`
  width: 300px;
  height: 60px;
  font-size: 20px;
  border-radius: 25px;
  align-self: center;
  font-family: Pacifico, sans-serif;
  ${ButtonHome(theme.color.celeste)}
`;
export const RefreshButton = styled.button`
  width: 80px;
  height: 50;
  font-size: 20px;
  border-radius: 20px;
  align-self: center;
  font-family: Pacifico, sans-serif;
  ${ButtonHome("orange")}
`;

export const ContainerBody = styled.div`
  /* position: static;*/
  padding: 10px 5% 10% 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  /* width: 100%; */
  margin: 1%;
  gap: 2%;
  background-color: transparent;
  /* overflow: scroll; */
`;

export const ContainerNumber = styled.div`
  margin: 0% 5% 0% 5%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  margin: 2.5%;
  gap: 2%;
  background-color: transparent;
`;
export const NotFound = styled.span`
  text-align: center;
  margin: 0;
  font-size: 35px;
`;
