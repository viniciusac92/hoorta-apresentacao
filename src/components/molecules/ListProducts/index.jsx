import Picture from "../../atoms/Picture";
import Header from "../../organisms/Header";
import footerPicture from "../../../assets/images/footerPicture.png";
import ProductCard from "../../atoms/ProductCard";
import TextProduct from "../../atoms/TextProduct";
import {TitleDivStyled} from "./styles";
import organic from "../../../assets/images/organic/organic.png";
import tomateCereja from "../../../assets/images/products/tomateCereja.jpg";

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
		<div>
			<Header />
			{products.map((product, index) => (
				<ProductCard size="large" key={index}>
					<div>
						<Picture
							image={tomateCereja}
							width={["273px"]}
							height={["373px"]}
							top={["1px"]}
							left={["0px"]}
							position={["relative"]}
						/>
					</div>
					<div>
						<TitleDivStyled>
							<TextProduct weigth="semiBold" size="large" color="primary">
								{product.name}
							</TextProduct>

							<Picture
								image={organic}
								width={["58px"]}
								height={["65px"]}
								top={["20px"]}
								left={["85px"]}
								position={["relative"]}
							/>
						</TitleDivStyled>
						<TextProduct>{product.description}</TextProduct>
						<TextProduct weigth="semiBold">R$ {product.price}</TextProduct>
					</div>
				</ProductCard>
			))}
			<Picture
				image={footerPicture}
				width={["320px", "444px"]}
				height={["155px", "215px"]}
				position={["relative", "absolute"]}
				top={["0px", "calc(100% - 215px)"]}
				left={["0", "0"]}
			/>
		</div>
	);
};

export default ListProducts;
