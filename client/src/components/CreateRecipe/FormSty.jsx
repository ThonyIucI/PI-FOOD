import styled from "styled-components";
import { theme, Item, HomeBack } from "../Config/generales";

export const FormGroup = styled.div`
  background-color: #ffffff90;
  display: block;
  width: 50%;
  margin: 10px auto;
  border-radius: 20px;
  padding: 40px;
  font-family: Pacifico, sans-serif;
  border: 2px orange solid;
  font-size: x-large;
`;

export const Label = styled.label`
  margin-bottom: 1px;
  color: ${theme.color.verdeOscuro};
  display: block;
  text-shadow: -5px 0 ${theme.color.rojoOp}, 5x 0 ${theme.color.sombra},
    0 5px ${theme.color.sombra}, 0 -5px ${theme.color.sombra};
`;

export const Input = styled.input`
  padding: 8px;
  margin-left: 10px;
  width: 100%;
  border-radius: 3px;
  border-color: ${theme.color.verdeOscuro}90;
  background: ${theme.color.verde}10;
  overflow: scroll;
`;

export const Message = styled.label`
  margin-bottom: 5px;
  margin-left: 10px;
  color: palevioletred;
  display: block;
  font-family: monospace;
  font-size: 15px;
`;
export const Ptitle = styled.p`
  padding: 0;
  margin-bottom: 1%;
  font-size: 50px;
  color: ${theme.color.rojo};
  text-align: center;
  text-shadow: -9px 0 ${theme.color.sombra}, 9px 0 ${theme.color.sombra},
    0 9px ${theme.color.sombra}, 0 -9px ${theme.color.sombra};
`;
export const Span = styled.p`
  margin: 0;
  font-size: 25px;
  color: ${theme.color.rojo};
  text-align: center;
`;
export const Select = styled.select`
  margin-left: 5%;
  width: 25%;
  border-radius: 1px;
`;
export const DietsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;

  font-size: 15px;
  border-color: ${theme.color.verde};
  min-height: 30px;

  padding: 3px;
  border-radius: 3px;
  border-color: ${theme.color.verdeOscuro}90;
`;

export const Diet = styled.div`
  ${Item(theme.color.celeste)}
`;
export const ButtomDelet = styled.button`
  /* position: relative; */
  font-size: 8px;
  margin: 3px;
  border-color: ${theme.color.rojo};
  background-color: firebrick;
`;

export const ButtomCreate = styled.button`
  /* position: absolute; */
  /* margin: 10px; */
  /* left: 30%;
  top: 1%; */
  width: 300px;
  font-size: 50px;
  border-radius: 40px;
  align-self: center;
  font-family: Pacifico, sans-serif;
  background-color: ${theme.color.celeste};
  border-color: white;
  color: white;
  &:disabled {
    background-color: ${theme.color.celeste}90;
    border-color: ${theme.color.celeste}90;
    color: #ffffff90;
  }
`;
export const Buttomscontainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0% 20% 0% 20%;
  /* flex-wrap: wrap; */
`;
export const OtherBottoms = styled.button`
  /* position: absolute; */
  /* margin: 10px; */
  /* left: 30%;
  top: 1%; */
  ${HomeBack(theme.color.celeste)}
`;
