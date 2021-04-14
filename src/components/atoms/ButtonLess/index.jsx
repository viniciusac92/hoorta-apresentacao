import {ButtonLessStyled} from "./styles";

const ButtonLess = ({color, size, ...rest}) => {
	return <ButtonLessStyled color={color} size={size} {...rest} />;
};

export default ButtonLess;
