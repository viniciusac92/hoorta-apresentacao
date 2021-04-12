import Picture from "../../atoms/Picture";
import Text from "../../atoms/Text";
import Header from "../../organisms/Header";
import footerPicture from "../../../assets/images/footerPicture.png";
import ProductCardStyled from "./styles";

const ListProducts = () => {
	const products = [
		{
			name: "Tangerina",
			price: 1.5,
			description:
				"Horta sem o cultivo de transgênicos e sem a utilização de agrotóxicos ou outras substâncias sintéticas, como hormônios, drogas veterinárias, adubos ou antibióticos.",
		},
		{
			name: "Abacaxi",
			price: 4.5,
			description:
				"Horta sem o cultivo de transgênicos e sem a utilização de agrotóxicos ou outras substâncias sintéticas, como hormônios, drogas veterinárias, adubos ou antibióticos.",
		},
	];

	return (
		<ProductCardStyled>
			<Header />
			{products.map((product, index) => (
				<TextNameStyled key={index} weigth="semiBold" size="large">
					{product.name}
				</TextNameStyled>
			))}
			<Picture
				image={footerPicture}
				width="444px"
				height="215px"
				position="absolute"
				top="100%"
			/>
		</ProductCardStyled>
	);
};

export default ListProducts;
