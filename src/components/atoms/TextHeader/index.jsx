import { TextHeaderStyled } from "./styles";

const TextHeader = ({ children, color, size, fontWeight, align }) => {
  return (
    <TextHeaderStyled
      color={color}
      size={size}
      fontWeight={fontWeight}
      align={align}
    >
      {children}
    </TextHeaderStyled>
  );
};

export default TextHeader;
