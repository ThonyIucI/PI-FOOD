import styled from "styled-components";
import { ShadowText, theme } from "../Config/generales";

import imageTitle from "../../img/imageTitle.jpg";
import imageLandPage from "../../img/imageLandPage.jpg";

export const Content = styled.div`
  /* Texto */
  text-align: center;
  font-family: Pacifico, sans-serif;
  padding: 3% 10% 3% 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const PtitleL = styled.p`
  padding-inline: 10%;
  margin: 0;
  padding: 0 5% 0 2%;
  font-size: 80px;
  color: ${theme.color.rojo};
  text-align: center;
  ${ShadowText("-8px", "8px", "white")}
  transform: rotate(-8deg);
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    /* transform: rotate(-8deg); */
  }
`;

export const Ptitle = styled.div`
  max-height: 350px;
  width: 450px;
  font-size: 100px;

  color: white;
  border: 4px solid white;
  border-radius: 50%;
  ${ShadowText("-1px", "1px", "black")}

  margin: 1% 4% 1% 4%;
  padding: 1% 0 2% 0;
  background: url(${imageTitle});
  &:hover {
    transform: scale(1.02);
  }
`;

export const DivContent = styled.div`
  padding: 8% 2% 2% 2%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0;
  /* background-color: ${theme.color.sombra} */
  background: url(${imageLandPage});
  position: relative;
  background-size: cover;

  width: 50%;
  height: 30%;
  border-radius: 40px;
  border: 4px solid white;
  ${ShadowText("-1px", "1px", "white")}

  &:hover {
    transform: scale(1.01);
  }
`;
export const P = styled.p`
  padding-inline: 10%;
  font-size: x-large;
  /* color: ${theme.color.rojo}; */
  color: black;
  text-align: justify;
  font-size: 35px;
  margin: 0;
`;

export const BotonHome = styled.button`
  font-family: Pacifico, monospace;
  width: 180px;
  height: 80px;
  border-radius: 20px;
  border: 2px solid white;
  /* border-color: ${theme.color.rojo}; */
  background: url(${imageTitle});
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 80px;
  &:hover {
    border-color: ${theme.color.rojoOp};
    background-color: ${theme.color.rojoOp};
  }
`;
