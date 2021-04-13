import styled from "styled-components";
import theme from "../../../styles/theme";
import card_placeholder from "../../../assets/images/card_placeholder.png";

export const CardContainer = styled.div`
  height: 170px;
  width: 62vw;
  margin: 20px;
  border-radius: 39px;
  background-color: ${theme.color.primary};
  /* background-image: url(${card_placeholder}); */
  background-position: center;
  background-size: cover;
  overflow: hidden;
  color: ${theme.color.white};
  display: flex;

  img {
    height: 174px;
    width: 170px;
  }
  div {
    margin: 25px;
  }
  h1 {
    font-size: 40px;
  }

  p {
    margin-top: 6px;
    font-size: 23px;
  }
`;
