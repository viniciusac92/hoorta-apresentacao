import styled from "styled-components";
import theme from "../../../styles/theme";
import card_placeholder from "../../../assets/images/card_placeholder.png";

export const CardStyled = styled.div`
  height: 220px;
  width: 48vw;
  margin: 20px;
  border-radius: ${theme.radius};
  background-position: center;
  background-size: cover;
  background-image: url(${card_placeholder});
  overflow: hidden;

  p {
    margin-top: 9px;
    color: ${theme.color.white};
  }
`;

CardStyled.Background = styled.div`
  background-color: #09b44dc7;
  width: 100%;
  height: 100%;
`;

CardStyled.Container = styled.div`
  margin: -226px 0 0 190px;

  img {
    margin: -10px 0 0 321px;
    width: 20px;
  }

  @media (max-width: 1024px) {
    img {
      margin: -12px 0 0 124px;
    }
  }
`;

CardStyled.Image = styled.img`
  height: 225px;
  width: 170px;
`;
