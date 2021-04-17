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
    { linkText: "Entrar", path: "/login" },
  ];

  return (
    <HeaderNavBarStyled>
      {links.map(({ linkText, path }, key) =>
        linkText !== "Entrar" ? (
          <Link key={key} to={path}>
            {linkText}
          </Link>
        ) : (
          <Link key={key} to={path} color="primary">
            {linkText}
          </Link>
        )
      )}
    </HeaderNavBarStyled>
  );
};

export default HeaderNavBar;
