import { TextStyled } from "./styles";

const Text = ({ children, weigth, size }) => {
  return (
    <div>
      <TextStyled weigth={weigth} size={size}>
        {children}
      </TextStyled>
    </div>
  );
};
export default Text;
