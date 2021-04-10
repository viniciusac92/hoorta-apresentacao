import { HeaderNavBarStyled } from "./style";
import Link from "../../atoms/Link";

const HeaderNavBar = () => {
  const links = [
    {
      linkText: "Home",
      path: "/",
    },
    {
      linkText: "Sobre nós",
      path: "/about",
    },
    { linkText: "Contato", path: "/contact" },
  ];

  return (
    <HeaderNavBarStyled>
      {links.map(({ linkText, path }, key) => (
        <Link key={key} to={path}>
          {linkText}
        </Link>
      ))}
    </HeaderNavBarStyled>
  );
};

export default HeaderNavBar;
