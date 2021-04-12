import Figure from "../../components/atoms/Figure";
import Picture from "../../components/atoms/Picture";
import Meet from "../../components/molecules/Meet";
import Header from "../../components/organisms/Header";
import HomeInfo from "../../components/organisms/HomeInfo";
import heartImage from "../../assets/images/heartImage.png";
import vegetablePack from "../../assets/images/vegetablePack.png";
import footerPicture from "../../assets/images/footerPicture.png";

const Cart = () => {
	return (
		<div>
			<Header />
			<Picture
				image={footerPicture}
				width="444px"
				height="215px"
				position="absolute"
				top="100%"
			/>
		</div>
	);
};

export default Cart;
