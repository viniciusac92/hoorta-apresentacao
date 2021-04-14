import styled from "styled-components";
import theme from "../../../styles/theme";

export const SideBarStyled = styled.div`
  grid-area: Sidebar;
  box-shadow: ${theme.shadow.under};

  width: 100%;
  height: 100vh;
  box-shadow: ${theme.shadow.under};

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

  img {
    width: 80%;
    margin: 0 auto;
    padding: 2rem 0;
  }
`;

export const SideBarStyledWrap = styled.div`
  height: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  justify-content: space-between;

  .IconWrap {
    display: flex;
    align-items: center;
    width: 50%;
    margin: 0 auto;

    img {
      width: 1.5rem;
      margin: 0px 10px;
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
