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
  box-shadow: ${theme.shadow};
  padding: 10px;
  line-height: ${({ size }) => size === "large" && "54px"};
  cursor: pointer;

  color: ${({ color }) => handleColorTypes("text", color)};

  background-color: ${({ color }) => handleColorTypes("background", color)};

  font-size: ${({ size }) => (size === "large" ? "36px" : "20px")};

  font-weight: ${({ size }) =>
    size === "large" ? theme.weight.medium : theme.weight.semiBold};

  width: ${({ size }) => (size === "large" ? "319px" : "356.67px")};

  height: ${({ size }) => (size === "large" ? "81px" : "45px")};
`;
