import ButtonLess from "../../atoms/ButtonLess";
import ButtonMore from "../../atoms/ButtonMore";
import Icon from "../../atoms/Icon";
import plus from "../../../assets/images/icons/plus.svg";
import minus from "../../../assets/images/icons/minus.svg";
import Text from "../../atoms/Text";
import ButtonCountContainer from "./styles";
import { useState, useEffect } from "react";

const ButtonCount = ({ children, amountOfProduct, setAmountOfProduct }) => {
  const [amount, setAmount] = useState(1);

  useEffect(() => {
    amountOfProduct === 1 && setAmount(amountOfProduct);
  }, [amountOfProduct]);

  const handleAmountAdd = () => {
    setAmount(amount + 1);
    setAmountOfProduct(amountOfProduct + 1);
  };

  const handleAmountSub = () => {
    amount >= 1 && setAmount(amount - 1);
    setAmountOfProduct(amountOfProduct + 1);
  };

  return (
    <ButtonCountContainer>
      <ButtonLess size="large" onClick={handleAmountSub}>
        <Icon src={minus} display={["block"]} />
      </ButtonLess>
      <Text size="medium" weigth="semiBold">
        {amount}
      </Text>
      <ButtonMore size="large" onClick={handleAmountAdd}>
        <Icon src={plus} display={["block"]} />
      </ButtonMore>
    </ButtonCountContainer>
  );
};

export default ButtonCount;
