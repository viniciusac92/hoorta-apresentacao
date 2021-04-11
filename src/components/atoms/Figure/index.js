import { FigureStyled } from "./style";

const Figure = ({ children, type }) => {
  return <FigureStyled type={type}>{children}</FigureStyled>;
};

export default Figure;
