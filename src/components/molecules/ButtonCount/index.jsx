import ButtonLess from "../../atoms/ButtonLess";
import ButtonMore from "../../atoms/ButtonMore";
import Icon from "../../atoms/Icon";
import plus from "../../../assets/images/icons/plus.svg";
import minus from "../../../assets/images/icons/minus.svg";
import Text from "../../atoms/Text";
import ButtonCountContainer from "./styles";
import {useState} from "react";

const ButtonCount = () => {
	const [number, setNumber] = useState(0) || 0;

	return (
		<ButtonCountContainer>
			<ButtonLess
				size="large"
				onClick={() => number > 0 && setNumber(number - 1)}>
				<Icon src={minus} display={["block"]} />
			</ButtonLess>
			<Text size="medium" weigth="semiBold">
				{number}
			</Text>
			<ButtonMore size="large" onClick={() => setNumber(number + 1)}>
				<Icon src={plus} display={["block"]} />
			</ButtonMore>
		</ButtonCountContainer>
	);
};

export default ButtonCount;
