import {TextProductStyled} from "./styles";

const TextProduct = ({children, color, size, fontWeight, align}) => {
	return (
		<TextProductStyled
			color={color}
			size={size}
			fontWeight={fontWeight}
			align={align}>
			{children}
		</TextProductStyled>
	);
};

export default TextProduct;
