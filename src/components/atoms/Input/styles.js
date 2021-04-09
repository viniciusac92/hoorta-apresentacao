import styled from "styled-components";
import theme from "../../../styles/theme";

export const InputStyled = styled.input`
  border: none;
  outline: none;
  border-radius: ${theme.radius};
  box-shadow: ${theme.shadow};
  font-family: ${theme.font};
  background-color: ${theme.color.gray};
  color: ${theme.color.black};

  width: ${(porps) =>
    porps.size === "small"
      ? "290px"
      : porps.size === "large"
      ? "356.67px"
      : null};

  height: ${(porps) =>
    porps.size === "small" ? "35px" : porps.size === "large" ? "45px" : null};

  /* ::-webkit-input-placeholder {
    color: ${theme.color.textGray};
  } */
`;
