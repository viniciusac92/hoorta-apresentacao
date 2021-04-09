import styled from "styled-components";
import theme from "../../../styles/theme";

export const LinkStyled = styled.a`
  font-family: ${theme.font};
  color: ${theme.color.black};
  cursor: pointer;
  text-decoration: none;

  font-size: ${(porps) =>
    porps.size === "small" ? "12px" : porps.size === "large" ? "16px" : null};
`;
