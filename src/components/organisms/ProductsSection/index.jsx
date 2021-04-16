import Picture from "../../atoms/Picture";
import ProductCard from "../../atoms/ProductCard";
import TextProduct from "../../atoms/TextProduct";
import {
  ProductsListStyled,
  TitleDivStyled,
  BottomContainerStyled,
  ContainerInfoStyled,
  TopContainerStyled,
  ProductCardStyled,
} from "./styles";
import organic from "../../../assets/images/organic/organic.png";
import alface from "../../../assets/images/products/alface.jpg";
import TomateCereja from "../../../assets/images/products/tomateCereja.jpg";
import Abobora from "../../../assets/images/products/abobora.jpg";
import threeDots from "../../../assets/images/icons/threeDots.svg";
import Button from "../../atoms/Button";
import ButtonCount from "../../molecules/ButtonCount";
import Link from "../../atoms/Link";
import Icon from "../../atoms/Icon";
import ModalCreateProduct from "../ModalCreateProduct";

const ProductsSection = ({ productsData, currentStoreId }) => {
  const productImg = [{ img: alface }, { img: TomateCereja }, { img: Abobora }];

  const addCart = async () => {
    try {
    } catch (e) {
      console.log(e);
    }
  };
  console.log(productsData);
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
          <ProductCardStyled size={"large"} key={index}>
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
                  <Icon
                    src={threeDots}
                    display={["block", "block"]}
                    height={["3vw", "6vw"]}
                  />
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
                  onClick={() => addCart()}
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
