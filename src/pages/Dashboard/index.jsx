import DashboardHeader from "../../components/organisms/DashboardHeader";
import StoreSection from "../../components/organisms/StoresSection";
import Sidebar from "../../components/molecules/SideBar";
import {GridContainer} from "./styles";

const Dashboard = () => {
	return (
		<GridContainer>
			<Sidebar />
			<div className="HeaderContainer">
				<DashboardHeader />
			</div>
			<div className="SectionContainer">
				<StoreSection />
			</div>
		</GridContainer>
	);
};

export default Dashboard;
