import styled from "styled-components";
import theme from "../../../styles/theme";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;

  div {
    margin: 0 3rem;
  }

  .backContainer {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 16px;
    padding: 0 10px;
  }

  @media screen and (max-width: 800px) {
    width: 25%;

    div {
      margin: 0;
    }
    div a:first-child {
      display: none;
    }
  }
`;

export const Logout = styled.a`
  display: flex;
  text-decoration: none;
  cursor: pointer;
  color: inherit;
  font-weight: ${theme.weight.semiBold};

  @media screen and (max-width: 800px) {
  }
`;
