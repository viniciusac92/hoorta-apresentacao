import { TextHeaderStyled } from "./styles";

const TextHeader = ({ children, color, size, fontWeight }) => {
  return (
    <TextHeaderStyled color={color} size={size} fontWeight={fontWeight}>
      {children}
    </TextHeaderStyled>
  );
};

export default TextHeader;
