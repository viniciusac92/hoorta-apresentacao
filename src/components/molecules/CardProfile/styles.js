import styled from "styled-components";
import theme from "../../../styles/theme";
import card_placeholder from "../../../assets/images/card_placeholder.png";

export const CardStyled = styled.div`
  height: 170px;
  width: 62vw;
  margin: 20px;
  border-radius: ${theme.radius};
  background-position: center;
  background-size: cover;
  background-image: url(${card_placeholder});
  overflow: hidden;
  color: ${theme.color.white};

  p {
    margin-top: 9px;
    color: ${theme.color.white};
  }
`;

CardStyled.BackgroundG = styled.div`
  display: flex;
  background-color: #09b44dc7;
  width: 100%;

  div {
    margin: 10px;
  }
`;

CardStyled.Image = styled.img`
  height: 174px;
  width: 170px;
`;

CardStyled.Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 584px;
  height: 117px;
  flex-wrap: wrap;

  div {
    margin: 0px;
  }
`;
