import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 2rem 0;
  width: 100%;

  @media screen and (max-width: 800px) {
    justify-content: center;
    align-items: center;
  }
`;
