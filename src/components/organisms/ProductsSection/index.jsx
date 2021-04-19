import Picture from "../../atoms/Picture";
import TextProduct from "../../atoms/TextProduct";
import {
  ProductsListStyled,
  TitleDivStyled,
  BottomContainerStyled,
  ContainerInfoStyled,
  TopContainerStyled,
  ProductCardStyled,
  ButtonCountStyled,
} from "./styles";
import organic from "../../../assets/images/organic/organic.png";
import DefaultProductImage from "../../../assets/images/products/DefaultProductImage.jpg";
import Button from "../../atoms/Button";
import Link from "../../atoms/Link";
import ModalCreateProduct from "../ModalCreateProduct";
import ModalEditStore from "../ModalEditStore";
import { useState } from "react";
import { useData } from "../../../providers/UserContext";
import { useStores } from "../../../providers/StoresContext";
import MenuEditDelete from "../MenuEditDelete";

const ProductsSection = ({ productsData, currentStoreId }) => {
  const [amountOfProduct, setAmountOfProduct] = useState(1);

  const { checkOwner } = useData();
  const { storeData } = useStores();

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

  return (
    <ProductsListStyled>
      <div>
        {checkOwner(currentStoreId) && (
          <>
            <div className="iconPlus">
              <ModalEditStore currentStoreId={currentStoreId} />
            </div>
            <div className="iconPlus">
              <ModalCreateProduct currentStoreId={currentStoreId} />
            </div>
          </>
        )}
        <TextProduct size={"large"} color={"black"}>
          {storeData?.businessName}
        </TextProduct>
        <Link
          size={"large"}
          color={"primary"}
          to={`/store/profile/${currentStoreId}`}
        >
          Conheça mais sobre o produtor
        </Link>
      </div>

      {productsData &&
        productsData.map((product, index) => (
          <ProductCardStyled size={"large"} key={index}>
            <Picture
              image={DefaultProductImage}
              width={["61px", "58px"]}
              height={["61px", "65px"]}
              top={[""]}
              left={[""]}
              position={["relative"]}
            />
            <ContainerInfoStyled>
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
                    width={["", ""]}
                    height={["", ""]}
                    top={[""]}
                    left={[""]}
                    position={["relative"]}
                  />
                </TitleDivStyled>
                {checkOwner(currentStoreId) && (
                  <MenuEditDelete
                    currentProductId={product.id}
                    currentStoreId={currentStoreId}
                  />
                )}
              </TopContainerStyled>
              <TextProduct size={"medium"} color={"black"}>
                {product.info.description}
              </TextProduct>
              <BottomContainerStyled>
                <TextProduct weigth={"semiBold"}>
                  R$ {product.info.price}
                </TextProduct>
                <ButtonCountStyled
                  amountOfProduct={amountOfProduct}
                  setAmountOfProduct={setAmountOfProduct}
                >
                  {amountOfProduct}
                </ButtonCountStyled>
                <Button
                  color={"primary"}
                  onClick={() => addCart(product)}
                  size={"small"}
                >
                  Adicionar
                </Button>
              </BottomContainerStyled>
            </ContainerInfoStyled>
          </ProductCardStyled>
        ))}
    </ProductsListStyled>
  );
};

export default ProductsSection;
