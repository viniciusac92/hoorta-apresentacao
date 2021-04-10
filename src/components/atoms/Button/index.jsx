import { ButtonStyled } from "./styles";

const Button = ({ color, size, ...rest }) => {
  return <ButtonStyled color={color} size={size} {...rest} />;
};

export default Button;
