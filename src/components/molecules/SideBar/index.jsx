import {
	SideBarStyled,
	SideBarStyledContainer,
	SideBarStyledWrap,
} from "./style";
import Logo from "../../atoms/Logo";
import Icon from "../../atoms/Icon";
import Link from "../../atoms/Link";
import homeIcon from "../../../assets/images/icons/home.svg";
import heartGreen from "../../../assets/images/icons/heartGreen.svg";
import carIcon from "../../../assets/images/icons/shoppingCart.svg";
import profileIcon from "../../../assets/images/icons/profile.svg";
import storeIcon from "../../../assets/images/icons/store.svg";
import {useData} from "../../../providers/UserContext";

const Sidebar = () => {
	const {userData} = useData();

<<<<<<< HEAD
  const links = [
    { icon: homeIcon, text: "Home", path: "/dashboard" },
    { icon: heartGreen, text: "Favoritos", path: "/favorites" },
    { icon: carIcon, text: "Carrinho", path: "/cart" },
    { icon: profileIcon, text: "Perfil", path: "/profile" },
    userData.productor && {
      icon: storeIcon,
      text: "Minha Loja",
      path: `/store/${userData?.storeId}`,
    },
  ];
=======
	const links = [
		{icon: homeIcon, text: "Home", path: "/dashboard"},
		{icon: favoritesIcon, text: "Favoritos", path: "/favorites"},
		{icon: carIcon, text: "Carrinho", path: "/cart"},
		{
			icon: profileIcon,
			text: "Perfil",
			path: `/store/profile/${userData?.storeId}`,
		},
		userData.productor && {
			icon: storeIcon,
			text: "Minha Loja",
			path: `/store/${userData?.storeId}`,
		},
	];
>>>>>>> df94b849f2fad2d0d4702fcaa42f0c97cb6e5972

	return (
		<SideBarStyled>
			<SideBarStyledContainer>
				<Logo />
				<SideBarStyledWrap>
					{links.map(({icon, text, path}, key) => (
						<div key={key} className="IconWrap">
							<Icon src={icon} display={["block", "block"]} />
							<Link to={path}>{text}</Link>
						</div>
					))}
				</SideBarStyledWrap>
			</SideBarStyledContainer>
		</SideBarStyled>
	);
};

export default Sidebar;
