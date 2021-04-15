import styled from "styled-components";
import theme from "../../../styles/theme";

export const CardInfoStyled = styled.div`
  width: ${(props) =>
    props.size === "small" ? "35%" : props.size === "large" ? "90%" : null};
  height: 164px;
  box-shadow: ${theme.shadow.on};
  background-color: ${theme.color.gray};
  margin: 16px 5%;
  display: flex;
  flex-direction: column;
`;
