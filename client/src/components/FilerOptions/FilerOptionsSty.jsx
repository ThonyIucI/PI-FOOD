import styled from "styled-components";
import theme from "../Config/generales";

export const Options = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 120px;
  width: 30%;
  margin: 0 2% 0 2%;
`;
export const P = styled.p`
  margin: 5%;
  font-size: 25px;
  /* font-size: 80%; */
  color: gray;
  text-align: center;
  text-shadow: -1px 0 ${theme.color.sombra};
`;
export const OptionsContainer = styled.div`
  display: flex;
  height: 36px;
  padding: 0px;
`;

export const Select = styled.select`
  margin-left: 5%;
  width: 33%;
  border-radius: 5px;
  height: 36px;
  margin: 0 3% 0 3%;
  justify-content: center;
  font-family: Pacifico, monospace;
  text-align: center;
  font-size: 85%;
  cursor: pointer;
`;
