import CardCartStyled from "./style";
import Text from "../../atoms/Text";
import Icon from "../../atoms/Icon";

const CardCart = ({ amount, price, productName, productorName }) => {
  return (
    <CardCartStyled>
      <CardCartStyled.Wrap>
        <CardCartStyled.Amount>{amount} X</CardCartStyled.Amount>
      </CardCartStyled.Wrap>
      <CardCartStyled.Wrap>
        <Text>{productName}</Text>
        <Text>{productorName}</Text>
        <Text>R${price}</Text>
      </CardCartStyled.Wrap>
      <CardCartStyled.Wrap>
        <Icon />
      </CardCartStyled.Wrap>
    </CardCartStyled>
  );
};

export default CardCart;
