import CardCart from "../../components/molecules/CardCart";
import Picture from "../../components/atoms/Picture";
import Header from "../../components/organisms/Header";
import footerPicture from "../../assets/images/footerPicture.png";
import DashboardHeader from "../../components/organisms/DashboardHeader";
import StoreSection from "../../components/organisms/StoresSection";
import Meet from "../../components/molecules/Meet";
import {GridContainer} from "./styles";
import ProductsSection from "../../components/organisms/ProductsSection";
import AppBar from "../../components/organisms/Appbar/AppBar";

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

					<ProductsSection />
				</div>
			</GridContainer>
			<AppBar />
		</div>
	);
};

export default Tests;
