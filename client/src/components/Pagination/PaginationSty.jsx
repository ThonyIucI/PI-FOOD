import styled, { css } from "styled-components";

export const Container = styled.div`
  /* position: fixed; */
  display: flex;
  justify-content: center;
  padding: 1% 10% 1% 10%;
  top: 200px;
`;
const buttomPagination = css`
  border-radius: 60px;
  padding-left: 5px;
  padding-right: 5xp;
  border-color: #80808020;
  text-align: center;
  color: gray;
  font-size: large;
  margin: 5px;
  &:hover {
    background-color: #80808020;
    border-color: #80808020;
    color: black;
  }
`;
export const ButtonPage = styled.button`
  width: 60px;
  height: 60px;
  ${buttomPagination}
`;
export const ButtonPeviusNext = styled.button`
  align-self: center;
  width: 120px;
  height: 50px;
  ${buttomPagination}
  &:disabled {
    display: none;
  }
`;
