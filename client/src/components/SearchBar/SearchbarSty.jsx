import styled from "styled-components";
import theme from "../Config/generales";
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
`;
