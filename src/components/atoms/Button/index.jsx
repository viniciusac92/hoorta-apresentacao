import { ButtonStyled } from "./styles";

const Button = ({ styled, size, ...rest }) => {
  return <ButtonStyled styled={styled} size={size} {...rest} />;
};

export default Button;
