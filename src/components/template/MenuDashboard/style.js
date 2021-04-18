import styled from "styled-components";
import theme from "../../../styles/theme";

export const GridContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: 30% 1fr 1fr;
  grid-template-rows: 0.5fr 1.5fr 1fr;
  grid-template-areas:
    "Sidebar Header Header"
    "Sidebar Section Section"
    "Sidebar Section Section";
  gap: 0px 0px;

  .SidebarContainer {
    grid-area: Sidebar;
    box-shadow: ${theme.shadow};
  }

  .HeaderContainer {
    grid-area: Header;
  }

  .SectionContainer {
    grid-area: Section;
<<<<<<< HEAD
    padding-left: 7vw;
=======
>>>>>>> 3412dcd8065434eb9e25b9ff8512145fc1b380a5
    overflow-y: auto;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;

    .SidebarContainer {
      display: none;
    }

    .SectionContainer {
      grid-area: Section;
      padding-left: 0vw;
      overflow-y: auto;
    }
  }
`;
