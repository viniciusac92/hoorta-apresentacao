import styled from "styled-components";
import theme from "../../../styles/theme";

export const TextStyled = styled.p`
  height: 100%;
  font-family: ${theme.font};
  color: ${theme.color.black};

  font-weight: ${(props) =>
    props.weight === "regular"
      ? theme.weight.regular
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
