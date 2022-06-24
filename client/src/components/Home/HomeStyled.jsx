import styled, { css } from "styled-components";
import { theme, HomeBack } from "../Config/generales";
const shadow = (size1, size2, color) => {
  return css`
    text-shadow: ${size1} 0 ${color}, ${size2} 0 ${color}, 0 ${size2} ${color},
      0 ${size1} ${color};
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
  align-content: center;
  flex-direction: column-reverse;
  height: 100%;
  width: 35%;
`;
export const RefreshButton = styled.button`
  ${HomeBack(theme.color.naranja)}
  border-color: white;
  border-radius: 20px;
  align-self: center;
  margin: 8% 5% 4% 5%;
`;
export const ButtomCreateR = styled.button`
  ${HomeBack(theme.color.verde)}
  border-color: white;
  width: 280px;
  border-radius: 25px;
  height: 60px;
  font-size: 25px;
  margin: 4% 5% 15% 5%;
`;

export const ContainerBody = styled.div`
  padding: 10px 5% 10% 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 1%;
  gap: 2%;
  background-color: transparent;
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
