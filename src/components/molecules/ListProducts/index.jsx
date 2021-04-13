import Picture from "../../atoms/Picture";
import footerPicture from "../../../assets/images/footerPicture.png";
import ProductCard from "../../atoms/ProductCard";
import TextProduct from "../../atoms/TextProduct";
import {TitleDivStyled} from "./styles";
import organic from "../../../assets/images/organic/organic.png";
import tomateCereja from "../../../assets/images/products/tomateCereja.jpg";
import abóbora from "../../../assets/images/products/abobora.jpg";
import alhoPoro from "../../../assets/images/products/alhoPoro.jpg";

const ListProducts = ({productsData}) => {
	const productImg = ["alface", "tomateCereja", "abóbora", "alho-poró"];

	// console.log(productsData[1]?.info.name.toLowerCase());

	return (
		<div>
			{productsData &&
				productsData.map((product, index) => (
					<ProductCard size="large" key={index}>
						<div>
							<Picture
								image={productImg.find(
									(imageName) => imageName === product.info.name.toLowerCase()
								)}
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
									{product.info.name}
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
							<TextProduct>{product.info.description}</TextProduct>
							<TextProduct weigth="semiBold">
								R$ {product.info.price}
							</TextProduct>
						</div>
					</ProductCard>
				))}
		</div>
	);
};

export default ListProducts;
