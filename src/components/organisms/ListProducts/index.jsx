import Picture from "../../atoms/Picture";
import ProductCard from "../../atoms/ProductCard";
import TextProduct from "../../atoms/TextProduct";
import { TitleDivStyled, BottomContainer, ContainerInfoStyled } from "./styles";
import organic from "../../../assets/images/organic/organic.png";
import alface from "../../../assets/images/products/alface.jpg";
import TomateCereja from "../../../assets/images/products/tomateCereja.jpg";
import Abobora from "../../../assets/images/products/abobora.jpg";
import Button from "../../atoms/Button";
import ButtonCount from "../../molecules/ButtonCount";
import { useStores } from "../../../providers/StoresContext";
import Link from "../../atoms/Link";
import ModalCreateProduct from "../ModalCreateProduct";
import { useEffect } from "react";

const ListProducts = ({ storeData, productsData }) => {
  const productImg = [alface, TomateCereja, Abobora];

  return (
    <div>
      <div className="HeaderContaier">
        <h1>{console.log(storeData)}</h1>
        <Link>Conheça mais sobre o produtor</Link>
      </div>
      <div className="EditContainer">
        <ModalCreateProduct />
        {/* Modal de Atualizar Info da Loja Vai Aqui! */}
      </div>
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
              <BottomContainer>
                <ButtonCount />
                <Button color="primary">Adicionar</Button>
              </BottomContainer>
            </ContainerInfoStyled>
          </ProductCard>
        ))}
    </div>
  );
};

export default ListProducts;
