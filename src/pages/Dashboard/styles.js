import styled from "styled-components";
import theme from "../../styles/theme";

export const GridContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: 0.5fr 1fr 1fr;
  grid-template-rows: 0.5fr 1.5fr 1fr;
  grid-template-areas:
    "Sidebar Header Header"
    "Sidebar Section Section"
    "Sidebar Section Section";
  gap: 0px 0px;

  .HeaderContainer {
    grid-area: Header;
  }

  .SectionContainer {
    grid-area: Section;
    overflow-y: auto;
  }

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;
