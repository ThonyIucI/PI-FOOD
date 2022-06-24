import styled from "styled-components";
import {
  theme,
  Item,
  HomeBack,
  InputText,
  ShadowText,
} from "../Config/generales";

import image from "../../img/image.jpg";
import imageTitle from "../../img/imageTitle.jpg";
import imageHeader from "../../img/imageHeader.jpg";

export const FromContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2% 10% 2% 10%;
`;
export const FormGroup = styled.div`
  min-width: 450px;
  min-height: 400px;
  border-radius: 60px;
  padding: 7% 5% 2% 5%;
  font-family: Pacifico, sans-serif;
  border: 3px solid white;
  font-size: x-large;
  text-shadow: 1px 1px white;
  background: url(${image});

  position: relative;
  background-size: cover;
`;
export const Header = styled.div`
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  align-items: center;

  height: 8%;

  margin: 20px 20% 0 20%;
  padding: 1% 0 1% 0;
  border: 4px solid white;
  border-radius: 80px;
  background: url(${imageHeader});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
export const Buttomscontainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const BackB = styled.div`
  ${HomeBack(theme.color.celeste)}
`;
export const HomeB = styled.div`
  ${HomeBack(theme.color.rojo)}
`;
export const Refresh = styled.div`
  ${HomeBack(theme.color.naranja)}
`;
export const AddStep = styled.div`
  ${HomeBack(theme.color.verdeOscuro)}
  font-size: 18px;
  text-shadow: none;
`;
export const Ptitle = styled.div`
  min-width: 420px;
  font-size: 45px;
  color: white;
  border: 4px solid white;
  border-radius: 80px;
  ${ShadowText("-1px", "1px", "black")}

  height: 10%;
  margin: 1% 4% 1% 4%;
  padding: 1% 0 2% 0;
  background: url(${imageTitle});
  &:hover {
    transform: scale(1.02);
  }
`;
export const ButtomCreate = styled.button`
  border-radius: 50px;
  width: 280px;
  font-size: 50px;
  margin: 0;
  align-self: center;
  font-family: Pacifico, sans-serif;
  background-color: ${theme.color.verdeOscuro};
  border-color: white;
  color: white;
  &:disabled {
    background-color: ${theme.color.verde};
    color: #ffffff90;
    cursor: not-allowed;
  }
`;

export const Span = styled.p`
  margin: 0;
  font-size: 20px;
  color: white;
  text-align: center;
`;
export const Label = styled.label`
  margin-bottom: 1px;
  color: ${theme.color.verdeOscuro};
  display: block;
  ${ShadowText("-1px", "0", "white")};
`;

export const Input = styled.input`
  ${InputText()}
  width: 100%;
  border-radius: 30px;
`;
export const InputTxt = styled.input`
  ${InputText()}
  min-width: 100%;
  height: 150px;
  border-radius: 25px;
  resize: none;
  overflow: scroll;
  margin: 1% 0 2% 0;
`;
export const ShowTxt = styled.div`
  font-size: 18px;
  padding: 5px;
  text-align: justify;
  min-width: 100%;
  height: 110px;
  border-radius: 25px;
  resize: none;
  overflow: auto;
  margin: 1% 0 2% 0; ;
`;
export const Message = styled.span`
  padding: 2px 0 5px 10px;
  color: ${theme.color.rojo};
  display: block;
  font-family: monospace;
  font-size: 17px;
  text-shadow: none;
`;

export const Select = styled.select`
  margin-left: 5%;
  width: 25%;
  border-radius: 10px;
  text-align: center;

  font-family: Pacifico, monospace;
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
  padding-top: 2px;
  margin-top: 1px;
  height: 22px;
  border-radius: 25px;
  text-shadow: none;
`;
export const ButtomDelet = styled.button`
  width: 12%;
  font-size: 8px;
  margin: 3px;
  border-color: ${theme.color.rojo};
  background-color: firebrick;

  color: white;
  text-align: center;
`;
