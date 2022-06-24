import { css } from "styled-components";

export const theme = {
  color: {
    rojo: `#dc143c`,
    rojoOp: `#dc143c90`,
    verde: "#7CAA2D",
    verdeOscuro: `#228b22`,
    sombra: `#f0fff0`,
    celeste: "#138d90",
    naranja: "#FFB74C",
    morado: "#FF00FF",
  },
};
export const Item = (color) => {
  return css`
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    display: inline-block;
    padding: 1px 4px 1px 4px;
    max-width: 190px;
    margin: 1px 1px 1px 4px;
    text-align: center;
    cursor: pointer;
    border: 1px;
    border-radius: 4px;
    color: white;
    background-color: ${color};
    &:hover {
      transform: scale(1.05);
      border: 2px solid gray;
    }
  `;
};

export const HomeBack = (color) => {
  return css`
    width: 100px;
    border-radius: 25px;
    background-color: ${color};
    border: 2px solid white;
    border-style: outset;
    font-size: 20px;
    text-align: center;
    font-family: Pacifico, sans-serif;
    color: white;
    margin: 1%;
    :hover {
      transform: scale(1.02);
      cursor: pointer;
    }
  `;
};
export const InputText = () => css`
  height: 26px;
  width: 80%;
  border-radius: 7px;
  border: none;
  font-size: 12px;
  padding: 5px;

  :focus {
    outline: 0 none;
    font-size: 15px;
    padding-left: 4%;
  }

  ::placeholder {
    /*
      Se aplica específicamente
      al texto del placeholder */
    color: gray;
    text-align: left;
    font-size: 14px;
    padding-left: 3%;
    font-family: "M PLUS 1 Code", sans-serif;
    /*
    font-family: "Comforter", cursive;
    */
  }
`;
export const ShadowText = (x1, x2, color) => css`
  text-shadow: ${x1} 0 ${color}, ${x2} 0 ${color}, 0 ${x2} ${color},
    0 ${x1} ${color};
`;

export default theme;
