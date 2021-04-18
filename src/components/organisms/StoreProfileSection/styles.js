import styled from "styled-components";
import theme from "../../../styles/theme";

import perfilProdutor from "../../../assets/images/perfil/perfilProdutor.jpg";

export const StyledContainer = styled.div`
  @media screen and (max-width: 768px) {
    .HeaderContainer {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .ButtonContainer {
        width: 100%;
        button {
          width: fit-content;
          background: none;
        }
      }

      .Picture {
        width: 200px;
        height: 200px;
        background-image: url(${perfilProdutor});
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        border-radius: 100%;
      }

      p {
        margin: 2rem 0;
      }
    }
    .InfoContainer {
      background-color: ${theme.color.gray};
      margin: 1rem auto;
      padding: 1rem;
      max-width: 80%;

      box-shadow: ${theme.shadow.under};
    }
  }

  @media screen and (min-width: 769px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 1rem 5rem;
    .HeaderContainer {
      margin-bottom: 3rem;
    }
    .InfoContainer {
      display: grid;
      grid-template-columns: 2fr 1fr;
      grid-template-rows: 100%;
      grid-gap: 3rem;

      .Picture {
        height: 100%;
        background-image: url(${perfilProdutor});
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        border-radius: ${theme.radius};
      }

      p {
        height: 100%;
      }
    }
  }
`;
