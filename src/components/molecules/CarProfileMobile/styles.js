import styled from "styled-components";
import theme from "../../../styles/theme";
import card_placeholder from "../../../assets/images/card_placeholder.png";

export const CardStyled = styled.div`
  width: 100%;
  height: 31vh;
  border-radius: 0px 0 100% 100%;
  background-image: url(${card_placeholder});
  background-size: cover;
  overflow: hidden;
  background-position: center;
`;

CardStyled.Background = styled.div`
  background-color: #09b44dc7;
  height: 100%;
  width: 100%;
`;

CardStyled.Title = styled.div`
  padding-top: 60px;
  text-align: center;

  p {
    color: ${theme.color.white};
  }
`;

CardStyled.Icon = styled.div`
  position: absolute;
  right: 0;
  top: -3px;

  img {
    width: 28px;
  }
`;

CardStyled.Image = styled.div`
  text-align: center;
  margin-top: -77px;

  img {
    height: 130px;
    width: 130px;
    border-radius: 100%;
  }
`;

CardStyled.Container = styled.div``;
