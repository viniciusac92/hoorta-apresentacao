import styled from "styled-components";

export const ImgStyled = styled.div`
  background-size: contain;
  background-image: ${({ image }) => `url(${image})`};
  background-repeat: no-repeat;
  position: ${({ position }) => position[0] || position};
  width: ${({ width }) => width[0]};
  height: ${({ height }) => height[0]};
  top: ${({ top }) => top[0]};
  left: ${({ left }) => left[0]};
  transform: ${({ position }) =>
    position === "absolute" && "translateY(-100%)"};

  @media screen and (min-width: 780px) {
    width: ${({ width }) => width[1]};
    height: ${({ height }) => height[1]};
    top: ${({ top }) => top[1]};
    left: ${({ left }) => left[1]};
    position: ${({ position }) => position[1] || position};
  }
`;
