import { TextStyled } from "./styles";

const Text = ({ children, weigth, size }) => {
  return (
    <TextStyled weigth={weigth} size={size}>
      {children}
    </TextStyled>
  );
};
export default Text;
