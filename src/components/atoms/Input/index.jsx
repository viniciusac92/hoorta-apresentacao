import { InputStyled } from "./styles";

const Input = ({ children, size }) => {
  return (
    <div>
      <InputStyled size={size} placeholder="Name"></InputStyled>
    </div>
  );
};
export default Input;
