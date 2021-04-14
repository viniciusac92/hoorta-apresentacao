import styled from "styled-components";
import theme from "../../../styles/theme";

const handleColorTypes = (type, color) => {
  switch (type) {
    case "background":
      return color === "primary"
        ? theme.color.primary
        : color === "secondary"
        ? theme.color.white
        : null;

    case "text":
      return color === "primary"
        ? theme.color.white
        : color === "secondary"
        ? theme.color.primary
        : null;

    default:
      return null;
  }
};

export const ButtonStyled = styled.button`
  border: none;
  border-radius: ${theme.radius};
  box-shadow: ${theme.shadow.under};
  padding: 10px;
  color: ${({ color }) => handleColorTypes("text", color)};
  background-color: ${({ color }) => handleColorTypes("background", color)};
  font-weight: ${({ size }) =>
    size === "large" ? theme.weight.medium : theme.weight.semiBold};
  line-height: ${({ size }) => size === "large" && "34px"};
  font-size: ${({ size }) => (size === "large" ? "30px" : "20px")};
  width: ${({ size }) => (size === "large" ? "300px" : "356.67px")};
  height: ${({ size }) => (size === "large" ? "91px" : "45px")};

  @media screen and (min-width: 780px) {
    line-height: ${({ size }) => size === "large" && "54px"};
    font-size: ${({ size }) => (size === "large" ? "36px" : "20px")};
    width: ${({ size }) => (size === "large" ? "320px" : "356.67px")};
  }
`;
