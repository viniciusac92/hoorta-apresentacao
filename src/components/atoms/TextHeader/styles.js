import styled from "styled-components";
import theme from "../../../styles/theme";

export const TextHeaderStyled = styled.p`
  text-align: center;
  font-weight: ${(props) =>
    props.fontWeight === "regular"
      ? "200"
      : props.fontWeight === "semi-bold"
      ? "400"
      : props.fontWeight === "bold"
      ? "600"
      : null};

  font-size: ${(props) =>
    props.size === "large" ? "50px" : props.size === "small" ? "36px" : null};

  color: ${(props) =>
    props.styled === "black"
      ? theme.color.black
      : props.styled === "white"
      ? theme.color.white
      : null};
`;
