import styled from "styled-components";
import theme from "../../../styles/theme";

const CardCartStyled = styled.div`
  width: 50%;
  max-width: 620px;
  height: 280px;
  border-radius: ${theme.radius};
  background-color: ${theme.color.gray};
  box-shadow: ${theme.shadow.under};
  display: flex;
  justify-content: space-around;
`;

CardCartStyled.Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

CardCartStyled.Amount = styled.p`
  font-size: 48px;
  font-weight: ${theme.weight.regular};
`;

CardCartStyled.Text = styled.p`
  font-size: ${({ highlight }) => (highlight ? "36px" : "18px")};
  padding: 10px 0;
  text-align: left;
  color: ${({ highlight }) => !highlight && theme.color.textGray};
  font-weight: ${({ highlight }) => !highlight && theme.weight.semiBold};
`;

CardCartStyled.Price = styled.p`
  font-size: 36px;
  padding: 10px 0;
  font-weight: ${theme.weight.semiBold};
`;

export default CardCartStyled;
