import ButtonLess from "../../atoms/ButtonLess";
import ButtonMore from "../../atoms/ButtonMore";
import Icon from "../../atoms/Icon";
import plus from "../../../assets/images/icons/plus.svg";
import minus from "../../../assets/images/icons/minus.svg";
import Text from "../../atoms/Text";
import ButtonCountContainer from "./styles";
import {useState} from "react";
import TextProduct from "../../atoms/TextProduct";

const ButtonCount = () => {
	const [number, setNumber] = useState(0) || 0;

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
};

export default ButtonCount;
