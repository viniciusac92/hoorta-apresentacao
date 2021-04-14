import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25rem;
  button {
    width: 3rem;
    height: 37px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0 39px 39px 0;
  }

  input {
    margin: 0;
    width: 100%;
    border-radius: 39px 0 0 39px;
  }

  img {
    width: 1rem;
  }

  @media screen and (max-width: 800px) {
    input {
      width: 100%;
      height: 30px;
    }

    button {
      height: 30px;
    }

    img {
      width: 20px;
    }
  }

  @media screen and (max-width: 1308px) {
    max-width: 20rem;
  }
`;
