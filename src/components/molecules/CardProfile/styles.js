import styled from "styled-components";
import theme from "../../../styles/theme";
import card_placeholder from "../../../assets/images/card_placeholder.png";

const CardStyled = styled.div`
  height: 268px;
  width: 59vw;
  margin: 20px;
  border-radius: ${theme.radius};
  background-position: center;
  background-size: cover;
  background-image: url(${card_placeholder});
  overflow: hidden;

  p {
    margin-top: 12px;
    color: ${theme.color.white};
  }
`;

CardStyled.Background = styled.div`
  background-color: #09b44dc7;
  width: 100%;
  height: 100%;
`;

CardStyled.Container = styled.div`
  margin: -268px 0 0 196px;

  /* p:not(:first-child) {
    font-size: 22px;
  } */

  /* img {
    margin: -49px 0 0 581px;
    width: 28px;
  }

  @media (max-width: 1024px) {
    img {
      margin: -49px 0 0 335px;
    }
  } */
`;

CardStyled.Image = styled.img`
  height: 279px;
  width: 179px;
`;

export default CardStyled;
