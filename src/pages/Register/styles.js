import styled from "styled-components";

export const RegisterStyled = styled.div`
  input {
    width: 291.67px;
  }

  button {
    height: 60px;
  }

  @media (min-width: 768px) {
    input {
      width: 356.67px;
    }

    button {
      height: 91px;
    }
  }

  @media (max-width: 768px) {
    text-align: -webkit-center;
  }
`;
