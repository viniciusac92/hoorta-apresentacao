import { TextHeaderStyled } from "./styles";

const TextHeader = ({ styled, children, size, fontWeight }) => {
  return (
    <TextHeaderStyled styled={styled} size={size} fontWeight={fontWeight}>
      {children}
    </TextHeaderStyled>
  );
};

export default TextHeader;
