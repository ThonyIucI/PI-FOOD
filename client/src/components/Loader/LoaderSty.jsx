import styled, { keyframes } from "styled-components";
import theme from "../Config/generales";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
export const LoaderSty = styled.div`
  border: 10px solid #f3f3f3;
  border-top: 10px solid ${theme.color.rojo};
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: ${rotate} 1s linear infinite;
`;
export const LoaderContainer = styled.div`
  margin-top: 15%;
`;
