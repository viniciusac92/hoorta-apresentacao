import Picture from "../../atoms/Picture";
import ProductCard from "../../atoms/ProductCard";
import TextProduct from "../../atoms/TextProduct";
import {
	ProductsList,
	TitleDivStyled,
	BottomContainer,
	ContainerInfoStyled,
} from "./styles";
import organic from "../../../assets/images/organic/organic.png";
import alface from "../../../assets/images/products/alface.jpg";
import TomateCereja from "../../../assets/images/products/tomateCereja.jpg";
import Abobora from "../../../assets/images/products/abobora.jpg";
import threeDots from "../../../assets/images/icons/threeDots.svg";
import Button from "../../atoms/Button";
import ButtonCount from "../../molecules/ButtonCount";
import TextHeader from "../../atoms/TextHeader";
import Link from "../../atoms/Link";
import Icon from "../../atoms/Icon";

const ProductsSection = ({productsData, currentStoreId}) => {
	const productImg = [{img: alface}, {img: TomateCereja}, {img: Abobora}];

	const addCart = async () => {
		try {
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<ProductsList>
			<TextHeader size={"large"}>Nome da Loja</TextHeader>
			<Link
				size="large"
				color="primary"
				to={`/store/profile/${currentStoreId}`}>
				Conheça mais sobre o produtor
			</Link>
			{productsData &&
				productsData.map((product, index) => (
					<ProductCard size="large" key={index}>
						<div>
							<Picture
								image={TomateCereja}
								width={["273px"]}
								height={["373px"]}
								top={["1px"]}
								left={["0px"]}
								position={["relative"]}
							/>
						</div>
						<ContainerInfoStyled>
							<div>
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
									<Icon src={threeDots} />
								</div>
								<TextProduct>{product.info.description}</TextProduct>
								<TextProduct weigth="semiBold">
									R$ {product.info.price}
								</TextProduct>
							</div>
							<BottomContainer>
								<ButtonCount />
								<Button color="primary" onClick={() => addCart()}>
									Adicionar
								</Button>
							</BottomContainer>
						</ContainerInfoStyled>
					</ProductCard>
				))}
		</ProductsList>
	);
};

export default ProductsSection;
