import { HeaderStyled } from "./styles";
import Logo from "../../atoms/Logo";
import HeaderNavBar from "../../molecules/HeaderNavBar";

const Header = () => {
  return (
    <HeaderStyled>
      <Logo />
      <HeaderNavBar />
    </HeaderStyled>
  );
};

export default Header;
