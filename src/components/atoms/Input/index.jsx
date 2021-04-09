import { forwardRef } from "react";
import { InputStyled } from "./styles";

const Input = ({ size, ...rest }, ref) => {
  return <InputStyled ref={ref} size={size} {...rest} />;
};
export default forwardRef(Input);
