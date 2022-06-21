import { css } from "styled-components";

export const theme = {
  color: {
    rojo: `#dc143c`,
    rojoOp: `#dc143c90`,
    verde: `#7fff00`,
    verdeOscuro: `#228b22`,
    sombra: `#f0fff0`,
    celeste: `#20b2aa`,
  },
};
export const Item = (color) => {
  return css`
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    display: inline-block;
    padding: 1px 4px 1px 4px;
    max-width: 135px;
    margin: 1px 4px 1px 4px;
    cursor: pointer;
    border-radius: 4px;
    color: white;
    background-color: ${color};
    &:hover {
      transform: scale(1.05);
    }
  `;
};

export const HomeBack = (color) => {
  return css`
    /* position: absolute; */
    /* margin: 10px; */
    /* left: 30%;
  top: 1%; */
    width: 100px;
    font-size: 20px;
    align-self: center;
    border-radius: 10px;
    color: white;
    font-family: Pacifico, sans-serif;
    background-color: ${color};
  `;
};
export default theme;
