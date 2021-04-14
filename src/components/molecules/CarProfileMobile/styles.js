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

  p {
    /* margin-top: 9px; */
  }
`;

CardStyled.Background = styled.div`
  /* display: flex; */
  background-color: #09b44dc7;
  height: 100%;
  width: 100%;
`;

CardStyled.Title = styled.div`
  /* margin: 16px 0 0 20px; */
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
  /* margin: 0px 0 0 322px; */
`;

CardStyled.Image = styled.div`
  text-align: center;
  margin-top: -56px;

  img {
    height: 130px;
    width: 130px;
    border-radius: 100%;
  }
`;

CardStyled.Container = styled.div`
  /* display: flex;
  flex-direction: column;
  width: 483px; */
  /* flex-wrap: wrap;
  margin: 55px 0 0 190px;
  position: absolute; */
`;

/* height: 93px; */

// - para desktop
// height: 203px;
//   width: 56vw;
//   margin: 20px;
//   border-radius: ${theme.radius};
//   background-position: center;
//   background-size: cover;
//   background-image: url(${card_placeholder});
//   overflow: hidden;
//   color: ${theme.color.white};
