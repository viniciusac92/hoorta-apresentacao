import { CardInfoStyled } from "./styles";

const CardInfoUserProfile = ({ children, size }) => {
  return <CardInfoStyled size={size}>{children}</CardInfoStyled>;
};
export default CardInfoUserProfile;
