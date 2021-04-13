import styled from "styled-components";
import theme from "../../../styles/theme";

export const SideBarStyled = styled.div`
  grid-area: Sidebar;
  box-shadow: ${theme.shadow};

  width: 100%;
  height: 100%;
  box-shadow: ${theme.shadow};

  display: flex;
  flex-direction: column;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const SideBarStyledContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 80%;
    margin: 0 auto;
    padding: 2rem 0;
  }
`;

export const SideBarStyledWrap = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .IconWrap {
    display: flex;
    align-items: center;
    height: calc(70% / 5);
    width: 50%;
    margin: 0 auto;

    img {
      width: 1.5rem;
      margin: 0;
      padding: 1rem;
    }

    a {
      font-size: 20px;
    }
  }

  @media screen and (max-width: 1000px) {
    margin: 0;

    .IconWrap {
      margin: 0;
    }
  }
`;
