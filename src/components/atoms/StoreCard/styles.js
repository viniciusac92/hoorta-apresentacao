import styled from "styled-components";
import card_placeholder from "../../../assets/images/card_placeholder.png";
import theme from "../../../styles/theme";

export const CardContainer = styled.div`
  height: 160px;
  background: red;
  margin: 10px;
  border-radius: ${theme.radius};
  background-image: url(${card_placeholder});
  background-position: center;
  background-size: cover;
  overflow: hidden;
  color: ${theme.color.gray};
`;

export const StyledAnchor = styled.a`
  width: 100%;
  height: 100%;

  display: flex;
  flex-wrap: wrap;

  cursor: pointer;
`;

export const Rating = styled.div`
  background: ${theme.color.primary};
  width: 50px;
  border-radius: ${theme.radius};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  margin: 1rem;
  padding: 6px;

  img {
    margin-right: 4px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  background: #26262699;
  justify-content: center;
  align-self: flex-end;
  align-items: center;
  height: calc(100% / 3);
  width: 100%;

  p:last-child {
    display: none;
  }
`;
