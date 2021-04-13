import styled from "styled-components";
import theme from "../../../styles/theme";

export const HeaderContainer = styled.div`
  display: flex;
  margin: 0 2rem;
  justify-content: center;
  align-items: center;

  div {
    margin: 0 1rem;
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
    div {
      margin: 0;
    }
    a:first-child {
      display: none;
    }

    .backContainer a {
      display: inline;
    }

    .backContainer p {
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
`;
