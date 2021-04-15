import {AppBarStyled} from "./style";
import Icon from "../../atoms/Icon";
import homeIcon from "../../../assets/images/icons/home.svg";
import favoriteIcon from "../../../assets/images/icons/heart.svg";
import cartIcon from "../../../assets/images/icons/shoppingCart.svg";
import profileIcon from "../../../assets/images/icons/profile.svg";

const AppBar = () => {
	return (
		<AppBarStyled>
			<Icon src={homeIcon} display={["block"]} />
			<Icon src={favoriteIcon} display={["block"]} />
			<Icon src={cartIcon} display={["block"]} />
			<Icon src={profileIcon} display={["block"]} />
		</AppBarStyled>
	);
};

export default AppBar;
