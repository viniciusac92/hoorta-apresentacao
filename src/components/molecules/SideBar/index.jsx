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

const Sidebar = ({isProductor}) => {
	const links = [
		{icon: homeIcon, text: "Home"},
		{icon: favoritesIcon, text: "Favoritos"},
		{icon: carIcon, text: "Carrinho"},
		{icon: profileIcon, text: "Perfil"},
		{icon: storeIcon, text: "Minha Loja"},
	];

	return (
		<SideBarStyled>
			<SideBarStyledContainer>
				<Logo />
				<SideBarStyledWrap>
					{links.map(({icon, text}, key) => (
						<div key={key} className="IconWrap">
							<Icon src={icon} display={["block"]} />
							<Link>{text}</Link>
						</div>
					))}
				</SideBarStyledWrap>
			</SideBarStyledContainer>
		</SideBarStyled>
	);
};

export default Sidebar;
