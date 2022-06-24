import styled from "styled-components";
import theme, { InputText } from "../Config/generales";
// import searchImage from "../../img/search.png";
// import { Search } from " @styled-icons/boxicons-regular";

export const SearchContainer = styled.div`
  position: relative;
  display: flex;
  justify-items: center;
  align-items: center;
  width: 25%;
  height: 34px;
  padding: 4px;
`;

export const InputSearchbar = styled.input`
  ${InputText()}/* background-image: url("data:image/png;base64,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");
  background-position: 0.001px 0.001px;
  background-repeat: no-repeat; */
`;
// export const SearchButtom = styled.button`
//   ${Search} {
//     color: gray;
//   }
// `;
export const SearchButtom = styled.button`
  color: white;
  background-color: ${theme.color.rojo};

  border-color: white;
  margin: 0;
  height: 26px;
  border-radius: 8px;
  /* border: none; */
  font-size: 13px;
  &:disabled {
    transform: none;
    background-color: ${theme.color.rojoOp};
    color: ${theme.color.sombra};
    cursor: not-allowed;
  }
`;
