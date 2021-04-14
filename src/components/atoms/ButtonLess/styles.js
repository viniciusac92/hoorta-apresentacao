import styled from "styled-components";
import theme from "../../../styles/theme";

export const ButtonLessStyled = styled.button`
  border: none;
  box-shadow: ${theme.shadow.under};
  padding: 0px;
  color: ${theme.color.black};
  background-color: ${theme.color.gray};
  font-weight: ${({ size }) =>
    size === "large" ? theme.weight.medium : theme.weight.semiBold};
  line-height: ${({ size }) => size === "large" && "34px"};
  font-size: ${({ size }) => (size === "large" ? "30px" : "20px")};
  width: ${({ size }) => (size === "large" ? "45px" : "20px")};
  height: ${({ size }) => (size === "large" ? "45px" : "20px")};
`;
