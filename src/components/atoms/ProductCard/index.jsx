import {CardStyled} from "./styles";

const ProductCard = ({size, ...rest}) => {
	return <CardStyled size={size} {...rest} />;
};

export default ProductCard;
