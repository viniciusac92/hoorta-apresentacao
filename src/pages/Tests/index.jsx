import CardCart from "../../components/molecules/CardCart";
import Picture from "../../components/atoms/Picture";
import ListProducts from "../../components/molecules/ListProducts";
import Header from "../../components/organisms/Header";
import footerPicture from "../../assets/images/footerPicture.png";
import DashboardHeader from "../../components/organisms/DashboardHeader";
import StoreSection from "../../components/organisms/StoresSection";
import Meet from "../../components/molecules/Meet";
import {GridContainer} from "./styles";

const Tests = () => {
	return (
		<div>
			<GridContainer>
				<div className="SidebarContainer">
					<div>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error quam
						similique aliquam quibusdam aut! Dignissimos maiores sapiente,
						consequatur veritatis ratione id officiis odit necessitatibus sed,
						pariatur doloribus corrupti, provident saepe!
					</div>
				</div>
				<div className="HeaderContainer">
					<DashboardHeader />
				</div>
				<div className="SectionContainer">
					<StoreSection></StoreSection>
					<Header />

					<ListProducts />
					<Picture
						image={footerPicture}
						width={["320px", "444px"]}
						height={["155px", "215px"]}
						position={["relative", "absolute"]}
						top={["0px", "calc(100% - 215px)"]}
						left={["0", "0"]}
					/>
				</div>
			</GridContainer>
		</div>
	);
};

export default Tests;
