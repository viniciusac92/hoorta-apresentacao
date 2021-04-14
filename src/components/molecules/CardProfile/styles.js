import styled from "styled-components";
import theme from "../../../styles/theme";
import card_placeholder from "../../../assets/images/card_placeholder.png";

export const CardStyled = styled.div`
  /* height: 203px; */
  width: 47vw;
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
  display: flex;
  background-color: #09b44dc7;
  width: 100%;
`;

CardStyled.Title = styled.div`
  position: absolute;
  margin: 10px 0 0 189px;
`;

CardStyled.Icon = styled.div`
  margin: -35px 0 0 393px;
  img {
    width: 20px;
  }
`;

CardStyled.Image = styled.img`
  height: 207px;
  width: 170px;
`;

CardStyled.Container = styled.div`
  /* display: flex;
  flex-direction: column; */
  /* width: 483px;
  height: 93px; */
  /* flex-wrap: wrap; */
  margin: 53px 0 0 190px;
  position: absolute;
`;
