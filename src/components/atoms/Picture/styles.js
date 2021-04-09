import styled from "styled-components";

export const ImgStyled = styled.div`
  background-size: contain;
  background-image: ${({ image }) => `url(${image})`};
  background-repeat: no-repeat;
  width: 500px;
  height: 500px;
`;
