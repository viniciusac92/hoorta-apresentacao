import styled from "styled-components";

export const HeaderNavBarStyled = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0 10px;
  font-size: 1.25rem;

  @media screen and (min-width: 780px) {
    justify-content: space-between;
    width: 400px;
  }
`;
