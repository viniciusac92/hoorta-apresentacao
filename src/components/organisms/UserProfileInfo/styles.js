import styled from "styled-components";

export const ContainerStyled = styled.div`
  /* display: flex;
  flex-flow: column; */
`;

ContainerStyled.Text = styled.div`
  display: flex;
  justify-content: center;
  font-size: 20px;

  button {
    margin: 45px 20px 0 87px;
    width: 140px;
  }

  /* @media (max-width: 1024px) {
    button {
      margin: 45px 20px 0 87px;
    }
  } */
`;

ContainerStyled.Register = styled.div`
  padding: 10px;
  font-size: 25px;
  text-align: center;
`;
