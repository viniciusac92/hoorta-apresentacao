import styled from "styled-components";
import theme from "../../../styles/theme";

export const CardInfoStyled = styled.div`
  width: 90%;
  height: 164px;
  box-shadow: ${theme.shadow.on};
  background-color: ${theme.color.gray};
  margin: 0 5%;
  display: flex;
  flex-direction: column;
`;
