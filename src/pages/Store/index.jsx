import Button from "../../components/atoms/Button";
import Figure from "../../components/atoms/Figure";
import Input from "../../components/atoms/Input";
import Picture from "../../components/atoms/Picture";
import FormLogin from "../../components/molecules/FormLogin";
import HeaderNavBar from "../../components/molecules/HeaderNavBar";
import Meet from "../../components/molecules/Meet";
import Header from "../../components/organisms/Header";
import HomeInfo from "../../components/organisms/HomeInfo";
import heartImage from "../../assets/images/heartImage.png";
import vegetablePack from "../../assets/images/vegetablePack.png";
import footerPicture from "../../assets/images/footerPicture.png";
import StoreSection from "../../components/organisms/StoresSection";

const Store = () => {
	return (
		<div>
			<Header />

			<StoreSection />

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

export default Store;
