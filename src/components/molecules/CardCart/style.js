import styled from "styled-components";
import theme from "../../../styles/theme";

const CardCartStyled = styled.div`
  width: 50%;
  max-width: 620px;
  height: 280px;
  border-radius: ${theme.radius};
  background-color: ${theme.color.grayDark};
  display: flex;
`;

CardCartStyled.Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

CardCartStyled.Amount = styled.h1`
  font-size: 48px;
  font-weight: ${theme.weight.regular};
  padding: 30px;
`;

export default CardCartStyled;
