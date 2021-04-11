import styled from "styled-components";

export const ImgStyled = styled.div`
  background-size: contain;
  background-image: ${({ image }) => `url(${image})`};
  background-repeat: no-repeat;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  position: ${({ position }) => position};
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  transform: ${({ position }) =>
    position === "absolute" && "translateY(-100%)"};
`;
