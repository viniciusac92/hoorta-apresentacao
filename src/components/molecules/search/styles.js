import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;

  button {
    width: fit-content;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    right: 60px;
    top: 2px;
    border-radius: 0 39px 39px 0;
  }

  img {
    width: 20px;
  }

  @media screen and (max-width: 800px) {
    input {
      width: 100%;
      height: 40px;
    }

    button {
      top: 4px;
    }

    img {
      width: 20px;
    }
  }
`;
