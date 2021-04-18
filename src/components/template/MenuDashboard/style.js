import styled from "styled-components";
import theme from "../../../styles/theme";

export const GridContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 30% 1fr 1fr;
  grid-template-rows: 0.5fr 1.5fr 1fr;
  grid-template-areas:
    "Sidebar Header Header"
    "Sidebar Section Section"
    "Sidebar Section Section";
  gap: 0px 0px;

  .appBar {
    position: fixed;
    bottom: 0px;
  }

  .SidebarContainer {
    grid-area: Sidebar;
    box-shadow: ${theme.shadow};
  }

  .HeaderContainer {
    grid-area: Header;
  }

  .SectionContainer {
    grid-area: Section;
    margin: 0px auto;
    padding-bottom: 40px;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    height: 100vh;

    .SidebarContainer {
      display: none;
    }

    .SectionContainer {
      grid-area: Section;
      padding-left: 0vw;
      margin: 0px;
    }
  }
`;
