import styled, { css } from "styled-components";
import theme, { Item, HomeBack, ShadowText } from "../Config/generales";

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  /* background: ${theme.color.rojoOp}; */
  border-radius: 150px;
  border: 5px solid white;
  opacity: 90;
  margin: 1%;
  padding: 4% 7% 4% 7%;
  height: 550px;
  background: url("https://besthqwallpapers.com/Uploads/22-2-2020/122798/thumb2-brown-wooden-boards-close-up-horizontal-wooden-boards-brown-wooden-texture-wooden-lines.jpg");
  position: relative;
  background-size: cover;
  /* filter: blur(6px); */
`;
export const Buttomscontainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  /* padding: 0% 2% 0% 2%; */
  min-height: 150px;
`;
export const Home = styled.button`
  ${HomeBack(theme.color.rojo)};
`;
export const Back = styled.button`
  ${HomeBack(theme.color.verdeOscuro)}
`;
export const Title = styled.div`
  align-items: flex-end;
  color: black;
  background: #ffffff80;
  border-radius: 200px;
  font-size: 50px;
  padding: 0 3.5px 0 3.5px;
  text-align: center;
  text-shadow: 2px 2px 5px gray;
  text-decoration: underline;
  width: 100%;

  /* text-shadow: -8px 3px 4px black, 3px 2px 4px black; */
  /* ${ShadowText("3px", "3px", "black")} */
  &:hover {
    /* text-shadow: 0 0 3px ${theme.color.rojo}, 0 0 5px ${theme.color
      .verdeOscuro}; */
    color: white;
  }
`;
export const Score = styled.button`
  min-width: 100px;
  /* top: 2%;
  margin-right: 0%; */
  font-size: 13px;
  ${HomeBack(theme.color.celeste)}
  /* border: none; */
  border:5px solid white;
  text-align: center;
  font-size: 99%;
  padding-bottom: 1.5%;
  display: flex;

  align-items: center;
  justify-content: center;
  flex-direction: column-reverse;
`;

export const BodyContainer = styled.div`
  width: 100%;
  display: flex;
  justify-items: stretch;
  border-radius: 50px;
  /*
  background-color: #ffffff60;
  opacity: 90;
  margin: 5%;
  padding: 2%; */
  height: 650px;
  padding: 2% 0% 1% 4%;
`;
export const DetailContainer = styled.div`
  padding: 1.5% 0 0 1.5%;
  width: 740px;
  height: 400px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  /* flex-direction: column; */
  overflow: auto;
  background: #ffffff80;
  border-radius: 0 50px 50px 50px;
  /* background: ${theme.color.sombra}; */
  border: 2px white;
`;
export const Etiqueta = styled.div`
  width: 80%;
  font-size: 30px;
  margin-top: 10%;
  color: ${theme.color.celeste};
  font-family: Pacifico, monospace;
  border: none;
  border-radius: 9px;
  background-color: white;
  &:hover {
    transform: scale(1.1);
  }
`;
export const Image = styled.img`
  max-height: 350px;
  max-width: 350px;
  border: 8px solid white;
  border-radius: 10px;
  margin-bottom: 2% 0 2% 0;
  :hover {
    transform: scale(1.02);
    background-color: #ffffff60;
  }
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
  text-decoration: underline;
`;
export const P = styled.p`
  padding: 1% 5% 1% 5%;
  width: 600px;
  height: 400px;
  border-radius: 20px;
  font-size: larger;
  color: #000000;
  text-align: justify;
  text-shadow: none;
  margin: 0;
  display: inline;
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
  /* max-height: 18px; */
`;
export const Dish = styled.div`
  font-size: 20px;
  ${Item("#663399")}
  text-shadow: none;
`;

export const ButtonSelecContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 15%;
  padding: 1%;
  background: #ffffff80;
  border-radius: 50px 0 0 50px;
  height: 180px;
  margin-left: 5px;
  /* background: ${theme.color.sombra}; */
  border: 2px white;
`;
const adicional = css`
  text-shadow: none;
  min-width: 150px;
  margin: 3% 0 3% 0;
`;
export const ButomDetail = styled.button`
  ${HomeBack(theme.color.celeste)}
  ${adicional}
`;
export const ButomDetail1 = styled.button`
  ${HomeBack(theme.color.verdeOscuro)}
  ${adicional}
`;
export const ButomDetail2 = styled.button`
  ${HomeBack(theme.color.naranja)}
  ${adicional}
`;
