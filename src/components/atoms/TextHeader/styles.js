import styled from "styled-components";
import theme from "../../../styles/theme";

export const TextHeaderStyled = styled.p`
  text-align: center;
  font-weight: ${({ fontWeight }) =>
    fontWeight === "medium"
      ? theme.weight.medium
      : fontWeight === "semiBold"
      ? theme.weight.semiBold
      : null};

  font-size: ${({ size }) =>
    size === "large" ? "50px" : size === "medium" ? "36px" : null};

  color: ${({ color }) =>
    color === "black"
      ? theme.color.black
      : color === "white"
      ? theme.color.white
      : color === "primary"
      ? theme.color.primary
      : null};

  @media screen and (min-width: 780px) {
    text-align: ${({ align }) => align || "center"};
  }
`;
