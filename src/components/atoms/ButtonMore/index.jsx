import {ButtonMoreStyled} from "./styles";

const ButtonMore = ({color, size, ...rest}) => {
	return <ButtonMoreStyled color={color} size={size} {...rest} />;
};

export default ButtonMore;
