import styled from "styled-components";
import theme from "../../../styles/theme";
import ProductCard from "../../atoms/ProductCard";
import ButtonCount from "../../molecules/ButtonCount";

export const ProductCardStyled = styled(ProductCard)`
  display: flex;
  flex-direction: row;

  div:first-child {
    background-repeat: repeat;
    border-radius: 50%;
    object-position: right;
    object-fit: cover;
  }

  @media screen and (min-width: 800px) {
    border-radius: ${theme.radius};

    > div:nth-child(1) {
      background-repeat: no-repeat;
      border-radius: ${theme.radius} 0px 0px ${theme.radius};
      object-position: right;
      object-fit: cover;
      width: 224px;
      height: 336px;
      top: 0px;
      left: 0px;
    }
  }
`;

export const ProductsListStyled = styled.div`
  height: auto;
  max-width: 100%;
  margin: 30px 20px;
  overflow: hidden;

  @media screen and (min-width: 800px) {
    max-width: 1046px;

    > a {
      font-size: 2.5vh;
      display: grid;
      grid-template-columns: 3fr 1fr 1fr;
      align-items: center;
    }
  }
`;

export const TitleDivStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;

  div {
    top: 5px;
    left: 35px;
  }

  @media screen and (min-width: 800px) {
    > div {
      top: 20px;
      left: 75px;
    }
  }
`;

export const BottomContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 57vw;
  /* margin-top: 1vh; */
  align-items: center;
  div {
    height: 5vw;
    width: 10vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  p {
    margin: 0rem 0rem 0rem 0rem;
  }

  img {
    padding: 0px !important;
  }

  button {
    height: min-content;
    padding: 0vh;
    width: 25vw;
    font-size: 12px;
    position: relative;
    top: 0vh;
    left: 0vw;
  }

  p {
    margin: 0rem 0rem 0rem 0rem;
  }

  @media screen and (min-width: 800px) {
    height: 2vw;
    width: 33vw;
    align-items: center;
    /* position: relative;
		top: -1vh; */

    > div {
      height: 2vw;
    }

    > button:nth-child(2) {
      height: 3.67vw;
      width: 16vw;
      font-size: 15px;
      font-size: 23px;
    }
  }
`;

export const ContainerInfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 14vh;
  left: 29vw;

  > div > p:nth-child(2) {
    margin-bottom: 0.6vh;
    width: 60vw;
  }

  div > p:nth-child(3) {
    margin-bottom: 0.3vh;
  }

  div:nth-child(2) > div > p {
    margin-bottom: 0vh;
  }

  @media screen and (min-width: 800px) {
    padding-left: 1.5vw;
    height: 37vh;
    width: 35vw;
    overflow: hidden;

    > div > p:nth-child(2) {
      width: 35vw;
    }

    > div:nth-child(2) > div > p {
      margin-bottom: 0vh !important;
    }

    > div > p:nth-child(3) {
      margin-bottom: 0.3vh;
      font-size: 2.5vh;
    }
  }
`;

export const ButtonCountStyled = styled(ButtonCount)`
  @media screen and (min-width: 800px) {
    > div {
      height: 37vh !important;
      width: 35vw !important;
    }
  }
`;

export const TopContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 71vw;
  height: 5vh;
  align-items: center;
  margin-top: 2vh;

  > div > button > span > img {
    height: 3vh;
  }

  @media screen and (min-width: 800px) {
    width: 43vw !important;
    height: 8vh !important;
    margin-bottom: 0vw;

    > div {
      width: 14vw !important;
      height: 8vh !important;
    }

    > img {
      height: 5vh;
    }
  } ;
`;
