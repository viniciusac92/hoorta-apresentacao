import styled from "styled-components";
import theme from "../../../styles/theme";

export const CardStyled = styled.div`
  margin: 5px;
  border: none;
  border-radius: ${theme.radius};
  box-shadow: ${theme.shadow.under};
  width: ${({ size }) => (size === "large" ? "1037px" : "328px")};
  height: ${({ size }) => (size === "large" ? "374px" : "97px")};
  display: flex;
  flex-direction: row;
`;
