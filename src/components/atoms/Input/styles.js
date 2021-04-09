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
  text-indent: 15px;
  width: ${(porps) =>
    porps.size === "small"
      ? "290px"
      : porps.size === "large"
      ? "356.67px"
      : null};

  height: ${(porps) =>
    porps.size === "small" ? "35px" : porps.size === "large" ? "45px" : null};

  font-size: ${(porps) =>
    porps.size === "small" ? "14px " : porps.size === "large" ? "16px" : null};
`;
