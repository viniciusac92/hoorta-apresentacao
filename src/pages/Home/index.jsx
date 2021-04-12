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

const Home = () => {
	return (
		<div>
			<Header />
			<Meet />
			<Figure type="square">
				<Picture
					image={heartImage}
					width="437px"
					height="412px"
					top="30px"
					left="-130px"
					position="relative"
				/>
			</Figure>
			<Figure type="rectangle">
				<Picture
					image={vegetablePack}
					width="305px"
					height="444px"
					top="100px"
					left="85px"
					position="relative"
				/>
			</Figure>
			<Picture
				image={footerPicture}
				width="444px"
				height="215px"
				position="absolute"
				top="100%"
			/>
			<HomeInfo />
		</div>
	);
};

export default Home;
