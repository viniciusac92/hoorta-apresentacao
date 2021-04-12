import styled from "styled-components";
import card_placeholder from "../../../assets/images/card_placeholder.png";
import theme from "../../../styles/theme";

export const CardContainer = styled.div`
  height: 160px;
  margin: 20px;
  border-radius: 39px;
  background-image: url(${card_placeholder});
  background-position: center;
  background-size: cover;
  overflow: hidden;
  color: ${theme.color.gray};

  a {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
    color: inherit;
    text-decoration: none;
  }

  @media screen and (min-width: 800px) {
    height: 340px;

    max-width: 1000px;
    a {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      align-items: center;
    }
  }
`;

export const RatingMobile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 70px;
  height: 30px;
  background: ${theme.color.primary};
  border-radius: 39px;

  position: relative;
  bottom: 65px;
  left: 15px;

  img {
    margin: 0;
    padding: 5px;
  }

  @media screen and (min-width: 800px) {
    display: none;
  }
`;

export const RatingDesktop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 70px;
  height: 30px;
  background: ${theme.color.primary};
  border-radius: 39px;

  img {
    margin: 0;
    padding: 5px;
  }

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const InfoContainer = styled.div`
  background: rgba(38, 38, 38, 0.6);
  height: calc(100% / 3);
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  p:first-child {
    font-weight: ${theme.weight.semiBold};
    font-size: 20px;
  }

  p:last-child {
    color: inherit;
    display: none;
    font-weight: ${theme.weight.regular};
    font-size: 16px;
  }

  @media screen and (min-width: 800px) {
    height: 100%;

    flex-direction: column;

    p:first-child {
      padding: 0 1.5rem;
    }

    .descriptionContainer {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      overflow-y: auto;
    }

    p:last-child {
      display: inline;
    }
  }
`;
