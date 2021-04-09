import { styled } from "styled-components";
import theme from "../../../styles/theme";

export const TextStyled = styled.p`
  font-family: ${theme.font};

  font-weight: ${(props) =>
    props.weight === "medium"
      ? theme.weight.medium
      : props.weigth === "semiBold"
      ? theme.weight.medium
      : null};

  font-size: ${(props) =>
    props.size === "small"
      ? "18px"
      : props.size === "medium"
      ? "24px"
      : props.size === "large"
      ? "40px"
      : null};
`;
