import styled from "styled-components";
import theme from "../../../styles/theme";

const handleShapeTypes = (type) => {
  switch (type) {
    case "square":
      return ["406px", "489px", "calc(730px - 489px)", "55%"];
    case "rectangle":
      return ["483px", "730px", "0vh", "calc(100% - (483px / 2))"];
    case "circle":
      return ["500px", "500px"];
    default:
      return null;
  }
};

export const FigureStyled = styled.div`
  background-color: ${theme.color.primary};
  width: ${({ type }) => handleShapeTypes(type)[0]};
  height: ${({ type }) => handleShapeTypes(type)[1]};
  border-radius: ${({ type }) => type === "circle" && "50%"};
  opacity: ${({ type }) => type === "circle" && "0.9"};
  position: absolute;
  transform: translateX(-50%);
  top: ${({ type }) => handleShapeTypes(type)[2]};
  left: ${({ type }) => handleShapeTypes(type)[3]};
`;
