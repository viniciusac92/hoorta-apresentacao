import { HeaderStyled } from "./styles";
import Logo from "../../atoms/Logo";
import HeaderNavBar from "../../molecules/HeaderNavBar";
import Figure from "../../atoms/Figure";

const Header = () => {
  return (
    <HeaderStyled>
      <Logo />
      <HeaderNavBar />
    </HeaderStyled>
  );
};

export default Header;
