import styled from "styled-components";
import theme from "../../../styles/theme";

const handleShapeTypes = (type) => {
  switch (type) {
    case "square":
      return {
        widthDesktop: "406px",
        heightDesktop: "489px",
        weightMobile: "230px",
        heightMobile: "272px",
        topPositionDesktop: "calc(700px - 489px)",
        leftPositionDesktop: "55%",
        topPositionMobile: "0vh",
        leftPositionMobile: "calc(40% + 50px)",
        paddingBotton: "200px",
      };
    case "rectangle":
      return {
        widthDesktop: "483px",
        heightDesktop: "700px",
        weightMobile: "283px",
        heightMobile: "272px",
        topPositionDesktop: "0vh",
        leftPositionDesktop: "calc(100% - (483px / 2))",
        topPositionMobile: "0vh",
        leftPositionMobile: "calc(100% - (483px / 2))",
      };
    case "circle":
      return {
        widthDesktop: "500px",
        heightDesktop: "500px",
        weightMobile: "250px",
        heightMobile: "250px",
        topPosition: "0vh",
        leftPosition: "calc(100% - (483px / 2))",
      };

    default:
      return null;
  }
};

export const FigureStyled = styled.div`
  background-color: ${theme.color.primary};
  width: ${({ type }) => handleShapeTypes(type).weightMobile};
  height: ${({ type }) => handleShapeTypes(type).heightMobile};
  position: relative;
  transform: translateX(-50%);
  top: ${({ type }) => handleShapeTypes(type).topPositionMobile};
  left: ${({ type }) => handleShapeTypes(type).leftPositionMobile};
  display: ${({ type }) => type === "rectangle" && "none"};

  @media screen and (min-width: 480px) {
    left: ${({ type }) => type === "square" && "calc(40% + 124px)"};
  }
  @media screen and (min-width: 780px) {
    width: ${({ type }) => handleShapeTypes(type).widthDesktop};
    height: ${({ type }) => handleShapeTypes(type).heightDesktop};
    border-radius: ${({ type }) => type === "circle" && "50%"};
    opacity: ${({ type }) => type === "circle" && "0.9"};
    position: absolute;
    top: ${({ type }) => handleShapeTypes(type).topPositionDesktop};
    left: ${({ type }) => type === "square" && "82%"};
  }

  @media screen and (min-width: 1555px) {
    top: ${({ type }) => handleShapeTypes(type).topPositionDesktop};
    left: ${({ type }) => handleShapeTypes(type).leftPositionDesktop};
    display: ${({ type }) => type === "rectangle" && "block"};
  }
`;
