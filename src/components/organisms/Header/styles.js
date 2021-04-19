import styled from "styled-components";

export const HeaderStyled = styled.div`
  margin: 30px;
  display: flex;
  max-width: calc(100vw - 60px);
  width: 100%;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  height: 15vh;
  margin: 30px 0 30px 5%;

  @media screen and (min-width: 780px) {
    justify-content: space-between;
    max-width: 1000px;
    align-items: center;
    flex-direction: row;
  }
`;
