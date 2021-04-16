import styled from "styled-components";
import ProductCard from "../../atoms/ProductCard";

export const ProductCardStyled = styled(ProductCard)`
  p::first > {
    font-size: 2vw;
  }
`;

export const ProductsListStyled = styled.div`
  height: auto;
  max-width: 100%;
  margin: 30px 20px;
  overflow: hidden;

  @media screen and (min-width: 800px) {
    max-width: 1046px;
    a {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      align-items: center;
    }
  }
`;

export const TitleDivStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;

  > div {
    top: 5px;
    left: 35px;
  }
`;

export const BottomContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 61vw;

  button::first {
    height: 5vw;
    width: 5vw;
  }

  button::first > img {
    padding: none;
  }

  > button {
    height: 1.4rem;
    padding: 0vw;
  }

  > p {
    margin: 0rem 0rem 0rem 0rem;
  }

  @media screen and (min-width: 800px) {
    button {
      height: 4vw;
      width: 14vw;
    }
  }
`;

export const ContainerInfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 26vw;
  height: 25vw;

  @media screen and (min-width: 800px) {
    padding-left: 18rem;
  }
`;

export const TopContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 74vw;
  height: 5vw;
  align-items: center;
  margin-bottom: 2.5vw;
  > img {
    height: 4vw;
  }

  @media screen and (min-width: 800px) {
    > img {
      height: 8vw;
    }
  } ;
`;
