import {
	SideBarStyled,
	SideBarStyledContainer,
	SideBarStyledWrap,
} from "./style";
import Logo from "../../atoms/Logo";
import Icon from "../../atoms/Icon";
import Link from "../../atoms/Link";
import homeIcon from "../../../assets/images/icons/home.svg";
import favoritesIcon from "../../../assets/images/icons/heart.svg";
import carIcon from "../../../assets/images/icons/shoppingCart.svg";
import profileIcon from "../../../assets/images/icons/profile.svg";
import storeIcon from "../../../assets/images/icons/store.svg";
import {useData} from "../../../providers/UserContext";
import {getUserStore} from "../../../helper/stores";
import {useEffect} from "react";

const Sidebar = () => {
	const {userData} = useData();

	const links = [
		{icon: homeIcon, text: "Home", path: "/dashboard"},
		{icon: favoritesIcon, text: "Favoritos", path: "/profile"},
		{icon: carIcon, text: "Carrinho", path: "/cart"},
		{icon: profileIcon, text: "Perfil", path: "/profile"},
		{
			icon: storeIcon,
			text: "Minha Loja",
			path: `/store/1`,
		},
	];

	return (
		<SideBarStyled>
			<SideBarStyledContainer>
				<Logo />
				<SideBarStyledWrap>
					{links.map(({icon, text, path}, key) => (
						<div key={key} className="IconWrap">
							<Icon src={icon} display={["block"]} />
							<Link to={path}>{text}</Link>
						</div>
					))}
				</SideBarStyledWrap>
			</SideBarStyledContainer>
		</SideBarStyled>
	);
};

export default Sidebar;
