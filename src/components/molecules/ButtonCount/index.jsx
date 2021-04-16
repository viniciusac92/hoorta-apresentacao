import ButtonLess from "../../atoms/ButtonLess";
import ButtonMore from "../../atoms/ButtonMore";
import Icon from "../../atoms/Icon";
import plus from "../../../assets/images/icons/plus.svg";
import minus from "../../../assets/images/icons/minus.svg";
import Text from "../../atoms/Text";
import ButtonCountContainer from "./styles";
<<<<<<< HEAD
import { useState, useEffect } from "react";
=======
import {useState} from "react";
import TextProduct from "../../atoms/TextProduct";
>>>>>>> c52a38ae32cf2218f166215751b763494c31c1f7

const ButtonCount = ({ children, amountOfProduct, setAmountOfProduct }) => {
  const [amount, setAmount] = useState(1);

<<<<<<< HEAD
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
=======
	return (
		<ButtonCountContainer>
			<ButtonLess
				size="large"
				onClick={() => number > 0 && setNumber(number - 1)}>
				<Icon
					src={minus}
					display={["block", "block"]}
					height={["3vw", "6vw"]}
				/>
			</ButtonLess>
			<TextProduct size="medium" weigth="semiBold">
				{number}
			</TextProduct>
			<ButtonMore size="large" onClick={() => setNumber(number + 1)}>
				<Icon src={plus} display={["block", "block"]} />
			</ButtonMore>
		</ButtonCountContainer>
	);
>>>>>>> c52a38ae32cf2218f166215751b763494c31c1f7
};

export default ButtonCount;
