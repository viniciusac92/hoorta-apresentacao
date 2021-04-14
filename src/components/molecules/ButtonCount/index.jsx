import ButtonLess from "../../atoms/ButtonLess";
import ButtonMore from "../../atoms/ButtonMore";
import Icon from "../../atoms/Icon";
import plus from "../../../assets/images/icons/plus.svg";
import minus from "../../../assets/images/icons/minus.svg";
import Text from "../../atoms/Text";
import ButtonCountContainer from "./styles";

const ButtonCount = () => {
	return (
		<ButtonCountContainer>
			<ButtonLess size="large">
				<Icon src={minus} />
			</ButtonLess>
			<Text size="medium">1</Text>
			<ButtonMore size="large">
				<Icon src={plus} />
			</ButtonMore>
		</ButtonCountContainer>
	);
};

export default ButtonCount;
