import styled, { css } from "styled-components";

export const Container = styled.div`
  /* position: fixed; */
  display: flex;
  /* background-color: #ffffff60; */
  /* margin: 1% 15% 1% 15%; */
  justify-content: center;
  padding: 1% 10% 1% 10%;
  border-radius: 50px;
  top: 200px;
`;
const buttomPagination = css`
  border-radius: 60px;
  padding: 0 5px 0 5px;
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
