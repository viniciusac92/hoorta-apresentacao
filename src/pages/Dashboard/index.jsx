import DashboardHeader from "../../components/organisms/DashboardHeader";
import StoreSection from "../../components/organisms/StoresSection";
import Meet from "../../components/molecules/Meet";
import { GridContainer } from "./styles";

const Dashboard = () => {
  return (
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
        <StoreSection />
      </div>
    </GridContainer>
  );
};

export default Dashboard;
