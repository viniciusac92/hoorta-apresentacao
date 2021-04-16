import Picture from "../../atoms/Picture";
import ProductCard from "../../atoms/ProductCard";
import TextProduct from "../../atoms/TextProduct";
import {
<<<<<<< HEAD
  ProductsListStyled,
  TitleDivStyled,
  BottomContainerStyled,
  ContainerInfoStyled,
  TopContainerStyled,
=======
	ProductsListStyled,
	TitleDivStyled,
	BottomContainerStyled,
	ContainerInfoStyled,
	TopContainerStyled,
	ProductCardStyled,
>>>>>>> c52a38ae32cf2218f166215751b763494c31c1f7
} from "./styles";
import organic from "../../../assets/images/organic/organic.png";
import alface from "../../../assets/images/products/alface.jpg";
import TomateCereja from "../../../assets/images/products/tomateCereja.jpg";
import Abobora from "../../../assets/images/products/abobora.jpg";
import threeDots from "../../../assets/images/icons/threeDots.svg";
import Button from "../../atoms/Button";
import ButtonCount from "../../molecules/ButtonCount";
import Link from "../../atoms/Link";
import ModalCreateProduct from "../ModalCreateProduct";
<<<<<<< HEAD
import { useState } from "react";

const ProductsSection = ({ productsData, currentStoreId }) => {
  const productImg = [{ img: alface }, { img: TomateCereja }, { img: Abobora }];
  const [amountOfProduct, setAmountOfProduct] = useState(1);
=======
import {useData} from "../../../providers/UserContext";
import {useStores} from "../../../providers/StoresContext";
import Icon from "../../atoms/Icon";

const ProductsSection = ({productsData, currentStoreId}) => {
	const {checkOwner} = useData();
	const {storeData} = useStores();

	const productImg = [{img: alface}, {img: TomateCereja}, {img: Abobora}];
>>>>>>> c52a38ae32cf2218f166215751b763494c31c1f7

  const addCart = (product) => {
    const actualCart = JSON.parse(localStorage.getItem("cart")) || [];
    const alreadyInTheCart = actualCart.findIndex(
      (productInCart) => productInCart.info.name === product.info.name
    );
    if (alreadyInTheCart >= 0) {
      const productInCart = actualCart[alreadyInTheCart].info;
      productInCart.amount += amountOfProduct;
      localStorage.setItem("cart", JSON.stringify([...actualCart]));
      setAmountOfProduct(1);
      return;
    }
    product.info.amount = amountOfProduct;
    localStorage.setItem("cart", JSON.stringify([...actualCart, product]));
    setAmountOfProduct(1);
  };

<<<<<<< HEAD
  return (
    <ProductsListStyled>
      <div>
        <TextProduct size={"large"} color={"black"}>
          Nome da loja - Produtor
        </TextProduct>
        <Link
          size={"large"}
          color={"primary"}
          to={`/store/profile/${currentStoreId}`}
        >
          Conheça mais sobre o produtor
        </Link>
      </div>
      <div>
        <ModalCreateProduct currentStoreId={currentStoreId} />
      </div>

      {productsData &&
        productsData.map((product, index) => (
          <ProductCard size={"large"} key={index}>
            <ContainerInfoStyled>
              <div>
                <TopContainerStyled>
                  <TitleDivStyled>
                    <TextProduct
                      weigth={"semiBold"}
                      size={"large"}
                      color={"primary"}
                    >
                      {product.info.name}
                    </TextProduct>
                    <Picture
                      image={organic}
                      width={["15px", "58px"]}
                      height={["15px", "65px"]}
                      top={["20px"]}
                      left={["85px"]}
                      position={["relative"]}
                    />
                  </TitleDivStyled>
                  <Icon src={threeDots} display={["block", "none"]} />
                </TopContainerStyled>
                <TextProduct size={"medium"} color={"black"}>
                  {product.info.description}
                </TextProduct>
                <TextProduct weigth={"semiBold"}>
                  R$ {product.info.price}
                </TextProduct>
              </div>
              <BottomContainerStyled>
                <ButtonCount
                  amountOfProduct={amountOfProduct}
                  setAmountOfProduct={setAmountOfProduct}
                >
                  {amountOfProduct}
                </ButtonCount>
                <Button
                  color={"primary"}
                  onClick={() => addCart(product)}
                  size="medium"
                >
                  Adicionar
                </Button>
              </BottomContainerStyled>
            </ContainerInfoStyled>
          </ProductCard>
        ))}
    </ProductsListStyled>
  );
=======
	return (
		<ProductsListStyled>
			<div>
				<TextProduct size={"large"} color={"black"}>
					{/* {storeData.businessName} */}
				</TextProduct>
				<Link
					size={"large"}
					color={"primary"}
					to={`/store/profile/${currentStoreId}`}>
					Conheça mais sobre o produtor
				</Link>
			</div>

			<div>
				{checkOwner(currentStoreId) && (
					<ModalCreateProduct currentStoreId={currentStoreId} />
				)}
			</div>

			{productsData &&
				productsData.map((product, index) => (
					<ProductCardStyled size={"large"} key={index}>
						<ContainerInfoStyled>
							<div>
								<TopContainerStyled>
									<TitleDivStyled>
										<TextProduct
											weigth={"semiBold"}
											size={"large"}
											color={"primary"}>
											{product.info.name}
										</TextProduct>
										<Picture
											image={organic}
											width={["15px", "58px"]}
											height={["15px", "65px"]}
											top={["20px"]}
											left={["85px"]}
											position={["relative"]}
										/>
									</TitleDivStyled>
									{checkOwner(currentStoreId) && (
										<Icon
											src={threeDots}
											display={["block", "block"]}
											height={["3vw", "6vw"]}
										/>
									)}
								</TopContainerStyled>
								<TextProduct size={"medium"} color={"black"}>
									{product.info.description}
								</TextProduct>
								<TextProduct size={"medium"} weigth={"semiBold"}>
									R$ {product.info.price}
								</TextProduct>
							</div>
							<BottomContainerStyled>
								<ButtonCount />
								<Button
									color={"primary"}
									size="medium"
									onClick={() => addCart()}>
									Adicionar
								</Button>
							</BottomContainerStyled>
						</ContainerInfoStyled>
					</ProductCardStyled>
				))}
		</ProductsListStyled>
	);
>>>>>>> c52a38ae32cf2218f166215751b763494c31c1f7
};

export default ProductsSection;
